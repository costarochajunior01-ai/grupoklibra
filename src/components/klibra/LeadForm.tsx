import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Cta } from "./ui";
import { openWhatsApp, trackEvent } from "@/lib/klibra";

type Fields = {
  nome: string;
  empresa: string;
  cidade: string;
  whatsapp: string;
  negocio: string;
  interesse: string;
  mensagem: string;
};

const EMPTY: Fields = {
  nome: "",
  empresa: "",
  cidade: "",
  whatsapp: "",
  negocio: "",
  interesse: "",
  mensagem: "",
};

const NEGOCIOS = ["Revenda", "Borracharia", "Oficina", "Outro"];
const INTERESSES = ["Agrícola/pesada", "Reparação", "Motos", "Catálogo completo"];

function validate(values: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (values.nome.trim().length < 2) errors.nome = "Informe seu nome completo.";
  if (values.empresa.trim().length < 2) errors.empresa = "Informe o nome da empresa.";
  if (values.cidade.trim().length < 3) errors.cidade = "Informe cidade e estado (ex.: Barreiras/BA).";
  const digits = values.whatsapp.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13)
    errors.whatsapp = "Informe um WhatsApp válido com DDD.";
  if (!values.negocio) errors.negocio = "Selecione o tipo de negócio.";
  if (!values.interesse) errors.interesse = "Selecione o principal interesse.";
  return errors;
}

const fieldClass =
  "w-full border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/60";

export function LeadForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof Fields) => (v: string) => {
    setValues((prev) => ({ ...prev, [key]: v }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      trackEvent("form_error", { fields: Object.keys(found).join(",") });
      return;
    }
    trackEvent("generate_lead", {
      tipo_negocio: values.negocio,
      interesse: values.interesse,
    });
    setSent(true);
    openWhatsApp(
      `Olá, K-Libra! Solicitei atendimento comercial pelo site.\n\n` +
        `Nome: ${values.nome}\nEmpresa: ${values.empresa}\nCidade/UF: ${values.cidade}\n` +
        `WhatsApp: ${values.whatsapp}\nTipo de negócio: ${values.negocio}\n` +
        `Interesse: ${values.interesse}` +
        (values.mensagem ? `\nMensagem: ${values.mensagem}` : ""),
      "formulario",
    );
  }

  if (sent) {
    return (
      <div
        role="status"
        className="angular-clip border border-primary/50 bg-surface p-8 text-center"
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" aria-hidden />
        <h3 className="mt-4 text-2xl">Solicitação enviada</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Abrimos o WhatsApp com seus dados preenchidos. Se a janela não abrir, toque no botão
          abaixo para falar agora com nossa equipe comercial.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Cta onClick={() => openWhatsApp("Olá! Acabei de enviar o formulário no site.", "sucesso")}>
            Abrir WhatsApp
          </Cta>
          <Cta
            variant="ghost"
            onClick={() => {
              setValues(EMPTY);
              setSent(false);
            }}
          >
            Enviar nova solicitação
          </Cta>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="angular-clip border border-border bg-surface p-6 md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome" error={errors.nome} id="nome">
          <input
            id="nome"
            className={fieldClass}
            value={values.nome}
            onChange={(e) => set("nome")(e.target.value)}
            placeholder="Seu nome"
            autoComplete="name"
            aria-invalid={!!errors.nome}
          />
        </Field>
        <Field label="Empresa" error={errors.empresa} id="empresa">
          <input
            id="empresa"
            className={fieldClass}
            value={values.empresa}
            onChange={(e) => set("empresa")(e.target.value)}
            placeholder="Razão social ou nome fantasia"
            autoComplete="organization"
            aria-invalid={!!errors.empresa}
          />
        </Field>
        <Field label="Cidade e estado" error={errors.cidade} id="cidade">
          <input
            id="cidade"
            className={fieldClass}
            value={values.cidade}
            onChange={(e) => set("cidade")(e.target.value)}
            placeholder="Ex.: Barreiras/BA"
            aria-invalid={!!errors.cidade}
          />
        </Field>
        <Field label="WhatsApp" error={errors.whatsapp} id="whatsapp">
          <input
            id="whatsapp"
            className={fieldClass}
            value={values.whatsapp}
            onChange={(e) => set("whatsapp")(e.target.value)}
            placeholder="(00) 00000-0000"
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={!!errors.whatsapp}
          />
        </Field>
        <Field label="Tipo de negócio" error={errors.negocio} id="negocio">
          <select
            id="negocio"
            className={fieldClass}
            value={values.negocio}
            onChange={(e) => set("negocio")(e.target.value)}
            aria-invalid={!!errors.negocio}
          >
            <option value="">Selecione</option>
            {NEGOCIOS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Principal interesse" error={errors.interesse} id="interesse">
          <select
            id="interesse"
            className={fieldClass}
            value={values.interesse}
            onChange={(e) => set("interesse")(e.target.value)}
            aria-invalid={!!errors.interesse}
          >
            <option value="">Selecione</option>
            {INTERESSES.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Mensagem (opcional)" id="mensagem">
            <textarea
              id="mensagem"
              rows={4}
              className={fieldClass}
              value={values.mensagem}
              onChange={(e) => set("mensagem")(e.target.value)}
              placeholder="Conte o que sua operação precisa repor com mais frequência."
            />
          </Field>
        </div>
      </div>

      <Cta type="submit" size="lg" className="mt-6 w-full sm:w-auto">
        Solicitar atendimento
      </Cta>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
