// Display modal
export function displayModal(itemId, item) {
  const modal = document.querySelector('.modal');
  const modalHeader = document.querySelector('.modal-header h3');
  const modalContent = document.querySelector('.modal-content');
  const modalCommentsCount = document.getElementById('comments-count');
  const commentHeader = document.querySelector('.comment-header');
  const nameMovie = document.querySelector('.name-movie');
  const rows = document.querySelector('.rows');
  const imgItem = document.querySelector('.comment-header .imgItem');

  if (!modal || !modalHeader || !modalContent || !modalCommentsCount || !commentHeader || !nameMovie || !rows || !imgItem) {
    return;
  }

  modalHeader.textContent = `Comments for ${item.name}`;
  modalCommentsCount.textContent = `Comments(${item.comments ? item.comments.length : 0})`;
  imgItem.innerHTML = `<img src="${item.image}" alt="Avatar" width="350px">`; // Update the image

  nameMovie.textContent = `name: ${item.name}`;
  rows.innerHTML = `
    <div class="row">
      <p class="category">Type: ${item.type}</p>
      <p class="category">Language: ${item.language}</p>
    </div>
    <div class="row">
      <p class="category">Genres: ${item.genres.join(', ')}</p>
      <p class="category">Status: ${item.status}</p>
    </div>
  `;

  modal.style.display = 'block';
}

// Close modal window
export function closeModalWindow() {
  const modal = document.querySelector('.modal');
  modal.style.display = 'none';
}

// Submit comment
export function submitComment(nameInput, commentInput, commentsContainer) {
  const name = nameInput.value;
  const comment = commentInput.value;

  if (name && comment) {
    const currentDate = new Date().toISOString().split('T')[0];

    const commentDateHTML = `<span class="date">${currentDate} </span>`;
    const nameSpanHTML = `<span class="name-input">${name}: </span>`;
    const commentSpanHTML = `<span class="comments-input">${comment}</span>`;

    const commentDateContainerHTML = `
      <p class="comment-date">${commentDateHTML}${nameSpanHTML}${commentSpanHTML}</p>
    `;

    commentsContainer.insertAdjacentHTML('beforeend', commentDateContainerHTML);

    // Clear input values
    nameInput.value = '';
    commentInput.value = '';

    // Update comments count
    const commentsCount = document.getElementById('comments-count');
    const existingComments = commentsCount.textContent;
    const count = existingComments ? parseInt(existingComments.match(/\d+/)[0]) : 0;
    commentsCount.textContent = `Comments(${count + 1})`;
  }
}

// Update comments count
export async function updateComments(itemId, items) {
  try {
    const item = items[itemId];
    const displayComments = document.querySelector(`.display-comments[data-itemNo="${itemId}"]`);

    // Fetch comments for the specific item
    const commentsResponse = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/app/RTpMnWsbPQi6tDonLJeU/comments?item_id=${item.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: '', 
        comment: '',
      }),
    });
    if (!commentsResponse.ok) throw new Error('Error fetching comments');
    const commentsData = await commentsResponse.json();
    item.comments = commentsData;

    // Update comment count
    const commentsCount = displayComments.querySelector('.comments-count');
    commentsCount.textContent = `Comments(${item.comments.length})`;

    // Update display comments for the specific item
    displayComments.innerHTML = '';

    if (item.comments.length > 0) {
      item.comments.forEach((comment) => {
        const commentDateHTML = `<span class="date">${comment.creation_date}</span>`;
        const nameSpanHTML = `<span class="name-input">${comment.username}: </span>`;
        const commentSpanHTML = `<span class="comments-input">${comment.comment}</span>`;

        const commentDateContainerHTML = `
          <p class="comment-date">${commentDateHTML}${nameSpanHTML}${commentSpanHTML}</p>
        `;

        displayComments.insertAdjacentHTML('beforeend', commentDateContainerHTML);
      });
    } else {
      const noCommentsHTML = '<p>No comments yet.</p>';
      displayComments.insertAdjacentHTML('beforeend', noCommentsHTML);
    }
  } catch (err) {
    console.log(err);
  }
}

// Update Like count
export async function updateLikeCount(itemId, item) {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/app/RTpMnWsbPQi6tDonLJeU/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: item.id,
      }),
    });
    if (!response.ok) throw new Error('Error updating likes count');

    // Increment the likes count locally
    const updatedLikesCount = item.likesCount + 1;

    // Update the likes count in the DOM
    const likesCount = document.getElementById('likes-count');
    likesCount.textContent = `Likes(${updatedLikesCount})`;

    // Update the likesCount property of the item object
    item.likesCount = updatedLikesCount;
  } catch (err) {
    console.log(err);
  }
}

