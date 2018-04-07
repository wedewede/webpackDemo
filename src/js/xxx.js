//topNavBar下拉菜单menu状态显示条
!function () {
    let view = document.getElementsByClassName('submenu')
    let controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            for (let i = 0; i < this.view.length; i++) {
                this.view[i].onmouseenter = function (xx) {
                    xx.currentTarget.classList.add('drop')
                }
                this.view[i].onmouseleave = function (xx) {
                    xx.currentTarget.classList.remove('drop')
                }
            }
        }
    }
    controller.init(view)

}.call()


!function () {
    let view = document.querySelector('#topNavBarMenu').children
    let controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            for (let i = 0; i < this.view.length; i++) {
                this.view[i].addEventListener("mouseenter", () => {
                    this.view[i].classList.add('active')
                })
                this.view[i].addEventListener("mouseleave", () => {
                    this.view[i].classList.remove('active')
                })
            }
        }
    }
    controller.init(view)
}.call()





