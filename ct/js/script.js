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
  const btnJoin = document.querySelector(".header__button");

  navItems.forEach((navItem) => {
    navItem.addEventListener("click", function (e) {
      document.body.classList.remove("_lock");
      btn.classList.remove("active");
      mobMenu.classList.remove("active");
      menuBtn.classList.remove("open");
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

function swiperSlider() {
  new Swiper(".swiperPromo", {
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    // effect: "fade",
    direction: "horizontal",
    loop: true,
    spaceBetween: 0,
    mousewheelControl: false,
    slidesPerView: 1,
  });
}

function accordionFaq() {
  const questionItems = document.querySelectorAll(".faq__item-question");
  questionItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var isActive = item.classList.contains("active");

      questionItems.forEach(function (faqItem) {
        faqItem.classList.remove("active");
      });

      item.classList.toggle("active", !isActive);

      var nextAnswer = item.querySelector(".answer");

      var nextDot = item.querySelector(".dot");

      document.querySelectorAll(".answer, .dot").forEach(function (element) {
        element.classList.remove("active");
      });

      if (nextAnswer && !isActive) {
        nextAnswer.classList.add("active");
      }

      if (nextDot && !isActive) {
        nextDot.classList.add("active");
      }
    });
  });
}

function changeLanguage(element) {
  try {
    const languageItems = document.querySelectorAll(".switcher-language__item");
    languageItems.forEach(function (item) {
      item.addEventListener("click", () => {
        languageItems.forEach(function (faqItem) {
          faqItem.classList.remove("active");
        });

        item.classList.toggle("active");
      });
    });
  } catch {
    console.log(error);
  }
}

