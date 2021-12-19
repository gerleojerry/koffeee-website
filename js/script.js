let nav = document.querySelector("nav")
let hamburger = document.querySelector("#menu-btn")
let search = document.querySelector('#search-btn')
let searchBar = document.querySelector(".search-form")
let cart = document.querySelector("#cart-btn")
let cartItems = document.querySelector(".cart-items-container")

hamburger.addEventListener('click', ()=> {
  nav.classList.remove('active')
  nav.classList.remove('search-show')
  nav.classList.toggle("show")
} )

cart.addEventListener('click', ()=> {
  nav.classList.remove('show')
  nav.classList.remove('search-show')
  nav.classList.toggle('active')
})

search.addEventListener('click', ()=> {
  nav.classList.remove('active')
  nav.classList.remove('show')
  nav.classList.toggle('search-show')
})

window.addEventListener('scroll' , ()=> {
  nav.classList.remove('active')
  nav.classList.remove('show')
  nav.classList.remove('search-show')  

})

