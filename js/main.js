window.onload = function () {
  // aside section event listener
  let asideShowEventListener = function () {
    let headerEl = document.getElementsByClassName('log-list__header')
    for (let x = 0; x < headerEl.length; x++) {
      headerEl[x].addEventListener('click', function () {
        headerEl[x].classList.toggle('is-opened')
        headerEl[x].parentElement.classList.toggle('is-opened')
      })
    }
  }

  let followButton = function () {
    let followButton = document.querySelector('.follow-button')
    let followButtonText = followButton.querySelector('a')
    let followerNumber = document.querySelectorAll('.follow-section-list__number')[1]

    followButton.addEventListener('click', function () {
      if (followButton.classList.contains('is-active')) {
        followButton.classList.remove('is-active')
        followButtonText.innerHTML = 'フォローする'

        // decrease follower number
        followerNumber.innerHTML = (Number(followerNumber.innerText) - 1).toString()
      } else {
        followButton.classList.add('is-active')
        followButtonText.innerHTML = 'アンフォローする'

        // increase follower number
        followerNumber.innerHTML = (Number(followerNumber.innerText) + 1).toString()
      }
    })
  }

  let snsLink = function () {
    let listEl = document.getElementsByClassName('sns-icon-el')
    for (let x = 0; x < listEl.length; x++) {
      listEl[x].addEventListener('click', function (event) {
        event.preventDefault()
        let classOfEl = listEl[x].parentElement.className.replace(' ', '').replace('icon-list__wrapper', '')
        let linkOpen = ['', '']

        switch (classOfEl) {
          case ('twitter-wrapper') :
            linkOpen = ['http://twitter.com', 'twitter']
            break
          case ('instagram-wrapper') :
            linkOpen = ['http://instagram.com', 'instagram']
            break
          case ('facebook-wrapper') :
            linkOpen = ['http://facebook.com', 'facebook']
            break
        }

        window.open(linkOpen[0], '_blank')
      })
    }
  }

  let userDescription = function () {
    let descText = document.getElementsByClassName('description-keyword')
    for (let x = 0; x < descText.length; x++) {
      descText[x].addEventListener('click', function (event) {
        event.preventDefault()

        const urlConstructor = 'http://google.com/search?q=' + descText[x].innerText.replace('　', '+').replace(' ', '+')
        window.open(urlConstructor, '_blank')
      })
    }
  }

  let subSectionLocation = function () {
    let locationText = document.getElementsByClassName('log-subdetail__location')
    for (let x = 0; x < locationText.length; x++) {
      locationText[x].addEventListener('click', function (event) {
        event.preventDefault()

        const urlQuery = locationText[x].innerText.replace(' ', '+').replace(' ', '+').replace('　', '+').replace ('_', '+')

        window.open('http://map.google.com/?q=' + urlQuery, '_blank')
      })
    }
  }

  followButton()
  asideShowEventListener()
  snsLink()
  userDescription()
  subSectionLocation()
}
