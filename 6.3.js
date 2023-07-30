unction createRatingMatrix(movies) {
    const ratingMatrix = [];
  
    for (const movie of movies) {
      ratingMatrix.push(movie.ratings);
    }
  
    return ratingMatrix;
  }
  