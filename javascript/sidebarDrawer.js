const drawerMenuButtons = document.querySelectorAll(
  '.sidebar-nav .drawer-menu-button'
)

//사이드바 내부의 메뉴 토글
function toggleDrawerMenu() {
  this.parentNode.classList.toggle('is-open')
  this.parentNode.classList.toggle('is-active')
}

drawerMenuButtons.forEach((el) => {
  el.addEventListener('click', toggleDrawerMenu)
})
