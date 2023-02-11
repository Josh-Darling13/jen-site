// const header = document.getElementById("header");

// const bio = document.getElementById("bio");

// const acting = document.getElementById("acting");

// const writing = document.getElementById("writing");

// const gallery = document.getElementById("gallery");

// const contact = document.getElementById("contact");

const moarActing = document.getElementById("moarActing");
const moarWriting = document.getElementById("moarWriting");
const addtionalActing = document.getElementById("addtionalActing");
const addtionalWriting = document.getElementById("addtionalWriting");
const hideWriting = document.getElementById("hideWriting");
const hideActing = document.getElementById("hideActing");

moarActing.addEventListener("click", (event) => {
  addtionalActing.removeAttribute("hidden");
});

moarWriting.addEventListener("click", (event) => {
  addtionalWriting.removeAttribute("hidden");
});

hideActing.addEventListener("click", (event) => {
  addtionalActing.setAttribute("hidden", "");
});

hideWriting.addEventListener("click", (event) => {
  addtionalWriting.setAttribute("hidden", "");
});
