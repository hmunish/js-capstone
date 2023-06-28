const moviesCounter = () => {
  const movies = document.querySelectorAll(".item-box");
  return movies.length;
};

const commentsCount = () => {
  const comments = document.querySelectorAll(".comments-text");
  return comments.length;
};
export { commentsCount, moviesCounter };
