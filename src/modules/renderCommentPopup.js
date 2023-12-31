import { commentsCount } from './counters.js';
import { appId, createComment } from './involvement.js';

function removeCommentPopup(e) {
  e.target.removeEventListener('click', removeCommentPopup);
  document.querySelector('dialog').remove();
}

function addComment(e) {
  e.preventDefault();
  const username = e.target.userName.value.trim();
  const userComments = e.target.userComment.value.trim();
  const dataId = e.target.getAttribute('data-id');

  // Check if either the username or userComments is empty
  if (!username || !userComments) {
    // eslint-disable-next-line no-alert
    alert('Please enter you name and comment.');
    return;
  }

  createComment(appId, dataId, username, userComments).then(() => {
    const today = new Date();
    const html = `<p class="comments-text">${today.getFullYear()}-0${
      today.getMonth() + 1
    }-${today.getDate()} ${username}: ${userComments}`;
    document
      .querySelector('.comments-wrapper')
      .insertAdjacentHTML('beforeend', html);
    e.target.reset();

    document.querySelector(
      '.comments-title',
    ).textContent = `Comments (${commentsCount()})`;
  });
}

function renderCommentPopup(dataObj, commentsArr) {
  const html = `<dialog class="comments-popup">
  <i class="fa fa-close popup-close-icon"></i>
  <div class="wrapper">
    <img
      src="${dataObj.image.original}"
      alt=""
      class="movie-banner"
    />
    <div class="movie-details-box">
      <h3 class="movie-details">${dataObj.name}</h3>
      <div class="movie-details-wrapper">
        <p class="movie-details">Average Runtime: ${dataObj.averageRuntime}</p>
        <p class="movie-details">Language: ${dataObj.language}</p>
        <p class="movie-details">Rating: ${dataObj.rating.average}</p>
        <p class="movie-details">Status: ${dataObj.status}</p>
      </div>
    </div>

    <div class="comments-box">
      <h3 class="comments-title">Comments</h3>
      <div class="comments-wrapper">
      </div>
    </div>

    <div class="add-comment-box">
      <h3 class="add-comment-title">Add a comment</h3>
      <form class="add-comment" data-id=${dataObj.id - 1}>
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="Your name"
        />
        <textarea
          name="userComment"
          id="userComment"
          cols="30"
          rows="5"
          placeholder="Your insights"
        ></textarea>
        <button type="submit" class="submitComment">Comment</button>
      </form>
    </div>
  </div>
</dialog>`;

  document.body.insertAdjacentHTML('beforeend', html);

  // Adding comments for the popup
  if (commentsArr.length > 0) {
    const commentsSection = document.querySelector('.comments-wrapper');
    let commentsHtml = '';
    commentsArr.forEach((e) => {
      commentsHtml += `<p class="comments-text">${e.creation_date} ${e.username}: ${e.comment}</p>`;
    });
    commentsSection.insertAdjacentHTML('beforeend', commentsHtml);
  }

  // Adding comments count to comment title
  const commentsTitle = document.querySelector('.comments-title');
  commentsTitle.insertAdjacentText('beforeend', `(${commentsCount()})`);

  // Adding event listener for submitting comment form
  const commentForm = document.querySelector('.add-comment');
  commentForm.addEventListener('submit', addComment);

  //   Adding event listener on close icon for closing the popup on click
  const closeIcon = document.querySelector('.popup-close-icon');
  closeIcon.addEventListener('click', removeCommentPopup);
}

export default renderCommentPopup;
