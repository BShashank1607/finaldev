const openBtn = document.getElementById("button1");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-btn");
const usernameForm = document.getElementById("username-form");

openBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

usernameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const usernameInput = document.getElementById("username");
  const username = usernameInput.value;
  console.log(username);
  popup.style.display = "none";
});
