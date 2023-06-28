import './style.css';
import logo from '../assets/logo.png';
import fetchItems from './modules/fetchItems.js';
import renderItems from './modules/renderItems.js';
import renderCommentPopup from './modules/renderCommentPopup.js';
import {
  getComments,
  updateLikeCount,
  getLikes,
} from './modules/involvement.js';

const mainLogo = document.querySelector('.logo');
const article = document.querySelector('.article');

let episodesData;
let likesObj;

// Setting logo
mainLogo.setAttribute('src', logo);

// Event listeners
window.addEventListener('DOMContentLoaded', async () => {
  episodesData = await fetchItems();
  const likesData = await getLikes();
  // Coverting likes array to object for accessibility
  likesObj = {};
  likesData.forEach((e) => {
    likesObj[e.item_id] = e.likes;
  });
  renderItems(article, episodesData, likesObj);
});

// Click event on article
article.addEventListener('click', (e) => {
  if (e.target.classList.contains('likeIcon')) {
    e.target.classList.toggle('fa-heart-o');
    e.target.classList.toggle('fa-heart');
    // Like feature will be added here
    const parentItemBox = e.target.parentElement.parentElement;
    const itemNo = Number(parentItemBox.getAttribute('data-itemno'));
    updateLikeCount(itemNo).then(() => {
      parentItemBox.querySelector('p').innerHTML = `Likes ${
        likesObj[itemNo] ? likesObj[itemNo] + 1 : 1
      }`;
    });
  } else if (e.target.classList.contains('comments')) {
    const existingPopup = document.querySelector('dialog');
    if (existingPopup) existingPopup.remove();
    const dataNo = e.target.parentElement.getAttribute('data-itemno');
    getComments(dataNo)
      .then((res) => {
        renderCommentPopup(episodesData[dataNo], res);
      })
      .catch(() => {
        // Error will be handled here
      });
  }
});
