function removeCommentPopup(e) {
  e.target.removeEventListener('click', removeCommentPopup);
  document.querySelector('dialog').remove();
}

function renderCommentPopup(dataObj) {
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
      <h3 class="comments-title">Comments (2)</h3>
      <div class="comments-wrapper">
        <p class="comments-text">03/11/2021 Alex: I'd love to buy it</p>
        <p class="comments-text">03/11/2021 Alex: I'd love to buy it</p>
      </div>
    </div>

    <div class="add-comment-box">
      <h3 class="add-comment-title">Add a comment</h3>
      <form class="add-comment">
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

  //   Adding event listener on close icon for closing the popup on click

  const closeIcon = document.querySelector('.popup-close-icon');
  closeIcon.addEventListener('click', removeCommentPopup);
}

export default renderCommentPopup;
