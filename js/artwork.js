window.onload = function () {
  let favButtonFunction = function () {
    let favIcon = this.document.getElementsByClassName('favorite-icon')[0]
    const excessText = 'お気に入り'

    // お気に入りのボタン処理、押したら、他のアイコンに切り替え
    favIcon.addEventListener('click', function () {
      this.classList.toggle('is-liked')
      let favTextEl = document.getElementsByClassName('favourite-count')[0]
      let favTextNumber = Number(favTextEl.innerText.replace(excessText, ''))
      if (this.classList.contains('is-liked')) {
        favTextEl.innerText = favTextNumber + 1 + excessText
      } else {
        favTextEl.innerText = favTextNumber - 1 + excessText
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
