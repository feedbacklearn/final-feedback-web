
    const backtop = document.querySelector(".backtop");

backtop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
     });
    });  
const sidebar = document.querySelector(" .sidebar");
const cross = document.querySelector(".fa-xmark");
const black = document.querySelector(".black.");
const sidebtn = document.querySelector(".panel");
 
sidebtn.addEventListener("click", () => {
     sidebar.classList.add("active");
     cross.classList.add("active");
     black.classList.add("active");
})

cross.addEventListener("click", () => {
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");

})


