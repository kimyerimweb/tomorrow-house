const orderCta = document.querySelector('.order-cta')
const orderCtaBuyButton = orderCta.querySelector('.btn-primary')
const orderCtaBookmarkButton = orderCta.querySelector('.btn-ghost')

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

//order-modal 열기
function openOrderModal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}
orderCtaBuyButton.addEventListener('click', openOrderModal)

//order-modal 닫기
function closeOrderModal() {
  orderModal.classList.remove('is-open')
  //오버레이는 전 파일에서 이미 클릭 시 사라지게 설정되어있음.
}
orderModalOverlay.addEventListener('click', closeOrderModal)

//order-bookmark 토글
function toggleBookmark() {
  const iconBookmark = this.querySelector('i')
  const bookmarkCount = this.querySelector('span')
  let count = Number(bookmarkCount.innerHTML.replaceAll(',', ''))

  if (this.classList.contains('is-active')) {
    iconBookmark.classList.add('ic-bookmark')
    iconBookmark.classList.remove('ic-bookmark-filled')
    count--
  } else {
    iconBookmark.classList.remove('ic-bookmark')
    iconBookmark.classList.add('ic-bookmark-filled')
    count++
  }

  bookmarkCount.innerHTML = count.toLocaleString()
  bookmarkCount.setAttribute('aria-label', `북마크 ${count.toLocaleString()}회`)
  this.classList.toggle('is-active')
}
orderCtaBookmarkButton.addEventListener('click', toggleBookmark)
