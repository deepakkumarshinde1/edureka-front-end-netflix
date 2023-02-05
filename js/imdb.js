// https://image.tmdb.org/t/p/original/image-path
// api_key=7a44e75919177a398b43c1eb9d72e9ea
// https://api.themoviedb.org/3/movie/popular?api_key=7a44e75919177a398b43c1eb9d72e9ea&language=en-US&page=1

let movieList = [];

function setMoreDetailsEvent() {
  let list = document.querySelectorAll(".show-more-details");
  list.forEach(function (value) {
    value.addEventListener("click", function () {
      var movie = movieList[value.dataset.index];
      console.log(movie);
      document.getElementById("mdTitile").innerHTML = movie.original_title;

      document.getElementById("modal-movie-details-view").innerHTML = ` 
        <div class="col-3">
            <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="" class="w-100" />
            </div>
            <div class="col-9">
                <p class="h3 text-primary">Title: ${movie.original_title}</p>
                <p class="h4">Release Date: ${movie.release_date}</p>
                <p class="fs-4">Description: <span class="text-success"> ${movie.overview}</span></p>
                <p class="fs-5">Vote: ${movie.vote_average}</p>
                <p class="fs-5">Vote Count: ${movie.vote_count}</p>
        </div>`;
    });
  });
}

async function ajax() {
  let url =
    "https://api.themoviedb.org/3/movie/popular?api_key=7a44e75919177a398b43c1eb9d72e9ea&language=en-US&page=1";
  let response = await fetch(url);
  let data = await response.json();
  movieList = data.results;

  var _list = movieList.map(function (movie, index) {
    return `<section data-index="${index}" class="show-more-details text-white col-12 col-lg-3  mx-auto text-center zoom-in" data-bs-toggle="modal" data-bs-target="#movie-details">
                    <div class="card m-2" style="height:80vh">
                    <img
                        src="https://image.tmdb.org/t/p/original/${movie.poster_path}"
                        class="card-img-top"
                        style="height: 300px"
                    />
                    <div class="card-body text-dark text-start">
                        <p class="h4 m-0">
                        ${movie.original_title} (<i
                            class="fa fa-star text-warning"
                            aria-hidden="true"
                        ></i>
                        ${movie.vote_average})
                        </p>
                        <p class="m-0"></p>
                        <p class="card-text text-muted m-0">
                        <i class="fa fa-music" aria-hidden="true"></i> Vote Count:
                            ${movie.vote_count}
                        </p>
                        <p><i class="fa fa-calendar" aria-hidden="true"></i> ${movie.release_date}</p>
                    </div>
                    </div>
                </section>`;
  });

  document.getElementById("imdb-area").innerHTML = _list.join("");

  setMoreDetailsEvent();
}
ajax();

/*  
backdrop_path:"/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg"
genre_ids:(3) [28, 12, 878]
id: 505642
original_language: "en"
original_title: "Black Panther: Wakanda Forever"
overview: "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda."
popularity: 7658.731
poster_path: "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg"
release_date: "2022-11-09"
title: "Black Panther: Wakanda Forever"
video: false
vote_average: 7.5
vote_count: 2389
*/
