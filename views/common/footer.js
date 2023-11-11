const footerStyles = `
  #ft {
  overflow: hidden;
  position: relative;
  padding: 45px 0;
  border-top: 1px solid #ddd;
  background: #191919;
  color: #999;
  text-align: center;
  line-height: 18px;
  }
  #footer-wrap {
    height:100px;
  }

`;

const styleSheet1 = document.createElement("style");
styleSheet1.type = "text/css";
styleSheet1.innerText = footerStyles;
document.head.appendChild(styleSheet1);

function createFooter() {
  const footer = document.createElement("footer");
  footer.id = "ft";
  footer.innerHTML = `
  <div id="footer-wrap">
    <p>this is footer content</p>
  </div>
  `;
  document.body.appendChild(footer);
}

createFooter();
