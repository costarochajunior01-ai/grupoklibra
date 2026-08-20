# Ajuste de posicionamento da imagem do Hero

## Contexto
A imagem do hero (`src/routes/index.tsx`, linha 149) está renderizada dentro de um container absoluto à direita (`right-0 w-[52%]`) com `h-full` e a própria imagem usa `object-cover`. Isso faz com que a foto seja cortada para preencher a área, e a parte visível pode não ser a ideal (van/prateleiras).

## Opções de ajuste

1. **Controlar o ponto de foco com `object-position`**
   - Manter `object-cover` (ocupa todo o espaço sem distorcer) e adicionar `object-position` para definir qual região da imagem deve ficar visível.
   - Exemplos: `object-center` (padrão), `object-left`, `object-right`, `object-top`, `object-bottom`, ou valores percentuais como `object-[center_30%]`.
   - É a solução mais rápida e preserva o layout atual.

2. **Evitar corte com `object-contain`**
   - A imagem inteira fica visível, mas pode aparecer área vazia ao redor dependendo das proporções.
   - Geralmente não é ideal para hero de impacto visual.

3. **Ajustar a proporção do container**
   - Alterar `w-[52%]` para um valor maior/menor ou mudar para uma altura fixa (`h-[600px]` etc.).
   - Pode afetar o equilíbrio entre texto e imagem no hero.

4. **Converter para background-image**
   - Permite usar `background-position` e `background-size` com mais flexibilidade.
   - Requer refatoração do JSX e perde o carregamento otimizado de `<img>`.

## Proposta
Implementar a **opção 1** como primeiro passo: adicionar `object-position` à imagem do hero e testar posições que destaquem a van e o estoque. Se o corte ainda não ficar satisfatório, avaliar ajustar a largura do container (`w-[52%]`) em conjunto.

## Arquivos envolvidos
- `src/routes/index.tsx` (linha 149 ~ 154)
- `src/styles.css` (caso seja necessário criar uma classe utilitária customizada)

## Passos
1. Adicionar `object-position` à imagem do hero no `index.tsx`.
2. Verificar visualmente no preview como a imagem se comporta em telas grandes.
3. Se necessário, ajustar `w-[52%]` do container para melhor enquadramento.
4. Validar responsividade mantendo o texto legível sobre a imagem.
