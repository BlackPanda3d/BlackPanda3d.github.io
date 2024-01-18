function preloader() {
  try {
    document.body.onload = function () {
      setTimeout(() => {
        const preloader = document.getElementById("preloader");
        if (!preloader.classList.contains("done")) {
          preloader.classList.add("done");
        }
      }, 2000);
    };
  } catch {
    console.error();
  }
}

// burgerMenu---------------------------
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
  const btnJoin = document.querySelector(".header__button")

  navItems.forEach((navItem) => {
    navItem.addEventListener("click", function (e) {
      document.body.classList.remove("_lock");
      btn.classList.remove("active");
      mobMenu.classList.remove("active");
      menuBtn.classList.remove("open")
    });
  });
  btnJoin.addEventListener("click", function () {
    document.body.classList.remove("_lock");
    menuBtn.classList.toggle("open");
    mobMenu.classList.toggle("active");
  });
}

function year() {
  try {
    const year = document.querySelector("#year");
    year.textContent = new Date().getFullYear();
  } catch {
    console.log(error);
  }
}



function swiperSlider(){
  new Swiper('.swiperPromo', {
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    // effect: "fade",
    direction: 'horizontal',
    loop: true,
    spaceBetween: 0,
    mousewheelControl: false,
    slidesPerView: 1,
  });
}


function accordionFaq(){
 const questionItems = document.querySelectorAll('.faq__item-question');
 questionItems.forEach(function (item) {
  item.addEventListener('click', function () {
    // Перевіряємо, чи елемент вже має клас 'active'
    var isActive = item.classList.contains('active');

    // Видаляємо клас .active у всіх елементів .faq__item-question
    questionItems.forEach(function (faqItem) {
      faqItem.classList.remove('active');
    });

    // Додаємо або видаляємо клас .active відповідно до значення isActive
    item.classList.toggle('active', !isActive);

    // Знаходимо наступний елемент .answer для поточного .faq__item-question
    var nextAnswer = item.querySelector('.answer');

    // Знаходимо наступний елемент .dot для поточного .faq__item-question
    var nextDot = item.querySelector('.dot');

    // Видаляємо клас .active у всіх елементів .answer та .dot
    document.querySelectorAll('.answer, .dot').forEach(function (element) {
      element.classList.remove('active');
    });

    // Додаємо клас .active до наступного елемента .answer
    if (nextAnswer && !isActive) {
      nextAnswer.classList.add('active');
    }

    // Додаємо клас .active до наступного елемента .dot
    if (nextDot && !isActive) {
      nextDot.classList.add('active');
    }
  });
})
}

function changeLanguage(element) {
  // Зніміть активний клас з усіх елементів, окрім клікнутого
  try {
    const languageItems = document.querySelectorAll('.switcher-language__item');
    languageItems.forEach(function (item) {
            item.addEventListener("click", ()=>{

              languageItems.forEach(function (faqItem) {
                faqItem.classList.remove('active');
              });

              item.classList.toggle('active');
            })
    });
  
  }catch{
    console.log(error);
  }

}

function translator(){
  const arrLang={
    'ru':{
      'welcomes':	'Crypto town Приветствует тебя!',
    },	
    'ua': {
      'welcomes':	'Crypto town Вітає тебе!',
    },
    'en': {
      'welcomes': 'Crypto town Welcomes you!',
    },
  }

  let translateButtons = document.querySelectorAll('.switcher-language__item');
  translateButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const lang = button.id;

      let elementsToTranslate = document.querySelectorAll('.lang');
      elementsToTranslate.forEach(function(element) {
        var key = element.getAttribute('key');
        element.textContent = arrLang[lang][key];
      });
    });
  });
  
}

function validationForm(){
  try{
    const validate = new JustValidate("#form");

    validate
    .addField(document.querySelector("#name"), [
      {
        rule: "required",
        errorMessage: "Invalid this field is empty",
      },
    
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "maxLength",
        value: 15,
      },
    ])
    // .addField(document.querySelector("#lastname"), [
    //   {
    //     rule: "required",
    //     errorMessage: "Invalid this field is empty",
    //   },
    //   {
    //     rule: "minLength",
    //     value: 3,
    //   },
    //   {
    //     rule: "maxLength",
    //     value: 15,
    //   },
    // ])
    // .addField(document.querySelector("#email"), [
    //   {
    //     rule: "required",
    //     errorMessage: "Invalid this field is empty",
    //   },
    //   {
    //     rule: "email",
    //   },
    // ])
    // .addField(document.querySelector("input[type='tel"), [
    //   {
    //     rule: "required",
    //     errorMessage: "Invalid this field is empty",
    //   },
    //   {
    //     rule: "integer",
    //   },
    //   {
    //     rule: 'minNumber',
    //     value: 5,
    //   },
    //   {
    //     rule: 'maxNumber',
    //     value: 100,
    //   },
    // ]);
  }catch{

  }
}





validationForm();
preloader();
// swiperSlider();
translator();
burgerMenu();
year();
menuLink();
accordionFaq();
changeLanguage();

