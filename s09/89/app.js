function outer() {
  let movie = 'It';

  function inner() {
    // let movie = 'Cujo';

    function extraInner() {
      console.log(movie.toUpperCase());
    }
    extraInner();
  }

  inner();
}

outer();
