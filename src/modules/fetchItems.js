async function fetchItems() {
  try {
    const res = await fetch('https://api.tvmaze.com/shows');
    if (res.status !== 200) throw new Error('Error fetching data');
    const data = await res.json();
    const episodes = [data[0], data[1], data[2], data[3], data[4], data[5]];
    return episodes;
  } catch (err) {
    return err;
  }
}

export default fetchItems;