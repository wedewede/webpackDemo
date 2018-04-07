!function () {
  let view = document.querySelector('.swiper-container')
  let controller = {
    view: null,
    swiper: null,
    options: {navigation: {nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev',},scrollbar: {el: '.swiper-scrollbar',hide: true},},
    init: function (view) {
      this.view = view
      this.bindEvents()
    },
    bindEvents: function () {
      this.swiper = new Swiper(
        this.view, 
        this.options
      )
    }
  }
  controller.init(view)
}.call()


