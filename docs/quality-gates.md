# Testes e Quality Gates — FEAT-001

**Execução:** 12/11/2026.  
**Resultado estático:** 9 verificações aprovadas, 0 reprovadas. O relatório está em `evidence/static-checks.json`.

A verificação foi feita no código-fonte e com execução isolada do JavaScript usando um DOM simulado. Ela não substitui a navegação visual no navegador. A tentativa de abrir a página local no navegador foi bloqueada pela política de segurança; portanto, os testes manuais de interface abaixo continuam pendentes.

## Testes da atividade

| ID | Verificação | Resultado | Evidência / observação |
|---|---|---|---|
| T-001 | Cabeçalho e apresentação carregam sem erros | Parcial — estrutura conferida | HTML contém nome, título e apresentação; renderização visual e captura pendentes |
| T-002 | Menu Sobre, Projetos e Contato funciona | Parcial — destinos conferidos | Âncoras apontam para IDs existentes; clique real no navegador pendente |
| T-003 | Layout em 390 px sem rolagem horizontal | Pendente | Existe breakpoint móvel; é necessário medir e capturar em viewport de 390 px |
| T-004 | Link externo abre o perfil correto | Parcial — configuração conferida | HTTPS, nova aba e 
`noopener noreferrer` presentes; destino externo não foi acessado para confirmar o perfil |
| T-005 | Tab destaca links e conteúdo é legível | Parcial — suporte no código conferido | Link de salto e regra `:focus-visible` presentes; percurso real por teclado e legibilidade visual pendentes |

## Quality Gates

- Cinco seções e navegação com destinos existentes: **Aprovado por inspeção estática**
- Dashboard da atividade incluído na apresentação, com métricas rotuladas e pendências explícitas: **Aprovado por inspeção estática**
- Dois cards de projeto: **Aprovado como estrutura; conteúdo real pendente**
- Breakpoint móvel e preferência por movimento reduzido no CSS: **Aprovado por inspeção estática; teste visual de 390 px pendente**
- Link externo configurado com segurança: **Aprovado por inspeção estática; perfil de destino pendente de confirmação**
- Link de salto e estilo de foco visível: **Aprovado por inspeção estática; teste por teclado pendente**
- Biografia, área de interesse e competências pessoais revisadas: **Pendente do aluno**
- Dois projetos acadêmicos reais com descrições verificadas: **Pendente do aluno**
- Testes T-001 a T-005 executados visualmente e capturas reais salvas: **Pendente**
- GitHub Pages publicado e URL copiada de Settings > Pages: **Pendente**
- Rastreabilidade, evidências e Quality Gates no Engineering Dashboard: **Pendente**
- Relato de dificuldades e PDF curto para Classroom: **Pendente**

## Resultado

Os checks estáticos passaram (9/9). O gate de publicação e a aceitação integral da FEAT-001 permanecem **pendentes** até a personalização, testes de interface, evidências e publicação. Não declarar a atividade integralmente concluída antes dessas etapas.



