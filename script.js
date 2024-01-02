
let sec1roundimg = document.querySelector(".circle-img"),
  sec1img1 = document.querySelector(".sec1 img:first-of-type"),
  sec1img2 = document.querySelector(".sec1 img:nth-of-type(2)"),
  sec1img3 = document.querySelector(".sec1 img:last-of-type"),
  sec2text = document.querySelector(".sec2 .text p"),
  sec2imgs = document.querySelectorAll(".sec1 .rotate img"),
  sec2num1 = document.querySelector(".sec2 #num1"),
  sec2num2 = document.querySelector(".sec2 #num2"),
  sec3image1 = document.querySelector(".sec3 .layout #img1"),
  sec3image2 = document.querySelector(".sec3 .layout #img2"),
  sec4figure = document.querySelector(".sec4 .layout figure"),
  sec5fdiv = document.querySelector(".sec5 .container > div:first-of-type"),
  sec5ldiv = document.querySelector(".sec5 .container div:last-of-type div:last-of-type"),
  sec5lldiv = document.querySelector(".sec5 .container div:last-of-type div:last-of-type"),
  sec6__div1 = document.querySelector(".sec6 .container div:first-of-type div"),
  sec6__div2 = document.querySelector(".sec6 .container div:last-of-type div"),
  sec7container = document.querySelector(".sec7 .container"),
  sec7div1 = document.querySelector(".sec7 .container div:first-of-type"),
  sec7div2 = document.querySelector(".sec7 .container div:nth-of-type(2)"),
  sec7div3 = document.querySelector(".sec7 .container div:last-of-type");

// Get the width of the window
var windowWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

console.log("Window width: " + windowWidth);

