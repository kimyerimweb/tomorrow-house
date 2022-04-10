const productTab = document.querySelector('.product-tab')
const productTabButtonList = productTab.querySelectorAll('button')

const gnbHeight = document.querySelector('.gnb').getBoundingClientRect().height
const lnbHeigth = document.querySelector('.lnb').getBoundingClientRect().height
const productTabHeight = productTab.getBoundingClientRect().height

let currentActiveTab = productTab.querySelector('.is-active')

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

  updateProductTabOnScroll()
}

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

function updateProductTabOnScroll() {
  const scrolledAmount =
    window.scrollY + gnbHeight + lnbHeigth + productTabHeight

  let newActiveTab
  if (scrolledAmount > productTabPanelPositionMap['product-recommendation']) {
    newActiveTab = productTabButtonList[4]
  } else if (scrolledAmount > productTabPanelPositionMap['product-shipment']) {
    newActiveTab = productTabButtonList[3]
  } else if (scrolledAmount > productTabPanelPositionMap['product-inquiry']) {
    newActiveTab = productTabButtonList[2]
  } else if (scrolledAmount > productTabPanelPositionMap['product-review']) {
    newActiveTab = productTabButtonList[1]
  } else {
    newActiveTab = productTabButtonList[0]
  }

  //추가: 페이지 끝까지 스크롤 *태블릿에서만 안되는 버그 픽스함*
  if (window.innerWidth >= 768 && window.innerWidth <= 1200) {
    if (
      window.scrollY + window.innerHeight - 56 ===
      document.body.offsetHeight
    ) {
      newActiveTab = productTabButtonList[4]
    }
  }

  if (window.scrollY + window.innerHeight === document.body.offsetHeight) {
    newActiveTab = productTabButtonList[4]
  }

  if (newActiveTab) {
    newActiveTab = newActiveTab.parentNode

    if (newActiveTab !== currentActiveTab) {
      newActiveTab.classList.add('is-active')
      currentActiveTab.classList.remove('is-active')
      currentActiveTab = newActiveTab
    }
  }
}

productTabButtonList.forEach((button) => {
  button.addEventListener('click', toggleActiveTab)
  button.addEventListener('click', scrollToTabPanel)
})

window.addEventListener('load', detectTabPannelPosition)
window.addEventListener('resize', detectTabPannelPosition)

window.addEventListener('scroll', updateProductTabOnScroll)
