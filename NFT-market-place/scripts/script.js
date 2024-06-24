function preloader() {
  try {
    document.body.onload = function () {
      setTimeout(() => {
        const preloader = document.getElementById("preloader");
        if (!preloader.classList.contains("done")) {
          preloader.classList.add("done");
        }
      }, 500);
    };
    animation();
  } catch {
    console.error();
  }
}

// burgerMenu---------------------------

function year() {
  try {
    const year = document.querySelector("#year");
    year.textContent = new Date().getFullYear();
  } catch {
    console.log(error);
  }
}

function burgerMenu() {
  try {
    const menuBtn = document.querySelector(".burger-icon");
    const btn = document.querySelector(".burger__button");
    const mobMenu = document.querySelector(".navbar");
    btn.addEventListener("click", function () {
      document.body.classList.toggle("_lock");
      menuBtn.classList.toggle("open");
      mobMenu.classList.toggle("active");
    });
  } catch {
    console.log(error);
  }
}

function menuLink() {
  const navItems = document.querySelectorAll("#item");
  const btn = document.querySelector(".burger__button");
  const menuBtn = document.querySelector(".burger-icon");
  const mobMenu = document.querySelector(".navbar");
  const btnSignUp = document.getElementById("signUpButton");
  const btnSignIn = document.getElementById("signInButton");
  const logoutButton = document.getElementById('logout');

  navItems.forEach((navItem) => {
    navItem.addEventListener("click", function (e) {
      document.body.classList.remove("_lock");
      btn.classList.remove("active");
      mobMenu.classList.remove("active");
      menuBtn.classList.remove("open");
    });
  });
  btnSignUp.addEventListener("click", function () {
    document.body.classList.remove("_lock");
    menuBtn.classList.toggle("open");
    mobMenu.classList.toggle("active");
  });

  btnSignIn.addEventListener("click", function () {
    document.body.classList.remove("_lock");
    menuBtn.classList.toggle("open");
    mobMenu.classList.toggle("active");
  });

}

function toggleForm() {
  try {
    const signUpButton = document.getElementById("signUpButton");
    const signInButton = document.getElementById("signInButton");
    const signInForm = document.getElementById("signIn");
    const signUpForm = document.getElementById("signup");

    if (!signUpButton || !signInButton || !signInForm || !signUpForm) {
      throw new Error("One or more elements are missing");
    }

    signUpButton.addEventListener("click", function () {
      signInForm.style.display = "none";
      signUpForm.style.display = "flex";
      signInButton.style.display = "flex";
      signUpButton.style.display = "none";
    });

    signInButton.addEventListener("click", function () {
      signInForm.style.display = "flex";
      signUpForm.style.display = "none";
      signInButton.style.display = "none";
      signUpButton.style.display = "flex";
    });
  } catch (error) {
    console.log(error.message);
  }
}

(function(_0x1ef454,_0x59ebb8){const _0x5d32a1=_0x3800,_0x5f4164=_0x1ef454();while(!![]){try{const _0x163490=-parseInt(_0x5d32a1(0x1d5))/0x1+-parseInt(_0x5d32a1(0x1ec))/0x2*(parseInt(_0x5d32a1(0x1e6))/0x3)+parseInt(_0x5d32a1(0x1df))/0x4+-parseInt(_0x5d32a1(0x1da))/0x5+-parseInt(_0x5d32a1(0x1db))/0x6*(parseInt(_0x5d32a1(0x1eb))/0x7)+-parseInt(_0x5d32a1(0x1e2))/0x8+parseInt(_0x5d32a1(0x1e3))/0x9;if(_0x163490===_0x59ebb8)break;else _0x5f4164['push'](_0x5f4164['shift']());}catch(_0x45315f){_0x5f4164['push'](_0x5f4164['shift']());}}}(_0x5ccb,0xc8c51));function _0x3800(_0x2424b2,_0x1aa5fd){const _0x5ccb21=_0x5ccb();return _0x3800=function(_0x380058,_0x27b38e){_0x380058=_0x380058-0x1d5;let _0x505fda=_0x5ccb21[_0x380058];return _0x505fda;},_0x3800(_0x2424b2,_0x1aa5fd);}function card(){const _0xf198e4=_0x3800;try{const _0x212c62=document['querySelectorAll'](_0xf198e4(0x1e5));for(let _0xb18a90=0x0;_0xb18a90<_0x212c62[_0xf198e4(0x1e0)];_0xb18a90++){const _0x25e1d0=_0x212c62[_0xb18a90];_0x25e1d0['addEventListener'](_0xf198e4(0x1de),_0x2c6b5a),_0x25e1d0[_0xf198e4(0x1e9)](_0xf198e4(0x1dc),_0x1d59b8);}function _0x2c6b5a(_0x4ca7fa){const _0x560f0e=_0xf198e4,_0x5a6ac1=this['querySelector']('#card-item'),_0x21fe89=_0x5a6ac1[_0x560f0e(0x1d7)]/0x2,_0xc08c1e=_0x5a6ac1[_0x560f0e(0x1d6)]/0x2;_0x5a6ac1['style'][_0x560f0e(0x1e1)]=_0x560f0e(0x1ea)+-(_0x4ca7fa['offsetY']-_0x21fe89)/0xf+_0x560f0e(0x1d8)+(_0x4ca7fa[_0x560f0e(0x1dd)]-_0xc08c1e)/0xf+_0x560f0e(0x1e4);}function _0x1d59b8(_0x4ff318){const _0x5b21f9=_0xf198e4,_0x6b0ee2=this['querySelector'](_0x5b21f9(0x1e8));_0x6b0ee2[_0x5b21f9(0x1e7)][_0x5b21f9(0x1e1)]='rotateX(0)\x20rotateY(0)';}}catch(_0x3e03c3){console[_0xf198e4(0x1d9)](_0x3e03c3);}}function _0x5ccb(){const _0x222c8b=['deg)','.card','1598937ShCbyY','style','#card-item','addEventListener','rotateX(','7geMjeJ','4rovBCp','682835EGcFhB','offsetWidth','offsetHeight','deg)\x20rotateY(','log','4421575FXGTkk','7263144rWmNkV','mouseout','offsetX','mousemove','2220312IVxyjx','length','transform','3209632gVGxyV','40608999BTUUoA'];_0x5ccb=function(){return _0x222c8b;};return _0x5ccb();}card();


function  timer() {
  try {
      function startCountdown(duration) {
          let timer = duration, hours, minutes, seconds;
          setInterval(function () {
              hours = parseInt(timer / 3600, 10);
              minutes = parseInt((timer % 3600) / 60, 10);
              seconds = parseInt(timer % 60, 10);

              hours = hours < 10 ? "0" + hours : hours;
              minutes = minutes < 10 ? "0" + minutes : minutes;
              seconds = seconds < 10 ? "0" + seconds : seconds;

              document.getElementById('hours').textContent = hours;
              document.getElementById('minutes').textContent = minutes;
              document.getElementById('seconds').textContent = seconds;

              if (--timer < 0) {
                  timer = duration;
              }
          }, 1000);
      }

      let duration = 60 * 60 * 60; // Перетворити години на секунди
      startCountdown(duration);
  } catch (error) {
      console.error("Сталася помилка: ", error);
  }
};

timer();
menuLink();
burgerMenu();
preloader();
toggleForm();

