# Feature Spec — FEAT-001 Página inicial do portfólio

**Status:** implementação local criada; conteúdo pessoal e publicação pendentes.

## Objetivo

Oferecer uma página inicial que apresente o aluno e permita navegar pelas áreas do portfólio em diferentes larguras de tela.

## Requisitos relacionados

RF-001, RF-002, RF-003, RF-004, RF-005, RF-006; RNF-001, RNF-002, RNF-003, RNF-004, RNF-005.

## Critérios de aceitação

- **AC-001:** Dado que o visitante acessa a página, quando ela carregar, então deve ver o nome profissional e um resumo de apresentação.
- **AC-002:** Dado que o visitante seleciona “Projetos” no menu, quando a ação ocorrer, então a página deve navegar até a seção correspondente.
- **AC-003:** Dado que a página é aberta em largura de 390 px, quando o visitante navega, então o conteúdo não deve exigir rolagem horizontal.
- **AC-004:** Dado que um link do GitHub é acionado, quando aberto, então deve direcionar ao perfil correto em nova aba.
- **AC-005:** Dado que imagem informativa seja adicionada, quando lida por tecnologia assistiva, então deve ter texto alternativo significativo. O protótipo atual não usa imagem informativa.

## Testes planejados

T-001 carregamento; T-002 navegação; T-003 viewport de 390 px; T-004 perfil externo; T-005 navegação por teclado e legibilidade. Resultados não registrados aqui: preencher em `docs/quality-gates.md` somente após execução.
