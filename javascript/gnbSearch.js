const gnbSearch = document.querySelector('.gnb-search')
const searchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchInput = gnbSearch.querySelector('.input-group')

const deleteAllButton = document.querySelector('.search-history-header button')
const deleteOneButtons = document.querySelectorAll(
  '.search-history-content .delete-button'
)

const searchHistoryContentList = document.querySelector(
  '.search-history-content-list'
)

//외부 누를 시 검색 기록 닫기
function closeSearchModalOnClickingOutside(e) {
  if (!gnbSearch.contains(e.target)) {
    searchHistory.classList.remove('is-active')
    window.removeEventListener('click', closeSearchModalOnClickingOutside)
  }
}

//검색 기록 열기
function openSearchHistory() {
  //이미 전체 삭제를 한 경우에는 최근 검색창이 뜨지 않게 함
  if (searchHistoryContentList.children.length === 0) return

  if (!searchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeSearchModalOnClickingOutside)
  }

  searchHistory.classList.add('is-active')
}
//검색 기록 열기
gnbSearchInput.addEventListener('click', openSearchHistory)

//검색 기록 모두 삭제
function deleteAllSearchHistory() {
  searchHistoryContentList.innerHTML = ''
  searchHistory.classList.remove('is-active')
}
deleteAllButton.addEventListener('click', deleteAllSearchHistory)

//검색 기록 한개씩 삭제
function deleteOneSearchHistory(e) {
  e.stopPropagation()
  const searchHistoryItem = this.parentNode
  searchHistoryContentList.removeChild(searchHistoryItem)

  //만약 다 삭제하면 검색 기록 창을 꺼버림
  if (searchHistoryContentList.children.length === 0) {
    searchHistory.classList.remove('is-active')
  }
}
deleteOneButtons.forEach((el) => {
  el.addEventListener('click', deleteOneSearchHistory)
})
