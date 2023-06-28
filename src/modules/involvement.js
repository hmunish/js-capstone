async function createApp(url) {
  try {
    const res = await fetch(url, {
      method: "POST",
    });
    if (!res.ok) throw new Error("Failed to create a new app");
    const data = await res.text();
    console.log(data);
    return data;
  } catch (err) {
    return err;
  }
}

async function createComment(appId, itemId, userName, userComment) {
  try {
    const res = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item_id: itemId,
          username: userName,
          comment: userComment,
        }),
      }
    );
    if (!res.ok) throw new Error("Error creating comment for id ", itemId);
    return res;
  } catch (err) {
    return err;
  }
}

async function getComments(itemId) {
  try {
    const res = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MEyKHZs5GQJjgTbCoZJe/comments?item_id=${itemId}`
    );
    if (!res.ok) throw new Error("Cannot get comment for id ", itemId);
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}

// async function createLike(id, uName) {
//   const res = await fetch(
//     "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MEyKHZs5GQJjgTbCoZJe/comments",
//     {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           item_id: id,
//           username: uName,
//           comment: 'Good comments'
//         }),
//     }
//   );
//   console.log(res);
// }

// async function getComments(id){
//     const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MEyKHZs5GQJjgTbCoZJe/comments?item_id=100');
//     const data = await res.text();

//     console.log(data)
// }

export { getComments, createComment };
