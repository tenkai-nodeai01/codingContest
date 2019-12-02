window.onload = function () {
  let favButtonFunction = function () {
    let favIcon = this.document.getElementsByClassName('favorite-icon')[0]

    // お気に入りのボタン処理、押したら、他のアイコンに切り替え
    favIcon.addEventListener('click', function () {
      this.classList.toggle('is-liked')
      let favTextEl = document.getElementsByClassName('favourite-count__number')[0]
      let favTextNumber = Number(favTextEl.innerText)
      if (this.classList.contains('is-liked')) {
        favTextEl.innerText = favTextNumber + 1
      } else {
        favTextEl.innerText = favTextNumber - 1
      }
    })
  }

  let commentButtonFunction = function () {
    let commentButton = this.document.getElementsByClassName('comment-wrapper')[0]

    commentButton.addEventListener('click', function () {
      this.classList.toggle('is-active')
    })
  }

  // fav button event listener
  favButtonFunction()
  commentButtonFunction()
}
