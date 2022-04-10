const reviewList = document.querySelector('.review-list')
const reviewRecommendButtons = reviewList.querySelectorAll(
  '.review-card .review-card-footer button'
)

function toggleRecommend() {
  const count = Number(this.parentNode.querySelector('p strong span').innerHTML)
  let newCount = count

  if (this.classList.contains('btn-outlined')) {
    this.innerHTML = '<i class="ic-check"></i>도움됨'
    newCount++
  } else {
    this.innerHTML = '도움이 돼요'
    newCount--
  }

  this.classList.toggle('btn-outlined')
  this.classList.toggle('btn-primary')
  this.parentNode.querySelector('p strong span').innerHTML = newCount
}

reviewRecommendButtons.forEach((button) => {
  button.addEventListener('click', toggleRecommend)
})
