import './style.css';
import logo from '../assets/logo.png';
import fetchItems from './modules/fetchItems.js';
import renderItems from './modules/renderItems.js';
import renderCommentPopup from './modules/renderCommentPopup.js';

const mainLogo = document.querySelector('.logo');
const article = document.querySelector('.article');

let episodesData;

// Setting logo
mainLogo.setAttribute('src', logo);

// Event listeners
window.addEventListener('DOMContentLoaded', async () => {
  episodesData = await fetchItems();
  renderItems(article, episodesData);
});

// Click event on article
article.addEventListener('click', (e) => {
  if (e.target.classList.contains('likeIcon')) {
    e.target.classList.toggle('fa-heart-o');
    e.target.classList.toggle('fa-heart');
    // Like feature will be added here
  } else if (e.target.classList.contains('comments')) {
    const dataNo = e.target.parentElement.getAttribute('data-itemno');
    renderCommentPopup(episodesData[dataNo]);
  }
});