if (windowWidth >= 992) {
  document.addEventListener("scroll", function () {
    if (window.scrollY < 330) {
      sec1roundimg.style.animation = "rotatetoright 2s";
      sec1img1.style.animation = "rotatetoright 2s";
      sec1img2.style.animation = "rotatetoright 2s";
      sec1img3.style.animation = "rotatetoright 2s";
    } else {
      sec1roundimg.style.animation = "none";
      sec1img1.style.animation = "none";
      sec1img2.style.animation = "none";
      sec1img3.style.animation = "none";
    }

    // ------------------------------------------------
    // const sec2text = document.querySelector('.text p')

    if (window.scrollY >= 800) {
      sec2text.style.animation = "textanime 2s";
      sec2num1.style.animation = "numanime 2s";
      sec2num2.style.animation = "numanime 2s";
    } else {
      sec2text.style.animation = "none";
      sec2num1.style.animation = "none";
      sec2num2.style.animation = "none";
    }

    // ------------------------------------

    if (window.scrollY > 1400 || window.scrollY < 1000) {
      sec3image1.style.animation = "zerotone 2s";
      sec3image2.style.animation = "zerotone 2s";
    } else {
      sec3image1.style.animation = "none";
      sec3image2.style.animation = "none";
    }

    // ---------------------------------------

    if (window.scrollY > 2250) {
      sec4figure.style.animation = "rolling 3s";
    } else {
      sec4figure.style.animation = "none";
    }

    // -----------------------------------------

    if (window.scrollY > 3148) {
      sec5fdiv.style.animation = "numanime 2s";
      sec5ldiv.style.animation = "t-t 2s";
    } else {
      sec5fdiv.style.animation = "none";
      sec5ldiv.style.animation = "none";
    }

    if (window.scrollY > 3871) {
      sec6__div1.style.animation = "rotatetoright 2s";
      sec6__div2.style.animation = "rotatetoright 2s";
    } else {
      sec6__div1.style.animation = "none";
      sec6__div2.style.animation = "none";
    }

    // ---------------------------------------------

    if (window.scrollY >= 4565) {
      // sec7container.style = 'animation: trio 1.5s;'
      sec7div1.style =
        "animation: u 3s; animation-delay: 0.5s; animation-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1);";
      sec7div2.style =
        "animation: d 3s; animation-delay: 6s; animation-timing-function: linear; ";
      sec7div3.style =
        "animation: t 3s; animation-delay: 3s; animation-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1); ";
    } else {
      // sec7container.style = 'animation: none'
      sec7div1.style.animation = "none";
      sec7div2.style.animation = "none";
      sec7div3.style.animation = "none";
    }
  });
} else if (windowWidth >= 768 && windowWidth <= 991) {
  document.addEventListener("scroll", function () {
    if (window.scrollY < 330) {
      sec1roundimg.style.animation = "rotatetoright 2s";
      sec1img1.style.animation = "rotatetoright 2s";
      sec1img2.style.animation = "rotatetoright 2s";
      sec1img3.style.animation = "rotatetoright 2s";
    } else {
      sec1roundimg.style.animation = "none";
      sec1img1.style.animation = "none";
      sec1img2.style.animation = "none";
      sec1img3.style.animation = "none";
    }

    // ------------------------------------------------
    // const sec2text = document.querySelector('.text p')

    if (window.scrollY > 1080) {
      sec2text.style.animation = "textanime 2s";
      sec2num1.style.animation = "numanime 2s";
      sec2num2.style.animation = "numanime 2s";
    } else {
      sec2text.style.animation = "none";
      sec2num1.style.animation = "none";
      sec2num2.style.animation = "none";
    }

    // ------------------------------------

    if (window.scrollY > 1920 && window.scrollY < 2964) {
      sec3image1.style.animation = "zerotone 2s";
      sec3image2.style.animation = "zerotone 2s";
    } else {
      sec3image1.style.animation = "none";
      sec3image2.style.animation = "none";
    }

    // ---------------------------------------

    if (window.scrollY > 3374) {
      sec4figure.style.animation = "rolling 3s";
    } else {
      sec4figure.style.animation = "none";
    }

    // -----------------------------------------

    if (window.scrollY > 4315 && window.scrollY <= 4643) {
      sec5fdiv.style.animation = "numanime 2s";
      sec5ldiv.style.animation = "t-t 2s";
    } else {
      sec5fdiv.style.animation = "none";
      sec5ldiv.style.animation = "none";
    }

    // -----------------------------------------

    if (window.scrollY > 5070 && window.scrollY <= 5560) {
      sec6__div1.style.animation = "rotatetoright 2s";
      sec6__div2.style.animation = "rotatetoright 2s";
    } else {
      sec6__div1.style.animation = "none";
      sec6__div2.style.animation = "none";
    }

    // ---------------------------------------------

    if (window.scrollY >= 6070) {
      // sec7container.style = 'animation: trio 1.5s;'
      sec7div1.style =
        "animation: u 3s; animation-delay: 0.5s; animation-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1);";
      sec7div2.style =
        "animation: d 3s; animation-delay: 6s; animation-timing-function: linear; ";
      sec7div3.style =
        "animation: t 3s; animation-delay: 3s; animation-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1); ";
    } else {
      // sec7container.style = 'animation: none'
      sec7div1.style.animation = "none";
      sec7div2.style.animation = "none";
      sec7div3.style.animation = "none";
    }
  });
} else if (windowWidth > 570 && windowWidth < 767) {
  document.addEventListener("scroll", function () {
    if (window.scrollY < 250) {
      sec1roundimg.style.animation = "rotatetoright 2s";
      sec1img1.style.animation = "rotatetoright 2s";
      sec1img2.style.animation = "rotatetoright 2s";
      sec1img3.style.animation = "rotatetoright 2s";
    } else {
      sec1roundimg.style.animation = "none";
      sec1img1.style.animation = "none";
      sec1img2.style.animation = "none";
      sec1img3.style.animation = "none";
    }

    // ------------------------------------------------
    // const sec2text = document.querySelector('.text p')

    if (window.scrollY > 1244) {
      sec2text.style.animation = "textanime 2s";

      sec2num1.style.animation = "numanime 2s";
      sec2num2.style.animation = "numanime 2s";
    } else {
      sec2text.style.animation = "none";
      sec2num1.style.animation = "none";
      sec2num2.style.animation = "none";
    }

    // ------------------------------------

    if (window.scrollY > 2320 && window.scrollY < 3333) {
      sec3image1.style.animation = "zerotone 2s";
      sec3image2.style.animation = "zerotone 2s";
    } else {
      sec3image1.style.animation = "none";
      sec3image2.style.animation = "none";
    }

    // ---------------------------------------

    if (window.scrollY > 3840) {
      sec4figure.style.animation = "rolling 2s";
    } else {
      sec4figure.style.animation = "none";
    }

    // -----------------------------------------

    if (window.scrollY > 4684 && window.scrollY <= 5272) {
      sec5fdiv.style.animation = "numanime 2s";
      sec5ldiv.style.animation = "t-t 2s";
    } else {
      sec5fdiv.style.animation = "none";
      sec5ldiv.style.animation = "none";
    }

    // -----------------------------------------

    if (window.scrollY > 5711 && window.scrollY <= 6191) {
      sec6__div1.style.animation = "rotatetoright 2s";
      sec6__div2.style.animation = "rotatetoright 2s";
    } else {
      sec6__div1.style.animation = "none";
      sec6__div2.style.animation = "none";
    }

    // ------------------------------------------------------------

    if (window.scrollY >= 6700) {
      sec7div1.style =
        "animation: udt 1s; animation-timing-function: linear; animation-delay: 3s;";
      sec7div2.style =
        "animation: udt 1s; animation-timing-function: linear; animation-delay: 1.5s;";
      sec7div3.style =
        "animation: udt 1s; animation-timing-function: linear; animation-delay: 0s;";
    } else {
      sec7div1.style.animation = "none";
      sec7div2.style.animation = "none";
      sec7div3.style.animation = "none";
    }
  });
} else if (windowWidth <= 570) {
  document.addEventListener("scroll", function () {
    if (window.scrollY < 400) {
      sec1roundimg.style.animation = "rotatetoright 2s";
      sec1img1.style.animation = "rotatetoright 2s";
      sec1img2.style.animation = "rotatetoright 2s";
      sec1img3.style.animation = "rotatetoright 2s";
    } else {
      sec1roundimg.style.animation = "none";
      sec1img1.style.animation = "none";
      sec1img2.style.animation = "none";
      sec1img3.style.animation = "none";
    }

    // ------------------------------------------------
    // const sec2text = document.querySelector('.text p')

    if (window.scrollY > 1380 && window.scrollY < 2520) {
      sec2text.style.animation = "textanime 2s";
      sec2num1.style.animation = "numanime 2s";
      sec2num2.style.animation = "numanime 2s";
    } else {
      sec2text.style.animation = "none";
      sec2num1.style.animation = "none";
      sec2num2.style.animation = "none";
    }

    // ------------------------------------

    if (window.scrollY > 2600 && window.scrollY < 3560) {
      sec3image1.style.animation = "zerotone 2s";
      sec3image2.style.animation = "zerotone 2s";
    } else {
      sec3image1.style.animation = "none";
      sec3image2.style.animation = "none";
    }

    // ---------------------------------------

    if (window.scrollY > 4050) {
      sec4figure.style.animation = "rolling 3s";
    } else {
      sec4figure.style.animation = "none";
    }

    // -----------------------------------------

    if (window.scrollY > 5030 && window.scrollY <= 5653) {
      sec5fdiv.style.animation = "numanime 2s";
      sec5ldiv.style.animation = "t-t 2s";
    } else {
      sec5fdiv.style.animation = "none";
      sec5ldiv.style.animation = "none";
    }

    // -----------------------------------------

    if (window.scrollY > 6080 && window.scrollY <= 6570) {
      sec6__div1.style.animation = "rotatetoright 2s";
      sec6__div2.style.animation = "rotatetoright 2s";
    } else {
      sec6__div1.style.animation = "none";
      sec6__div2.style.animation = "none";
    }

    // -----------------------------------------------
    if (window.scrollY >= 7125) {
      sec7div1.style = "animation: zerotone 1s;  animation-delay: 0s;";
      sec7div2.style = "animation: zerotone 1s;  animation-delay: 1.1s;";
      sec7div3.style = "animation: zerotone 1s;  animation-delay: 2.3s;";
    } else {
      sec7div1.style.animation = "none";
      sec7div2.style.animation = "none";
      sec7div3.style.animation = "none";
    }
  });
}



// ----------------------------------------------

function toggleDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}

function navigateTo(target) {
    window.location.href = target;
}