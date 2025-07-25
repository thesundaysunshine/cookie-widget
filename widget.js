(function () {
  const url = window.location.origin;
  const color = "#ff6600";
  const emoji = "🍪";
  const modalTitle = "Privacy Preferences";
  const acceptText = "Accept All";
  const rejectText = "Reject All";
  const position = "right: 20px;"; // Or use "left: 20px;" if preferred

  // Inject styles
  const style = document.createElement("style");
  style.textContent = `
    #cookie-settings-btn button {
      background-color: ${color};
      border: none;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      color: white;
      font-size: 24px;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .cloud-btn {
      background-color: ${color};
      color: white;
      border: none;
      border-radius: 999px;
      padding: 10px 20px;
      margin: 5px;
      font-size: 14px;
      box-shadow: 0 4px 10px rgba(255, 102, 0, 0.4);
      cursor: pointer;
    }
    .cloud-btn:hover {
      background-color: #e65c00;
    }
    #cookie-modal {
      display:none;
      position:fixed;
      top:0; left:0;
      width:100%; height:100%;
      background:rgba(0,0,0,0.5);
      z-index:9998;
    }
    #cookie-modal .cookie-box {
      background:white;
      margin:60px auto;
      padding:30px;
      max-width:700px;
      border-radius:10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }
  `;
  document.head.appendChild(style);

  // Widget HTML
  const html = `
<div id="cookie-settings-btn" style="position: fixed; bottom: 20px; ${position} z-index: 9999;">
  <button id="toggle-cookie-settings" aria-label="Toggle Cookie Settings">${emoji}</button>
</div>

<div id="cookie-modal">
  <div class="cookie-box">
    <h2>${modalTitle}</h2>
    <p>
      This site uses cookies to personalize content, provide social media features, and analyze traffic.<br><br>
      <a href="${url}/cookie-notice" target="_blank" rel="noopener" style="color:${color};">Cookie Notice</a>
    </p>
    <div style="text-align:right; margin-top:20px;">
      <button class="cloud-btn" onclick="toggleCookieModal()">${rejectText}</button>
      <button class="cloud-btn" onclick="toggleCookieModal()">${acceptText}</button>
    </div>
  </div>
</div>
`;

  // Inject HTML into the page
  const container = document.createElement("div");
  container.innerHTML = html;
  document.body.appendChild(container);

  // Toggle modal function
  window.toggleCookieModal = function () {
    const modal = document.getElementById("cookie-modal");
    modal.style.display = modal.style.display === "block" ? "none" : "block";
  };

  // Click on 🍪 button to toggle modal
  document.addEventListener("click", function (e) {
    if (e.target && e.target.id === "toggle-cookie-settings") {
      toggleCookieModal();
    }
  });
})();
