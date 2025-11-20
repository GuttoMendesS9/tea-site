const buttons = document.querySelectorAll(".tab-btn");
const sections = document.querySelectorAll(".tab-content");


buttons.forEach(btn => {
btn.addEventListener("click", () => {
buttons.forEach(b => b.classList.remove("active"));
btn.classList.add("active");


sections.forEach(sec => sec.classList.remove("active"));
document.getElementById(btn.dataset.target).classList.add("active");
});
});