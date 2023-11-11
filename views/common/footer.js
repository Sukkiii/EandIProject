const footerStyles = `

`;

const styleSheet1 = document.createElement("style");
styleSheet1.type = "text/css";
styleSheet1.innerText = footerStyles;
document.head.appendChild(styleSheet1);

function createFooter() {
  const footer = document.createElement("footer");
  footer.id = "ft";
  footer.innerHTML = `

  `;
  document.body.appendChild(footer);
}

createFooter();
