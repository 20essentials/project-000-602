const $ = el => document.querySelector(el);
const $$ = el => document.querySelectorAll(el);

const $tab = $('.tab-follower');

function handleTabMove(e) {
  if (e.target.matches('.item')) {
    const { offsetWidth, offsetLeft } = e.target;
    $tab.style.left = `${offsetLeft}px`;
    $tab.style.width = `${offsetWidth}px`;
  }
}

document.addEventListener('click', handleTabMove);
document.addEventListener('mouseover', handleTabMove);
