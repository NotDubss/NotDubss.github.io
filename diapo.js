// Variable gobales
let compteur = 0;
let timer, elements, slides, slideWidth;

// The dia must be charged
window.onload = () => {
  const diapo = document.querySelector(".diapo");
  elements = document.querySelector(".elements");
  slides = Array.from(elements.children);

  // rectange dans leqeul se trouve le diapo
  slideWidth = diapo.getBoundingClientRect().width;

  let next = document.querySelector("#nav-droite");
  let prev = document.querySelector("#nav-gauche");

  next.addEventListener("click", slideNext);
  prev.addEventListener("click", slidePrev);

  // Gérer le survole de la souris
  diapo.addEventListener("mouseover", stopTimer);
  diapo.addEventListener("mouseout", startTimer);

  // Mise en oeveur du responsive
  window.addEventListener("resize", () => {
    // rectange dans leqeul se trouve le diapo (recalculer par apport au slidewiths)
    slideWidth = diapo.getBoundingClientRect().width;
    slideNext();
    console.log("changemnet de taille");
  });
};

// Défiler le diapo vers la droite
function slideNext() {
  console.log("Function ok ");
  console.log(compteur);
  compteur++;

  // If fin de diapo
  if (compteur == slides.length) {
    compteur = 0;
  }
  let decal = -slideWidth * compteur;
  elements.style.transform = `translateX(${decal}px)`;
}

// Déflier le diapo vers la gauche
function slidePrev() {
  console.log("Function ok ");
  console.log(compteur);
  compteur--;

  // If fin de diapo
  if (compteur < 0) {
    // On remet le compteur à la dernière slide
    compteur = slides.length - 1;
  }
  let decal = -slideWidth * compteur;
  elements.style.transform = `translateX(${decal}px)`;
}

// Funciton stopTimer

function stopTimer() {
  clearInterval(timer);
}

function startTimer() {
  // Autm le diapo chaque 4sec
  timer = setInterval(slideNext, 4000);
}
