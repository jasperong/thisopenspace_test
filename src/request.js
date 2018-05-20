const pageURL = page => `https://thisopenspace.com/lhl-test?page=${page}`;

export const fetchPage = page =>
  fetch(pageURL(page))
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
