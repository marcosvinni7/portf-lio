// A navegação é feita por âncoras HTML; o JavaScript apenas atualiza o ano.
const year = document.querySelector('#ano');
if (year) year.textContent = new Date().getFullYear();
