let body = document.body;

let moonIcon = document.querySelector(".fa-moon");

let sunIcon = document.querySelector(".fa-sun");

//! SUN MODE FUNCTIONALITY

const sunFunc = () => {
  body.classList.add("active");
};

if (localStorage.getItem("sun")) {
  sunIcon.style.display = "none";

  moonIcon.style.display = "block";

  sunFunc();
}

sunIcon.addEventListener("click", () => {
  localStorage.setItem("sun", "light");

  if (localStorage.getItem("moon")) {
    localStorage.removeItem("moon");
  }

  sunIcon.style.display = "none";

  moonIcon.style.display = "block";

  sunFunc();
});

//! MOON MODE FUNCTIONALITY

const moonFunc = () => {
  body.classList.remove("active");
};

if (localStorage.getItem("moon")) {
  moonIcon.style.display = "none";

  sunIcon.style.display = "block";

  moonFunc();
}

moonIcon.addEventListener("click", () => {
  localStorage.setItem("moon", "dark");

  if (localStorage.getItem("sun")) {
    localStorage.removeItem("sun");
  }

  moonIcon.style.display = "none";

  sunIcon.style.display = "block";

  moonFunc();
});
