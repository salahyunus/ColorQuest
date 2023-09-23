const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const header = document.querySelector("h1");
const Msg = document.getElementById("message");
const easyMBtn = document.getElementById("easyBtn");
const hardMBtn = document.getElementById("hardBtn");
const container = document.getElementById("container");
const resetBtn = document.getElementById("reset");
function genRandomNum() {
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  return (rgb = `rgb(${r},${g},${b})`);
}
function game() {
  Msg.textContent = "Click Matching Color Block 🧠!";
  let chosenSq = squares[Math.floor(Math.random() * 6)];
  header.style.background = "#3b44f6f6";
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = genRandomNum();
  }
  colorDisplay.textContent = chosenSq.style.backgroundColor;
}

function correct(clickede) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = clickede.style.backgroundColor;
  }
  header.style.backgroundColor = clickede.style.backgroundColor;
  Msg.textContent = "You Won 🎉🎉";
}

easyMBtn.addEventListener("click", function () {
  game();
  header.style.background = "#3b44f6f6";
  Msg.textContent = "Click Matching Color Block 🧠!";
  hardMBtn.classList.remove("selected");
  //I added a "selected" class to easymode button when its clicked, and removed it from hard button, so the selected game mode becomes highlighted with white!
  easyMBtn.classList.add("selected");
  chosenSq = squares[Math.floor(Math.random() * 3)];
  colorDisplay.textContent = chosenSq.style.backgroundColor;
  for (let i = 3; i < squares.length; i++) {
    squares[i].style.opacity = 0;
    squares[i].style.display = "none";
  }
});

hardMBtn.addEventListener("click", function () {
  game();
  header.style.background = "#3b44f6f6";
  Msg.textContent = "Click Matching Color Block 🧠!";
  easyMBtn.classList.remove("selected");
  //I added a "selected" class to easymode button when its clicked, and removed it from hard button, so the selected game mode becomes highlighted with white!
  hardMBtn.classList.add("selected");
  chosenSq = squares[Math.floor(Math.random() * 6)];
  colorDisplay.textContent = chosenSq.style.backgroundColor;
  for (let i = 3; i < squares.length; i++) {
    squares[i].style.opacity = 1;
    squares[i].style.display = "block";
  }
});
resetBtn.addEventListener("click", function () {
  game();
});

function lose(clicked) {
    clicked.style.background = "#2f2f2f";
    clicked.style.userSelect = "none";
    clicked.onmouseover = clicked.style.transform = "none";
  Msg.textContent = "Srry Try another one 👺👺!";
}

squares.forEach((squares) => {
  squares.addEventListener("click", (event) => {
    if (event.target.style.backgroundColor === colorDisplay.textContent) {
      correct(event.target);
    }
    else {
      lose(event.target);
    }
  });
});

game();
