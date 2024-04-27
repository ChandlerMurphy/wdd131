// const currentYear = document.getElementById('currentyear');
// currentYear.textContent = new Date().getFullYear();

// const lastModified = document.getElementById('lastModified');
// lastModified.textContent = (document.lastModified);

const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = today.getFullYear();

const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = (document.lastModified);