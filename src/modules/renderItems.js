const renderItems = async (parEle, dataArr) => {
  let html = '';
  dataArr.forEach((e, c) => {
    html += `<div class="item-box" data-itemNo="${c}">
        <img src="${e.image.medium}" alt="Item ${c}">
        <h3>${e.name}<i class="fa fa-heart-o likeIcon"></i></h3>
        <p>Likes</p>
        <button class="comments">Comments</button>
    </div>`;
  });

  parEle.innerHTML = html;
};

export default renderItems;