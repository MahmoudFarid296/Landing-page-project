const sections = document.getElementsByTagName("section"); //declaring a variable containing the sections of the page

createList();

function createList() {
  // a function to create the navigation buttons and add event listeners to them
  const navBar = document.getElementById("navbar__list");
  let counter = 0;
  for (sect of sections) {
    let listSection = document.createElement("li");
    counter++;
    listSection.innerHTML = `<a class = 'menu__link' id = 'nav_but${counter}'>section ${counter}</a>`;
    listSection.addEventListener("click", () => {
      document.addEventListener("scroll", (event) => {
        event.preventDefault();
      });
      document
        .getElementById(`section${counter}`)
        .scrollIntoView({ behavior: "smooth" });
    });
    navBar.appendChild(listSection);
  }
}

function view(sectionToCheck) {
  //function to determing the position of sector relative to the window
  const x = sectionToCheck.getBoundingClientRect();
  if (x.top > -(x.height / 2) && x.top < x.height / 2) {
    return true;
  } else return false;
}

function embraceSection() {
  //function to add the class of the highlighting to the section within the window
  for (sect of sections) {
    const x = parseInt(sect.outerHTML.slice(20, 21));
    const navIcon = document.getElementById(`nav_but${x}`);
    if (view(sect)) {
      navIcon.style.background = "#333";

      if (!sect.classList.contains("your-active-class")) {
        sect.classList.add("your-active-class");
      }
    } else {
      navIcon.style.removeProperty("background");
      sect.classList.remove("your-active-class");
    }
  }
}
document.addEventListener("scroll", embraceSection);
