console.log("file added");
window.addEventListener("DOMContentLoaded", (event) => {
  console.log("loaded");
  var navbarShrink = function () {
    // const navbarCollapsible = document.body.querySelector('#mainNav');
    // if (!navbarCollapsible) {
    //     return;
    // }
    // if (window.scrollY === 0) {
    //     navbarCollapsible.classList.remove('navbar-shrink')
    // } else {
    //     navbarCollapsible.classList.add('navbar-shrink')
    // }
    const navbarCollapsible1 = document.body.querySelector("#mynav");
    const navbarCollapsible2 = document.body.querySelector("#stickynav");

    if (window.scrollY === 0) {
      navbarCollapsible1.classList.remove("navigation-hide");
      navbarCollapsible2.classList.add("navigation-hide");
    } else {
      navbarCollapsible1.classList.add("navigation-hide");
      navbarCollapsible2.classList.remove("navigation-hide");
    }
  };
  document.addEventListener("scroll", navbarShrink);
  

  
});


