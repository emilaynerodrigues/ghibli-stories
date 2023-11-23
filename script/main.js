var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
  },
  pagination: {
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    560: {
      slidesPerView: 3,
    },
    760: {
      slidesPerView: 4,
  
    },
    1240:{
      slidesPerView: 5,
    },
  },
});

//selecionando botões com class movie
const movie = document.querySelectorAll(".movie");

//selecionando movie-info
const movieInfo = document.querySelectorAll(".movie-info");

//percorrendo cada button
movie.forEach((button, index) => {
  //disparando a ação - é executado quando o button é clicado
  button.addEventListener("click", () => {
    removeMovieInfoClass();

    //adicionando class active no personagem
    movieInfo[index].classList.add("active");
  });
});

//verificando se há algum botão selecionado e removendo a seleção
function removeMovieInfoClass() {
  const movieActive = document.querySelector(".movie-info.active");
  movieActive.classList.remove("active");
}
