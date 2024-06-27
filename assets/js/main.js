var typed = new Typed('#typed-greeting', {
  strings: [
    'Student',
    'Developer',
    'Translator',
  ],
  typeSpeed: 80,
  backSpeed: 35,
  loop: true,
  cursorChar: '_',
});

const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all)
  if (selectEl) {
    if (all) {
      selectEl.forEach(e => e.addEventListener(type, listener))
    } else {
      selectEl.addEventListener(type, listener)
    }
  }
}

const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}

let navbarlinks = select("#navbar .scrollto", true)
const navbarlinksActive = () => {
  let position = window.scrollY + 200
  navbarlinks.forEach(navbarlink => {
    if (!navbarlink.hash) return
    let section = select(navbarlink.hash)
    if (!section) return
    if (position >= (section.offsetTop + 100) && position <= (section.offsetTop + section.offsetHeight + 100)) {
      navbarlink.classList.add('active')
    } else {
      navbarlink.classList.remove('active')
    }
  })
}
window.addEventListener('load', navbarlinksActive)
onscroll(document, navbarlinksActive)