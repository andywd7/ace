/**
 * This is Netace’s helper util for code tabs
 */

export default {
  clean () {
    const oldElem = document.querySelector('.ace-html')
    const oldTabs = document.querySelector('.ace-tabs')
    if (oldElem) {
      oldElem.parentNode.removeChild(oldElem)
    }
    if (oldTabs) {
      oldTabs.parentNode.removeChild(oldTabs)
    }
  },
  create () {
    const tabs = document.createElement('div')
    tabs.className = 'ace-tabs'
    tabs.innerHTML =
      "<button class='ace-tab vue ace-tab--active'>VUE</button><button class='ace-tab html'>HTML</button>"
    return tabs
  },
  init () {
    const tabs = document.querySelectorAll('.ace-tab')
    if (tabs) {
      tabs.forEach(function (element) {
        element.addEventListener('click', event => {
          event.preventDefault()
          document.querySelector('.ace-tab--active').classList.remove('ace-tab--active')
          element.classList.add('ace-tab--active')
          document.querySelector('.ace-hidden').classList.remove('ace-hidden')
          if (event.target.classList.contains('html')) {
            const container = document.querySelector("article div[class^='rsg--tab']")
            container.querySelector('div').classList.add('ace-hidden')
          } else {
            document.querySelector('.ace-html').classList.add('ace-hidden')
          }
        })
      })
    }
  }
}
