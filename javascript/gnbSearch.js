const gnbSearch = document.querySelector('.gnb-search')
const searchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchInput = gnbSearch.querySelector('.input-group')

function closeSearchModalOnClickingOutside(e) {
  if (!gnbSearch.contains(e.target)) {
    searchHistory.classList.remove('is-active')
    window.removeEventListener('click', closeSearchModalOnClickingOutside)
  }
}

function openSearchHistory() {
  if (!searchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeSearchModalOnClickingOutside)
  }

  searchHistory.classList.add('is-active')
}

gnbSearchInput.addEventListener('click', openSearchHistory)
