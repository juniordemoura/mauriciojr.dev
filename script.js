const text = "Backend Developer em formação 🚀";
let index = 0;

function typing() {
const el = document.getElementById("typing");

if (!el) return;

if (index < text.length) {
el.innerHTML += text.charAt(index);
index++;
setTimeout(typing, 50);
}
}

// ================= SCROLL REVEAL =================
function revealOnScroll() {
const elements = document.querySelectorAll(".reveal");

elements.forEach(el => {
const top = el.getBoundingClientRect().top;

if (top < window.innerHeight - 100) {
  el.classList.add("active");
}

});
}

// ================= ANIMAÇÃO DAS SKILLS =================
function animateSkills() {
const skills = document.querySelectorAll(".skill");

skills.forEach(skill => {
const progress = skill.querySelector(".progress");
const percent = skill.querySelector(".percent");

if (!progress || !percent) return;

const value = progress.getAttribute("data-width");
const top = skill.getBoundingClientRect().top;

if (top < window.innerHeight - 100 && !progress.classList.contains("loaded")) {

  progress.classList.add("loaded");
  progress.style.width = value + "%";

  let count = 0;

  const interval = setInterval(() => {
    if (count >= value) {
      clearInterval(interval);
    } else {
      count++;
      percent.textContent = count + "%";
    }
  }, 15);

}

});
}

// ================= INICIALIZAÇÃO =================
window.onload = () => {
typing();
revealOnScroll();
animateSkills();
};

// ================= EVENTO SCROLL =================
window.addEventListener("scroll", () => {
revealOnScroll();
animateSkills();
});