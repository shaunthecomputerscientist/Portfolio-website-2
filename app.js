const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});












const bubbleContainer = document.querySelector('.bubble-container');

function createBubbles() {
  const numBubbles = 20;

  for (let i = 0; i < numBubbles; i++) {
    const bubble = document.createElement('div');
    bubble.className = `bubble ${i % 2 ? 'red' : 'blue'}`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDelay = `${Math.random() * 5}s`;
    bubbleContainer.appendChild(bubble);
  }
}

createBubbles();
