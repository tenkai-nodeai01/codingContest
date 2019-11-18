window.onload = function () {
  let asideShowEventListener = function () {
    let headerEl = document.getElementsByClassName('log-list__header')
    for (let x = 0; x < headerEl.length; x++) {
      headerEl[x].addEventListener('click', function () {
        headerEl[x].classList.toggle('is-opened')
        headerEl[x].parentElement.classList.toggle('is-opened')
      })
    }
  }

  asideShowEventListener()
}
