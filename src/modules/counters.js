const moviesCounter = function () {
  const movies = document.querySelectorAll('.item-box');
  return movies.length;
};

const commentsCount = () => {
  const comments = document.querySelectorAll('.comment-text');
  console.log(comments.value);
  return comments.length;
};
export { commentsCount, moviesCounter };
