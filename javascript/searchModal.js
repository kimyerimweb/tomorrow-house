const searchMaodalOpenButton = document.querySelector(
  '.gnb-icon-button.is-search.lg-hidden'
)
const searchModal = document.querySelector('.search-modal')
const searchModalCloseButton = searchModal.querySelector('.btn-ghost.btn-40')

//search modal 열기
function openSearchModal() {
  searchModal.classList.add('is-active')
}
searchMaodalOpenButton.addEventListener('click', openSearchModal)

//search modal 닫기
function closeSearchModal() {
  searchModal.classList.remove('is-active')
}
searchModalCloseButton.addEventListener('click', closeSearchModal)
