import './style.css';
import logo from '../assets/logo.png';
import fetchItems from './modules/fetchItems.js';
import renderItems from './modules/renderItems.js';

const mainLogo = document.querySelector('.logo');
const article = document.querySelector('.article');

// Setting logo
mainLogo.setAttribute('src', logo);

// Event listeners
window.addEventListener('DOMContentLoaded', async () => {
  const arr = await fetchItems();
  renderItems(article, arr);
});

// Click event on article
article.addEventListener('click', (e) => {
  if (e.target.classList.contains('likeIcon')) {
    e.target.classList.toggle('fa-heart-o');
    e.target.classList.toggle('fa-heart');

    // Like feature will be added here
  }
});
