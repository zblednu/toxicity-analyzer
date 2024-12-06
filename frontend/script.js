const url = "http://localhost:8080";
const flower = "./public/flower.svg";
const barrel = "./public/barrel.svg";

const textarea = document.querySelector("textarea");
textarea.focus();

textarea.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
  if (event.key === "Enter" && textarea.value.trim()) {
    event.preventDefault();
    textarea.disabled = true; 
    textarea.removeEventListener("keydown", handleKeyPress);

    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: textarea.value.trim()
      })
    }

    fetch(url, payload)
      .then(response => response.json())
      .then(handleResponse);
  }
}

const visualBert = document.querySelector(".visual.bert");
const visualNeural = document.querySelector(".visual.neural");
const visualDict = document.querySelector(".visual.dict");

const numericalBert = document.querySelector(".numerical.bert");
const numericalNeural = document.querySelector(".numerical.neural");
const numericalDict = document.querySelector(".numerical.dict");

function handleResponse(data) {
  textarea.addEventListener("keydown", handleKeyPress);
  textarea.disabled = false; 
  textarea.focus();

  numericalBert.innerHTML = Math.ceil(data.bert * 100) + "%";
  numericalNeural.innerHTML = Math.ceil(data.neural * 100) + "%";
  numericalDict.innerHTML = data.dict ? "Toxic" : "Not Toxic";

  visualBert.style.height = `${data.bert * 100}%`; 
  visualNeural.style.height = `${data.neural * 100}%`; 

  [visualBert, visualNeural].forEach(elem => {
    elem.style.animation = "none";
    requestAnimationFrame(() => elem.style.animation = "");
  });

  visualDict.src = data.dict ? barrel : flower;
}
