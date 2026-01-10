document.addEventListener("DOMContentLoaded", () => {
  const container = 'div[class~="language-md"]';

  // **texto** → texto
  document.querySelectorAll(`${container} .gs`).forEach((el) => {
    el.textContent = el.textContent.replace(/\*\*(.*?)\*\*/g, "$1");
  });

  // ## texto → texto
  document.querySelectorAll(`${container} .gu`).forEach((el) => {
    el.textContent = el.textContent.replace(/^#{2}\s*(.*)/, "$1");
  });
});
