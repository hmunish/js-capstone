const appId = 'MEyKHZs5GQJjgTbCoZJe';

async function createComment(appId, itemId, userName, userComment) {
  try {
    const res = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: itemId,
          username: userName,
          comment: userComment,
        }),
      },
    );
    if (!res.ok) throw new Error('Error creating comment for id ', itemId);
    return res;
  } catch (err) {
    return err;
  }
}

async function getComments(itemId) {
  try {
    const res = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MEyKHZs5GQJjgTbCoZJe/comments?item_id=${itemId}`,
    );
    if (!res.ok) throw new Error('Cannot get comment for id ', itemId);
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}

async function getLikes() {
  try {
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MEyKHZs5GQJjgTbCoZJe/likes',
    );
    if (!response.ok) throw new Error('Cannot get likes');
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
}

const updateLikeCount = async (itemId) => {
  try {
    const fetchData = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MEyKHZs5GQJjgTbCoZJe/likes',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: itemId,
        }),
      },
    );
    if (!fetchData.ok) throw new Error('like cannot be add');
    return fetchData;
  } catch (e) {
    return e;
  }
};

export {
  appId, getComments, createComment, updateLikeCount, getLikes,
};
