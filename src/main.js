const currentPage = (() => {
  let currentPathArr = window.location.pathname.split('/');
  let currentPage = currentPathArr[currentPathArr.length - 1].split('.')[0];
  return currentPage;
})();

const navBar = document.querySelectorAll('.page-link');

const navStyle = (() => {
  let navStyleIndex = 0;
  if (currentPage === 'projects') {
    navStyleIndex = 1;
  } else if (currentPage === 'posts') {
    navStyleIndex = 2;
  }

  const selectedNav = navBar[0].children[navStyleIndex];
  selectedNav.style.borderBottom = 'solid 5px #902639';
  selectedNav.style.borderRadius = '5px';
})();

// prevent content going under fixed header
let header = document.querySelector('header-component');
let content = document.querySelector('.content-container');
content.style.marginTop = header.offsetHeight + 'px';
