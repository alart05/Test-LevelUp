// swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoHeight: true,
  allowTouchMove: true,
  slidesPerView: 3,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// show and hide button
const saleBlock = document.querySelector('.block5')
const buttonBuy = document.querySelector('.fast-buy')
document.addEventListener('scroll', () => {
  const posTop = saleBlock.getBoundingClientRect().top
  if (posTop < 500) {
    buttonBuy.classList.add('hidden')
  } else {
    buttonBuy.classList.remove('hidden')
  }
})

// scroll on click
const scrollButton = document.querySelector('.button-scroll-js')
scrollButton.addEventListener('click', () => {
  saleBlock.scrollIntoView({ block: "center", behavior: "smooth" })
})

// timer
let time = 30 * 60
const timeElement = document.querySelector('.block__sale-time')

const interval = setInterval(() => {
  time --
  if (time === 0) {
    const oldPrice = document.querySelector('.block5__price-old')
    const newPrice = document.querySelector('.block5__price-new')
    if (oldPrice && newPrice) {
      newPrice.classList.add('hidden')
      oldPrice.classList.add('block5__price-new')
      oldPrice.classList.remove('block5__price-old')
      timeElement.classList.add('hidden')
      const saleTitle = document.querySelector('.block__sale-text-js')
      if (saleTitle) {
        saleTitle.textContent = 'Скидка закончилась'
      }
    }
    window.clearInterval(interval)
  } else {
    if (timeElement) {
      timeElement.textContent = (Math.trunc(time / 60)) + ':' + (time % 60)
    }
  } 
}, 1000)