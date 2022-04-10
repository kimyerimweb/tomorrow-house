const productTab = document.querySelector('.product-tab')
const productTabButtonList = productTab.querySelectorAll('button')

let currentActiveTab = productTab.querySelector('.is-active')

function toggleActiveTab() {
  const tabItem = this.parentNode

  if (tabItem === currentActiveTab) return

  tabItem.classList.add('is-active')
  currentActiveTab.classList.remove('is-active')
  currentActiveTab = tabItem
}

function scrollToTabPannel() {
  const tabPannelId = this.parentNode.getAttribute('aria-labelledby')
  const tabPannel = document.querySelector(`#${tabPannelId}`)

  const gnbHeight = document
    .querySelector('.gnb')
    .getBoundingClientRect().height
  const lnbHeigth = document
    .querySelector('.lnb')
    .getBoundingClientRect().height
  const productTabHeight = productTab.getBoundingClientRect().height
  const tabPannelTop = tabPannel.getBoundingClientRect().top

  window.scrollBy({
    top: tabPannelTop - gnbHeight - lnbHeigth - productTabHeight,
    behavior: 'smooth',
  })
}

productTabButtonList.forEach((button) => {
  button.addEventListener('click', toggleActiveTab)
  button.addEventListener('click', scrollToTabPannel)
})
