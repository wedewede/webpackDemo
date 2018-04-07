!function () {
  let view = document.querySelector('#topNavBar')
  let controller = {
    view:null,
    init: function (view) {
      this.view = view
      this.bindEvents()
    },
    bindEvents: function () {
      window.addEventListener('scroll', (x) => {
        let view = this.view
        if (window.scrollY > 0) {
          this.active()
        } else {
          this.deactive()
        }
      })
    },
    active: function () {
      this.view.classList.add('sticky')
    },
    deactive: function () {
      this.view.classList.remove('sticky')
    }
  }
  //topNavBar滚动效果

  controller.init(view)
}.call()



