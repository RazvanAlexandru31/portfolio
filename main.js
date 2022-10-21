const panels = document.querySelectorAll(".panel");
const about = document.getElementById("about-btn");
const projects = document.getElementById("projects-btn");
const contact = document.getElementById("contact-btn");
const aboutToHome = document.getElementById("about-home");
const projectToHome = document.getElementById("project-home");
const contactToHome = document.getElementById("contact-home");

const homePage = document.querySelector(".container");
const aboutPage = document.getElementById("about");
const projectsPage = document.getElementById("projects");
const contactPage = document.getElementById("contact");

const form = document.querySelector("form");
const nameInput = document.querySelector("input[name='name']");
const infoMessage = document.getElementById("info-message")
const formContainer = document.querySelector(".form")
const thankYouMsg = document.querySelector(".thanks-message")
const emailInput = document.querySelector("input[name='email']")
const infoMessageEmail = document.getElementById("info-message-email")
const phoneInput = document.querySelector("input[name='phone']")
const infoMessagePhone = document.getElementById("info-message-phone")
const messageInput = document.querySelector("textarea[name='message']")


panels.forEach((panel) => {
  console.log(panel);
  panel.addEventListener("click", () => {
    removeActiveClass();

    window.addEventListener("resize", () => {
      if (window.innerWidth < 780) panel.classList.remove("active");
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 780) panel.classList.remove("active");
    });

    panel.classList.add("active");
  });
});

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

about.addEventListener("click", () => {
  aboutPage.style.display = "inherit";
  homePage.style.display = "none";
  projectsPage.style.display = "none";
  contactPage.style.display = "none";
});

projects.addEventListener("click", () => {
  aboutPage.style.display = "none";
  homePage.style.display = "none";
  projectsPage.style.display = "flex";
  contactPage.style.display = "none";
});

contact.addEventListener("click", () => {
  aboutPage.style.display = "none";
  homePage.style.display = "none";
  projectsPage.style.display = "none";
  contactPage.style.display = "flex";  
});

aboutToHome.addEventListener("click", () => {
  aboutPage.style.display = "none";
  homePage.style.display = "inherit";
});

projectToHome.addEventListener("click", () => {
  removeActiveClass();
  projectsPage.style.display = "none";
  homePage.style.display = "inherit";
});

contactToHome.addEventListener("click", () => {
  contactPage.style.display = "none";
  homePage.style.display = "inherit";
});


let isFormValid = false;
let isValidationOn = false;

function invalidNameInput () {
  infoMessage.classList.remove("hidden")
  infoMessage.textContent = "Your name is requiered."
  nameInput.classList.add("invalid")
  isFormValid = false;
  setTimeout(()=> {
    infoMessage.classList.add("hidden")
    nameInput.classList.remove("invalid")
  }, 3000)
}

function invalidNameInputTwo () {
  infoMessage.textContent = "Your name must have at least 3 characters."
  infoMessage.classList.remove("hidden")
  nameInput.classList.add("invalid")
  isFormValid = false;
}

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

function invalidEmail () {
  infoMessageEmail.classList.remove("hidden")
  infoMessageEmail.textContent = "Looks like this is not a valid email."
  emailInput.classList.add("invalid")
  isFormValid = false;
  setTimeout(()=> {
    infoMessageEmail.classList.add("hidden")
    emailInput.classList.remove("invalid")
  }, 3000)
}

const isValidPhone = (phone) => {
  const re = new RegExp("^(\\s*|\\d+)$");
  return re.test(String(phone).toLowerCase());
};

function invalidPhone () {
  infoMessagePhone.classList.remove("hidden")
  infoMessagePhone.textContent = "Dosen't look like a valid phone number."
  phoneInput.classList.add("invalid")
  isFormValid = false;
  setTimeout(()=> {
    infoMessagePhone.classList.add("hidden")
    phoneInput.classList.remove("invalid")
  }, 3000)
}

function validateInput() {
  // console.log(nameInput.value)
  if(!isValidationOn) return;
  if(!nameInput.value){
    invalidNameInput ();
  }else if(nameInput.value.length < 3){
    invalidNameInputTwo();
  }else{
    infoMessage.classList.add("hidden")
    nameInput.classList.remove("invalid")
    isFormValid = true
  }

  if(!isValidEmail(emailInput.value)){
    invalidEmail();
  }

  if(!isValidPhone(phoneInput.value)){
    invalidPhone();
  }

  if(!messageInput.value){
    isFormValid = false;
    messageInput.classList.add("invalid")
    setTimeout(()=> {
      messageInput.classList.remove("invalid")
    }, 3000)
  }

};

nameInput.addEventListener("input", () => {
  validateInput();
});


form.addEventListener("submit", (e) => {
  // e.preventDefault();
  isValidationOn = true;
  validateInput()
  if(isFormValid){
    form.reset();
    formContainer.remove();
    thankYouMsg.classList.remove("hidden");
  }
});
