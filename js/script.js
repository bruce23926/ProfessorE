

if (window.innerWidth >= 981) {
  var x = document.getElementsByClassName("mySlides");
} else  if (window.innerWidth >= 421) {
  var x = document.getElementsByClassName("mySlides3");
} else {
  var x = document.getElementsByClassName("mySlides5");
}
if (window.innerWidth >= 981) {
  var y = document.getElementsByClassName("mySlides2");
} else  if (window.innerWidth >= 421) {
  var y = document.getElementsByClassName("mySlides4");
} else {
  var y = document.getElementsByClassName("mySlides6");
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  if (window.innerWidth >= 981) {
    var x = document.getElementsByClassName("mySlides");
  } else  if (window.innerWidth >= 421) {
    var x = document.getElementsByClassName("mySlides3");
  } else {
    var x = document.getElementsByClassName("mySlides5");
  }
  
  
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  
  x[slideIndex-1].style.display = "block";   
}



var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(m) {
  showDivs2(slideIndex2 += m);
}

function currentDiv2(m) {
  showDivs2(slideIndex2 = m);
}

function showDivs2(m) {
  var k;
  if (window.innerWidth >= 981) {
    var y = document.getElementsByClassName("mySlides2");
  } else  if (window.innerWidth >= 421) {
    var y = document.getElementsByClassName("mySlides4");
  } else {
    var y = document.getElementsByClassName("mySlides6");
  }
  if (m > y.length) {slideIndex2 = 1}    
  if (m < 1) {slideIndex2 = y.length}
  for (k = 0; k < y.length; k++) {
    y[k].style.display = "none";  
  }
 
  y[slideIndex2-1].style.display = "block";  
 
}

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