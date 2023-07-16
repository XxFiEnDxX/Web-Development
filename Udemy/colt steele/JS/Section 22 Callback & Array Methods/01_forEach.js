const num = [1, 2, 3, 4];

// forEach ===================>

function print(ele) {
  if (ele % 2 === 0) {
    console.log(ele);
  }
}

// num.forEach(print);

const movie = [
  {
    title: "parasite",
    rating: 95,
  },
  {
    title: "alines",
    rating: 100,
  },
];

movie.forEach(function(movie){
    console.log(`${movie.title} - ${movie.rating/100}`)
})



