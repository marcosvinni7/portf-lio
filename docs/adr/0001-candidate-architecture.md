# ADR-0001 — Arquitetura candidata para hospedagem

- **Status:** proposta adotada para o protótipo; confirmar após revisão.
- **Data:** 2026-11-12.

## Contexto

A atividade pede um portfólio leve, responsivo e publicável sem contratação de hospedagem. A solução deve ser simples de manter por quem está aprendendo desenvolvimento web.

## Decisão

Usar HTML5, CSS3 e JavaScript sem framework, com hospedagem estática no GitHub Pages.

## Alternativa considerada

React/Next.js oferece componentes e recursos adicionais, porém exigiria configuração de dependências, build e processo de publicação mais complexo para este site de uma página.

## Consequências

- Arquivos podem ser publicados diretamente da raiz da branch `main`.
- Não há custo de execução de servidor nem processamento dinâmico.
- Recursos futuros que dependam de servidor exigirão serviço externo ou reavaliação da arquitetura.
- O endereço final depende do nome confirmado do repositório e da configuração em Settings > Pages.
