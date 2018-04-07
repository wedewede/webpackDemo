!function () {
  let view = document.querySelector('#topNavBarMenu > li >a')
  let controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.bindEvents()
      this.initAnimation()
    },
    initAnimation: function () {
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);
    },
    scrollToElement: function (top) {

    },
    bindEvents: function () {
      let aTags = document.querySelectorAll('#topNavBarMenu > li >a')
      for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = (yy) => {
          yy.preventDefault();
          let top = document.querySelector(yy.currentTarget.getAttribute('href')).offsetTop
          this.slideSmoothly(top)
          
        }
      }
    },
    slideSmoothly:function(top){
      let targetTop = top - 80
          let currentTop = window.scrollY
          let s = Math.abs(targetTop - currentTop)
          let t = s / 100 * 300
          if (t < 300) {
            t = 300
          } else if (t > 900) {
            t = 900
          } else {
            t = s / 100 * 300
          }
          let coords = { x: 0, y: currentTop };
          let tween = new TWEEN.Tween(coords).to({ x: 0, y: targetTop }, 1000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function () {
              window.scrollTo(0, coords.y)
            })
            .start();
    }

  }
  controller.init(view)
}.call()
//页面滑动动画