function translator() {
  const arrLang = {
    ru: {
      welcomes: "Crypto town Приветствует тебя!",
      achievementFirst: "Партнеры по всему миру",
      achievementSecond: "Гео по всему миру",
      achievementThird: "Год основания",
      achievementFourth: "Эксклюзивные предложения",
      firstItemNav: "Оферта",
      secondItemNav: "Выгода",
      thirdItemNav: "Вопроси",
      join: "Cвязываться",
      titleOffers: "Crypto Выгода",
      subTitleOffers:
        "CPA-сеть CryptoTown: новаторская прибыльность в криптовселенной – ваш успех, наш приоритет!",
      firstItemOffers: "Никаких ограничений и запретов",
      secondItemOffers: "Упорядоченный вертикальный процесс.",
      thirdItemOffers: "Выполнение начального теста просто и быстро.",
      fourthItemOffers:
        "Целевая демографическая группа включает в себя абонентов всех мобильных операторов.",
      offersBtn: "Подробнее",
      benefitTitle: "Crypto Преимущества",
      benefitsBlockTitle: "Изучение нестандартных вертикалей:",
      benefitsBlockText:
        "CryptoTown пропонує різноманітний спектр пропозицій, охоплюючи понад 3000 варіантів як у відомих, так і унікальних нішах. Широкий вибір є ключовим аспектом їхнього успіху.",
      benefitsBlockTitleSecond: "Глобальная поддержка на нескольких языках:",
      benefitsBlockTextSecond:
        "В дополнение к предоставлению оперативных ответов, CryptoTown обеспечивает комплексную поддержку клиентов на 12 языках, обеспечивая эффективное общение для всех. Их опытная команда всегда готова предоставить советы по выбору подходящих предложений.",
      benefitsBlockTitleThird: "Прибыльные и надежные выплаты:",
      benefitsBlockTextThird:
        "Партнеры CryptoTown могут получить впечатляющие комиссионные, с потенциальными заработками до 50% с каждой продажи или лида. Сотрудничество с известными брендами увеличивает потенциал дохода, и выплаты регулярно осуществляются еженедельно без значительных задержек.",
      benefitsBlockTitleFourth:
        "Продвинутые меры по предотвращению мошенничества:",
      benefitsBlockTextFourth:
        "Платформа CryptoTown включает в себя продвинуту внутреннюю систему обнаружения мошенничества для обеспечения безопасного пользовательского опыта. Для усиления безопасности каждый партнер проходит процесс человеческой верификации.",
      faqTitle: "Вопросы",
      faqQuestion: "Как стать партнером CryptoTown?",
      faqAnswear:
        "Чтобы начать, просто зарегистрируйтесь на нашем сайте и начните свой путь в мире партнерского маркетингу.",
      faqQuestionSecond: "Как часто происходят выплаты?",
      faqAnswearSecond:
        "Платежи осуществляются еженедельно, обеспечивая вам стабильный поток дохода без задержек.",
      faqQuestionThird: "Сколько я могу заработать с CryptoTown?",
      faqAnswearThird:
        "Ваши заработки зависят от успешных продаж или лидов, и вы можете получить до 50% от каждой транзакции.",
      faqQuestionFourth:
        "Какой ассортимент доступных вертикалей и предложений?",
      faqAnswearFourth:
        "CryptoTown предлагает более 3000 предложений в различных нишах, включая уникальные и известные вертикали.",
      faqQuestionFifth:
        "Какие меры безопасности предусмотрены для партнеров на платформе CryptoTown?",
      faqAnswearFifth:
        "Мы обеспечиваем безопасность с помощью передовой системы обнаружения мошенничества, и каждый партнер проходит процесс человеческой верификации.",
      faqQuestionSixth: "Есть ли поддержка на нескольких языках?",
      faqAnswearSixth:
        "Да, наша поддержка доступна на 12 языках, гарантируя ответы на вопросы для всех.",
    },
    ua: {
      welcomes: "Crypto town Вітає тебе!",
      achievementFirst: "Партнерів по всьому світу",
      achievementSecond: "Гео по всьому світу",
      achievementThird: "Рік заснування",
      achievementFourth: "Ексклюзивні пропозиції",
      firstItemNav: "Пропозиції",
      secondItemNav: "Переваги",
      thirdItemNav: "Запитання",
      join: "Доєднатись",
      titleOffers: "Crypto Пропозиція",
      subTitleOffers:
        "Мережа CPA CryptoTown: новаторська прибутковість у криптовсесвіті – ваш успіх, наш пріоритет!",
      firstItemOffers: "Жодних обмежень чи заборон.",
      secondItemOffers: "Впорядкований вертикальний процес.",
      thirdItemOffers: "Виконання початкового тесту просто та швидко.",
      fourthItemOffers:
        "Цільова демографічна група включає абонентів усіх мобільних операторів.",
      offersBtn: "Докладніше",
      benefitTitle: "Crypto переваги",
      benefitsBlockTitle: "Вивчення неконвенційних вертикалей:",
      benefitsBlockText:
        "CryptoTown предоставляет разнообразный спектр предложений, охватывающий более 3000 вариантов как в известных, так и в уникальных нишах. Широкий выбор является ключевым аспектом их успеха.",
      benefitsBlockTitleSecond: "Глобальна підтримка на кількох мовах:",
      benefitsBlockTextSecond:
        "Крім того, надаючи оперативні відповіді, CryptoTown забезпечує комплексну підтримку клієнтів на 12 мовах, забезпечуючи ефективну комунікацію для всіх. Їх досвідчена команда завжди готова надати поради з вибору відповідних пропозицій.",
      benefitsBlockTitleThird: "Вигідні та надійні виплати:",
      benefitsBlockTextThird:
        "Партнери CryptoTown можуть отримати вражаючі комісійні винагороди, з можливими доходами до 50% від кожної угоди або ліда. Співпраця з відомими брендами підсилює потенціал доходу, а виплати регулярно здійснюються щотижня без значних затримок.",
      benefitsBlockTitleFourth: "Продвинуті заходи з запобігання шахрайству:",
      benefitsBlockTextFourth:
        "Платформа CryptoTown використовує вдосконалену внутрішню систему виявлення шахрайства для забезпечення безпечного користувацького досвіду. Додатково підвищуючи безпеку, кожен партнер проходить процес людської верифікації.",
      faqTitle: "Запитання",
      faqQuestion: "Як стати партнером CryptoTown?",
      faqAnswear:
        "Щоб розпочати, просто зареєструйтесь на нашому веб-сайті і розпочніть свій шлях у світі партнерського маркетингу.",
      faqQuestionSecond: "Як часто відбуваються виплати?",
      faqAnswearSecond:
        "Виплати здійснюються щотижня, що забезпечує вам стабільний потік доходу без затримок.",
      faqQuestionThird: "Скільки я можу заробити з CryptoTown?",
      faqAnswearThird:
        "Ваші заробітки залежать від успішних продажів або лідів, і ви можете отримати до 50% від кожної угоди.",
      faqQuestionFourth: "Який асортимент доступних вертикалей та пропозицій?",
      faqAnswearFourth:
        "CryptoTown пропонує понад 3000 пропозицій у різних нішах, включаючи унікальні та відомі вертикалі.",
      faqQuestionFifth:
        "Які заходи безпеки передбачені для партнерів на платформі CryptoTown?",
      faqAnswearFifth:
        "Ми забезпечуємо безпеку за допомогою сучасної системи виявлення шахрайства, і кожен партнер проходить процес людської верифікації.",
      faqQuestionSixth: "Чи є підтримка кількомовною?",
      faqAnswearSixth:
        "Так, наша підтримка доступна на 12 мовах, забезпечуючи відповіді на питання для всіх.",
    },
    en: {
      welcomes: "Crypto town Welcomes you!",
      achievementFirst: "Partners worldwide",
      achievementSecond: "Geo around the world",
      achievementThird: "Year of faunded",
      achievementFourth: "Exclusive offers",
      firstItemNav: "OFFERS",
      secondItemNav: "BENEFITS",
      thirdItemNav: "FAQ",
      join: "Join now",
      titleOffers: "Crypto offers",
      subTitleOffers:
        "CryptoTown CPA Network: Pioneering Profitability in the Crypto Universe – Your Success, Our Priority!",
      firstItemOffers: "No restrictions or holds.",
      secondItemOffers: "Streamlined vertical process.",
      thirdItemOffers: "Performing the initial test is straightforward.",
      fourthItemOffers:
        "The target demographic encompasses subscribers from all mobile carriers.",
      offersBtn: "Learn  More",
      benefitTitle: "Crypto benefits",
      benefitsBlockTitle: "Exploring Unconventional Verticals:",
      benefitsBlockText:
        "CryptoTown provides a diverse range of offers, spanning over 3000 options across both well-known and unique niches. This wide variety is a key aspect of their success.",
      benefitsBlockTitleSecond: "Global Support in Multiple Languages:",
      benefitsBlockTextSecond:
        "In addition to offering prompt responses, CryptoTown ensures comprehensive client support in 12 languages, ensuring effective communication for everyone. Their experienced team is always ready to provide advice on choosing the right offers.",
      benefitsBlockTitleThird: "Lucrative and Reliable Payouts:",
      benefitsBlockTextThird:
        "Affiliates with CryptoTown stand to earn impressive commissions, with potential earnings of up to 50% per sale or lead. Partnering with renowned brands amplifies the income potential, and payouts are consistently delivered on a weekly basis without significant delays.",
      benefitsBlockTitleFourth: "Advanced Fraud Prevention Measures:",
      benefitsBlockTextFourth:
        "CryptoTowns platform incorporates an advanced in-house fraud detection system to ensure a secure user experience. To enhance security further, every partner undergoes a human verification process.",
      faqTitle: "FAQ",
      faqQuestion: "How to become a CryptoTown partner?",
      faqAnswear:
        "To get started, just register on our website and start your journey in the world of affiliate marketing.",
      faqQuestionSecond: "How often do payments occur?",
      faqAnswearSecond:
        "Payments are made weekly, providing you with a stable income stream without delays.",
      faqQuestionThird: "How much can I earn with CryptoTown?",
      faqAnswearThird:
        "Your earnings depend on successful sales or leads, and you can receive up to 50% of each transaction.",
      faqQuestionFourth:
        "What is the range of available verticals and offerings?",
      faqAnswearFourth:
        "CryptoTown offers over 3000 offerings across various niches, including unique and well-known verticals.",
      faqQuestionFifth:
        "What are the security measures for partners on the CryptoTown platform?",
      faqAnswearFifth:
        "We provide security through a state-of-the-art fraud detection system and every partner goes through a human verification process.",
      faqQuestionSixth: "Is there support in multiple languages?",
      faqAnswearSixth:
        "Yes, our support is available in 12 languages, ensuring that everyone has their questions answered.",
    },
  };

  let translateButtons = document.querySelectorAll(".switcher-language__item");
  translateButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const lang = button.id;

      let elementsToTranslate = document.querySelectorAll(".lang");
      elementsToTranslate.forEach(function (element) {
        var key = element.getAttribute("key");
        element.textContent = arrLang[lang][key];
      });
    });
  });
}

