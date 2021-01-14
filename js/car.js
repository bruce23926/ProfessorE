

const ButtonHover = {
  button: document.querySelector('.buttonA_L'),
  elWidth: 0,
  elHeight: 0,
  cursorX: 0,
  cursorY: 0,
  elCenterX: 0,
  elCenterY: 0,
  
  init() {
    this.elWidth = this.button.offsetWidth;
    this.elHeight = this.button.offsetHeight;
    this.button.addEventListener('mousemove', e => this.animate(e));
  },
  
  animate(e) {
    let cord = e.target.getBoundingClientRect();
    this.cursorX = e.x;
    this.cursorY = e.y;
    this.elCenterX = cord.left + (cord.width / 2);
    this.elCenterY = cord.top + (cord.height / 2);
    let y = this.elCenterY - this.cursorY;
    let x = this.elCenterX - this.cursorX;
    
    let theta = Math.atan2(y,x);
    let angle = theta * 180 / Math.PI - 90;
    if (angle < 0) {
      angle = angle + 360;
    }
    
    this.button.style.transform = 'translateX(' + (-x * 0.05) + 'px) rotateX(' + (-y * 0.1) + 'deg) rotateY(' + (x * 0.1) + 'deg)';
    this.button.style.boxShadow = x * 0.2 +"px "+ y * 0.3 +"px 28px rgba(0,0,0,0.25)";
    
  }
};

ButtonHover.init();

$(document).ready(function(){
  $(".hover1").mouseover(function () {
      $(".hover1 img").attr("src", "img/icon2_hover.png");
  });
  $(".hover1").mouseout(function () {
      $(".hover1 img").attr("src", "img/index_icon1_L.png");
  });
  $(".hover2").mouseover(function () {
    $(".hover2 img").attr("src", "img/icon3_hover.png");
  });
  $(".hover2").mouseout(function () {
      $(".hover2 img").attr("src", "img/index_icon2_L.png");
  });
  $(".hover3").mouseover(function () {
    $(".hover3 img").attr("src", "img/icon2_hover.png");
  });
  $(".hover3").mouseout(function () {
      $(".hover3 img").attr("src", "img/index_icon1_M.png");
  });
  $(".hover4").mouseover(function () {
    $(".hover4 img").attr("src", "img/icon3_hover.png");
  });
  $(".hover4").mouseout(function () {
      $(".hover4 img").attr("src", "img/index_icon2_M.png");
  });

  $(".hover5").mouseover(function () {
    $(".hover5 img").attr("src", "img/icon2_hover.png");
  });
  $(".hover5").mouseout(function () {
      $(".hover5 img").attr("src", "img/index_icon1_S.png");
  });

  $(".hover6").mouseover(function () {
    $(".hover6 img").attr("src", "img/icon3_hover.png");
  });
  $(".hover6").mouseout(function () {
      $(".hover6 img").attr("src", "img/index_icon2_S.png");
  });
});