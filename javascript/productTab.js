const productTab = document.querySelector('.product-tab')
const productTabButtonList = productTab.querySelectorAll('button')

let currentActiveTab = productTab.querySelector('.is-active')

const productTabPanelIdList = [
  'product-spec',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recommendation',
]

const productTabPanelList = productTabPanelIdList.map((panelId) => {
  const tabPanel = document.querySelector(`#${panelId}`)
  return tabPanel
})

const productTabPanelPositionMap = {}

function toggleActiveTab() {
  const tabItem = this.parentNode

  if (tabItem === currentActiveTab) return

  tabItem.classList.add('is-active')
  currentActiveTab.classList.remove('is-active')
  currentActiveTab = tabItem
}

function scrollToTabPanel() {
  const tabPanelId = this.parentNode.getAttribute('aria-labelledby')
  const tabPanel = document.querySelector(`#${tabPanelId}`)

  const gnbHeight = document
    .querySelector('.gnb')
    .getBoundingClientRect().height
  const lnbHeigth = document
    .querySelector('.lnb')
    .getBoundingClientRect().height
  const productTabHeight = productTab.getBoundingClientRect().height
  const tabPanelTop = tabPanel.getBoundingClientRect().top

  window.scrollBy({
    top: tabPanelTop - gnbHeight - lnbHeigth - productTabHeight,
    behavior: 'smooth',
  })
}

function detectTabPannelPosition() {
  productTabPanelList.forEach((panel) => {
    const id = panel.getAttribute('id')
    const position = window.scrollY + panel.getBoundingClientRect().top
    productTabPanelPositionMap[id] = position
  })
}

productTabButtonList.forEach((button) => {
  button.addEventListener('click', toggleActiveTab)
  button.addEventListener('click', scrollToTabPanel)
})

window.addEventListener('load', detectTabPannelPosition)
window.addEventListener('resize', detectTabPannelPosition)