function validationForm() {
  try {
    const validate = new JustValidate("#form");

    validate.addField(document.querySelector("#name"), [
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
    .addField(document.querySelector("#lastname"), [
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
    .addField(document.querySelector("#email"), [
      {
        rule: "required",
        errorMessage: "Invalid email example email@gmail.com",
      },
      {
        rule: "email",
      },
    ])
    .addField(document.querySelector("input[type='tel"), [
      {
        rule: "required",
        errorMessage: "Invalid this field is empty",
      },
      {
        rule: "integer",
      },
      {
        rule: 'minNumber',
        value: 5,
      },
      {
        rule: 'maxNumber',
        value: 100,
      },
    ]);
  } catch {}
}

function cursor() {
  try {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    console.log(cursorDot);
    console.log(cursorOutline);

    window.addEventListener("mousemove", function (e) {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.style.left = `${posX}px`;
      cursorOutline.style.top = `${posY}px`;

      const hoveredElement = document.elementFromPoint(posX, posY);
    });
  } catch {}
}

const animation = () => {
  const tlHeader = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);


  try {
    const heroImg = document.querySelector(".hero");
    const header = document.querySelector("header");
    const logo = document.querySelector(".header__logo");
    const title = document.querySelector(".hero h1");
    const navLink = document.querySelectorAll(".navbar__items li");
    const langSwitcher = document.querySelector(".switcher-language");
    const headerbutton = document.querySelector('[href="#contact"]');
    const heroList = document.querySelectorAll(".hero__list li");
    const cyberGirl = document.querySelector(".hero__cyber-girl");
    // offers
    const offersSection = document.querySelector(".offers");
    const offersTitle = document.querySelector('.offers__container-title h2');
    const arrowRight = document.querySelector('.offers__arrow-right img');
    const arrowLeft = document.querySelector(".offers__arrow-left img")
    const btnOffers =document.querySelector('.offers__button');
    const textOffers = document.querySelector('.offers__container-title p');
    const buttonOffers = document.querySelector('.offers__list a');
    const bitcoin = document.querySelector('.offers__bitcoin-icon');
    const ethereum = document.querySelector('.offers__ethereum-icon');
    // benefit
    const sectionBenefit = document.querySelector('.benefits');
    const benefitTitle = document.querySelector('.benefits__container-title');
    const benefitItem = document.querySelectorAll('.benefits__item');

    // faq
    const sectionFaq = document.querySelector('.faq');
    const itemFag = document.querySelectorAll('.faq__item-question');
    const cyberBoy = document.querySelector('.faq__cyber-boy');

    //contact
    const contactForm = document.querySelector('.contact');
    const form = document.querySelector('.box');
    const manager = document.querySelector('.contact__cyber-man');








    tlHeader.from(title, {
        opacity: 0,
        y: 100,
        duration: 1.5,
        stagger: 0.1,
      })
      .fromTo(
        header,
        {
          opacity: 0,
          y: 0,
        },
        {
          opacity: 1,
        }
      )
      .from([logo, navLink, langSwitcher], {
        opacity: 0,
        y: 10,
        stagger: 0.1,
      })
      .fromTo(
        headerbutton,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
        }
      )
      .from(heroList, {
        opacity: 0,
        y: 10,
        stagger: 0.1,
        ease: "bounce.out",
      })
      .from(cyberGirl, {
        duration: 1,
        opacity: 0,
        scale: 0.5,
      })
      .to(
        heroImg,
        {
          duration: 4,
          backgroundPosition: "50% 70%",
          ease: "slow(0.7, 0.7, false)",
        },
        1
      );

      const tlAbout = gsap.timeline({
        scrollTrigger: {
          trigger: offersSection,
          start: "top center", 
        }
      });


    gsap.from(arrowRight, {
        duration: 1,
        opacity: 0,
        scrollTrigger: btnOffers,
      });
    gsap.from(arrowLeft,{
        duration: 1,
        opacity: 0,
        scrollTrigger: btnOffers,
      })
    tlAbout.from(textOffers, 0.8, {
      y: 200,
      opacity: 0,
      easy: 'power4.out',
      delayL:1,
      stagger:{
        amount: 0.4
      }
    })
    .from('.offers__list li', {
      opacity: 0,
      y: 10,
      stagger: 0.1,
      ease: "bounce.out",
    })
    .fromTo(buttonOffers,
    {
      opacity: 0,
      y: 10,
    },
    {
      opacity: 1,
      y: 0,
    })
    .from(bitcoin,{
      duration: 1,
      opacity: 0,
    })
    .from(ethereum,{
      duration: 1,
      opacity: 0,
    })

    const tlBenefits = gsap.timeline({
      scrollTrigger: {
        trigger: sectionBenefit, 
        start: "top center", 
        // end: "bottom center",
        // scrub: true,
      }
    });

    tlBenefits.from(benefitItem,{
      opacity: 0,
      y: 10,
      stagger: 0.1,
      duration: 2,
      ease: "bounce.out",
    })

    const tlFaq =gsap.timeline({
      scrollTrigger:{
        trigger: sectionFaq,
        start: "top center", 
      }
    })

    tlFaq.from(cyberBoy, {
      opacity: 0,
      y: 10,
      stagger: 0.1,
      ease: "bounce.out",
    })
    .from(itemFag,{
      opacity: 0,
      y: 10,
      stagger: 0.1,
      duration: 0.5,
      ease: "bounce.out",
    })

    const tlContact = gsap.timeline({
      scrollTrigger: {
        trigger: contactForm,
        start: "top center", 
      }
    });

    tlContact.from(manager,{
      opacity: 0,
      y: 10,
      stagger: 0.1,
      duration: 0.5,
      ease: "bounce.out",
    }).from(form,{
      opacity: 0,
      y: 10,
      stagger: 0.1,
      duration: 0.5,
      ease: "bounce.out",
    })

  } catch {}
};



// cursor();
translator();
validationForm();
preloader();
// swiperSlider();
burgerMenu();
year();
menuLink();
accordionFaq();
changeLanguage();
