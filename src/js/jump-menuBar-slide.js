!function () {
  let view = document.querySelectorAll('[data-x]')
  let controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.bindEvents() 
    },
    bindEvents: function () {
      setTimeout( ()=> { this.findClosest() }, 2000);
      window.addEventListener('scroll',  (x)=> {
        //页面滚动时，menu状态条切换
        this.findClosest()
      })
      for (let i = 0; i < this.view.length; i++) {
        this.view[i].classList.add('jump')
      }
    },
    findClosest: function () {
      let minIndex = 0
      for (let i = 1; i < this.view.length; i++) {
        if (Math.abs(this.view[i].offsetTop - window.scrollY) <= Math.abs(this.view[minIndex].offsetTop - window.scrollY)) {
          minIndex = i
        }
      }
      let focusId = this.view[minIndex].id
      let a = document.querySelector('a[href="#' + focusId + '"]')
      let li = a.parentElement
      this.jumpClosest(li,minIndex)
    },
    jumpClosest: function (li,minIndex) {
      let ours = li.parentElement.children
      for (let i = 0; i < ours.length; i++) {
        ours[i].classList.remove('focusOn')
      }
      ours[minIndex].classList.add('focusOn')
      this.view[minIndex].classList.remove('jump')
    }
  }
  controller.init(view)
}.call()



