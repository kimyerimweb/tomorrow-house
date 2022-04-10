const myMenu = document.querySelector('.my-menu')

//마이메뉴 토글링
function toggleMyMenu() {
  if (!myMenu.classList.contains('is-active')) {
    window.addEventListener('click', closeMyMenuOnClickingOutside)
    //열려있는 상태로 변화된다면 외부를 클릭했을 때 메뉴가 닫힐 수 있도록 이벤트 등록
  }
  myMenu.classList.toggle('is-active')
}

//마이메뉴 외부에서 클릭시 닫힘
function closeMyMenuOnClickingOutside(e) {
  if (!myMenu.contains(e.target)) {
    //현재 클릭한 지점이 마이메뉴가 아닌 경우에
    myMenu.classList.remove('is-active')
    window.removeEventListener('click', closeMyMenuOnClickingOutside)
    //불필요한 윈도우 클릭 이벤트 종료
  }
}

myMenu.addEventListener('click', toggleMyMenu)
