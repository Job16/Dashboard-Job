
function updateDateTime() {
  const now = new Date();
  const dt = now.toLocaleDateString('nl-NL') + ' ' + now.toLocaleTimeString('nl-NL');
  document.getElementById("datetime").textContent = dt;
}
setInterval(updateDateTime, 1000);
updateDateTime();

function openKeyboard() {
  document.getElementById("keyboardModal").style.display = "flex";
  document.getElementById("nameInput").focus();
}

function submitName() {
  const name = document.getElementById("nameInput").value;
  if (name.trim()) {
    // Opslaan of verzenden indien nodig
    window.location.href = "formulier.html";
  } else {
    alert("Vul je naam in.");
  }
}

function setLanguage(lang) {
  alert("Taalwissel naar: " + (lang === "nl" ? "Nederlands" : "Engels"));
}

// Toetsenbord genereren
const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const keysContainer = document.getElementById("keys");
if (keysContainer) {
  keys.forEach(letter => {
    const btn = document.createElement("div");
    btn.className = "key";
    btn.textContent = letter;
    btn.onclick = () => {
      const input = document.getElementById("nameInput");
      input.value += letter;
    };
    keysContainer.appendChild(btn);
  });
}
