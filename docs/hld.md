# HLD — Arquitetura de alto nível

**Status:** proposta para a primeira versão.

## Visão geral

Aplicação estática entregue pelo GitHub Pages. O navegador recebe `index.html`, `style.css` e `script.js` da branch principal; não há backend, armazenamento de usuários ou chamadas de API.

## Componentes

- **HTML5:** conteúdo semântico, cinco seções e navegação por fragmentos.
- **CSS3:** identidade visual, layout fluido, breakpoint móvel, estados de foco e preferência por movimento reduzido.
- **JavaScript:** atualização do ano do rodapé; navegação não depende de JavaScript.
- **GitHub Pages:** hospedagem estática a habilitar no repositório.

## Fluxo

Visitante → GitHub Pages → HTML/CSS/JS → links de seção ou perfil GitHub.

## Segurança e privacidade

Sem formulários, cookies próprios, backend ou dados sensíveis. Link externo abre em nova aba com `rel="noopener noreferrer"`. Conteúdo de projetos precisa de revisão para remover informação privada e respeitar licenças.

## Riscos

Conteúdo genérico remanescente pode representar incorretamente o aluno; links podem estar desatualizados; Pages pode permanecer desabilitado. Revisar conteúdo, confirmar perfil e validar URL de Pages antes de entregar.
