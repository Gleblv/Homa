function burgerMenuOverflow(height, isActive) {
  if (isActive) {
    document.querySelector('.footer').style.display = 'none';
    document.querySelector('main').style.height = `${height}px`;
    document.querySelector('main').style.overflow = 'hidden';
    document.querySelector('main').style.visibility = 'hidden';
  } else {
    document.querySelector('.footer').style.display = 'block';
    document.querySelector('main').style.height = 'auto';
    document.querySelector('main').style.overflow = 'visible';
    document.querySelector('main').style.visibility = 'visible';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // переключаение языков
  const rusBtn = document.querySelector('.header__top-btns .rus');
  const enBtn = document.querySelector('.header__top-btns .en');

  enBtn.addEventListener('click', function () {
    rusBtn.classList.remove('active');
    enBtn.classList.add('active');
  });

  rusBtn.addEventListener('click', function () {
    enBtn.classList.remove('active');
    rusBtn.classList.add('active');
  });

  // анимация на Главной

  const gearAnimation = (function () {
    const animation = anime
      .timeline({
        autoplay: false,
        easing: 'linear',
        loop: true,
      })
      .add({
        targets: '#gear',
        rotate: [{ value: 360, duration: 4000 }],
      });

    return animation;
  })();

  const stat = (function () {
    const animation = anime
      .timeline({
        autoplay: false,
        loop: true,
      })
      .add({
        targets: '#stat path:nth-child(1)',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeOutSine',
        duration: 400,
        delay: function (el, i) {
          return i * 250;
        },
      })
      .add({
        targets: '#stat path:nth-child(2)',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeOutSine',
        duration: 400,
        delay: function (el, i) {
          return i * 250;
        },
      })
      .add({
        targets: '#stat path:nth-child(3)',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeOutSine',
        duration: 400,
        delay: function (el, i) {
          return i * 250;
        },
      })
      .add({
        targets: '#stat path:nth-child(4)',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeOutSine',
        duration: 400,
        delay: function (el, i) {
          return i * 250;
        },
      })
      .add({
        targets: '#stat path:nth-child(5)',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeOutSine',
        duration: 400,
        delay: function (el, i) {
          return i * 250;
        },
      })
      .add({
        targets: '#stat path:nth-child(6)',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeOutSine',
        duration: 400,
        delay: function (el, i) {
          return i * 250;
        },
      })
      .add({
        targets: '#stat path:nth-child(7)',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeOutSine',
        duration: 400,
        delay: function (el, i) {
          return i * 250;
        },
      })
      .add({
        duration: 2000,
      });

    animation.seek(4790);

    return animation;
  })();

  const shieldAnimation = (function () {
    const animation = anime
      .timeline({
        autoplay: false,
        loop: true,
        easing: 'easeOutSine',
      })
      .add({
        targets: '#shield span',
        delay: 1000,
        loop: true,
        translateY: [
          { value: '100%', duration: 0 },
          { value: '0%', duration: 700 },
          { value: '-100%', duration: 700 },
        ],
        rotate: [{ value: 30, duration: 0 }],
      });

    return animation;
  })();

  const bubble1 = (function () {
    const animation = anime
      .timeline({
        autoplay: false,
        easing: 'easeOutSine',
        loop: true,
        delay: 700,
      })
      .add({
        targets: '#bubbles svg:nth-child(1)',
        translateY: [
          { value: 0, duration: 0 },
          { value: rem(-2.2), duration: 800 },
        ],
      });

    return animation;
  })();

  const bubble2 = (function () {
    const animation = anime
      .timeline({
        autoplay: false,
        easing: 'easeOutSine',
        loop: true,
        delay: 700,
      })
      .add({
        targets: '#bubbles svg:nth-child(2)',
        loop: true,
        translateY: [
          { value: 0, duration: 0 },
          { value: rem(-1.8), duration: 1200 },
        ],
      });

    return animation;
  })();

  $('.advantages__list-item.gear').hover(
    function () {
      gearAnimation.play();
    },
    function () {
      gearAnimation.pause();
    },
  );

  $('.advantages__list-item.stat').hover(
    function () {
      stat.play();
    },
    function () {
      stat.pause();
    },
  );

  $('.advantages__list-item.bubbles').hover(
    function () {
      shieldAnimation.play();
      bubble1.play();
      bubble2.play();
    },
    function () {
      shieldAnimation.pause();
      bubble1.pause();
      bubble2.pause();
    },
  );

  // применяем к изображениям размеры из админки

  if (document.querySelector('img')) {
    const images = document.querySelectorAll(
      '.article__right *:not(.project-page-main__right-block) img, .project-page-main__right *:not(.project-page-main__right-block) img',
    );

    images.forEach((img) => {
      let imgAdminWidth = img.getAttribute('width'),
        imgAdminHeight = img.getAttribute('height');

      if (imgAdminHeight && imgAdminWidth) {
        img.style.width = `${
          window.screen.width >= 768 ? imgAdminWidth / 10 : imgAdminWidth / 5
        }rem`;
        img.style.height = `${
          window.screen.width >= 768 ? imgAdminHeight / 10 : imgAdminHeight / 5
        }rem`;

        img.style.maxWidth = '100%';
      }
    });
  }

  // бургер меню в хеадере в мобилке

  if (window.screen.width <= 768) {
    const openBurgerMenu = document.querySelector('.header__top-burger'),
      burgerMenu = document.querySelector('.header__menu'),
      closeBurgerBtn = document.querySelector('.header__menu-close-burger'),
      header = document.querySelector('.header');

    openBurgerMenu.addEventListener('click', () => {
      burgerMenu.classList.add('active');
      console.log(burgerMenu.scrollHeight);
      burgerMenuOverflow(burgerMenu.scrollHeight - header.scrollHeight, true);
    });

    closeBurgerBtn.addEventListener('click', () => {
      burgerMenu.classList.remove('active');
      burgerMenuOverflow(burgerMenu.scrollHeight - header.scrollHeight, false);
    });

    // ============================================================================

    const list1Btn = document.querySelector('.header__menu-list1-heading');
    const list2Btn = document.querySelector('.header__menu-list2-heading');
    const list3Btn = document.querySelector('.header__menu-list3-heading');

    list1Btn.addEventListener('click', function () {
      list2Btn.classList.remove('active');
      list3Btn.classList.remove('active');
      list2Btn.nextElementSibling.style.maxHeight = null;
      list3Btn.nextElementSibling.style.maxHeight = null;
      list1Btn.classList.toggle('active');
      let content = list1Btn.nextElementSibling;
      if (content.style.maxHeight) {
        content.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        content.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 20 + 'px';
      }
    });

    list2Btn.addEventListener('click', function () {
      list1Btn.classList.remove('active');
      list3Btn.classList.remove('active');
      list1Btn.nextElementSibling.style.maxHeight = null;
      list3Btn.nextElementSibling.style.maxHeight = null;
      list2Btn.classList.toggle('active');
      let content = list2Btn.nextElementSibling;
      if (content.style.maxHeight) {
        content.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        content.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 20 + 'px';
      }
    });

    list3Btn.addEventListener('click', function () {
      list1Btn.classList.remove('active');
      list2Btn.classList.remove('active');
      list1Btn.nextElementSibling.style.maxHeight = null;
      list2Btn.nextElementSibling.style.maxHeight = null;
      list3Btn.classList.toggle('active');
      let content = list3Btn.nextElementSibling;
      if (content.style.maxHeight) {
        content.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        content.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 20 + 'px';
      }
    });
  }

  // раскрывающийся список в футере в мобилке

  if (window.innerWidth <= 768) {
    const list1Btn = document.querySelector('.footer__list1-heading');
    const list2Btn = document.querySelector('.footer__list2-heading');
    const list3Btn = document.querySelector('.footer__list3-heading');

    list1Btn.addEventListener('click', function () {
      list2Btn.classList.remove('active');
      list3Btn.classList.remove('active');
      list2Btn.nextElementSibling.style.maxHeight = null;
      list3Btn.nextElementSibling.style.maxHeight = null;
      list1Btn.classList.toggle('active');
      let content = list1Btn.nextElementSibling;
      if (content.style.maxHeight) {
        content.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        content.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 20 + 'px';
      }
    });

    list2Btn.addEventListener('click', function () {
      list1Btn.classList.remove('active');
      list3Btn.classList.remove('active');
      list1Btn.nextElementSibling.style.maxHeight = null;
      list3Btn.nextElementSibling.style.maxHeight = null;
      list2Btn.classList.toggle('active');
      let content = list2Btn.nextElementSibling;
      if (content.style.maxHeight) {
        content.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        content.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 20 + 'px';
      }
    });

    list3Btn.addEventListener('click', function () {
      list1Btn.classList.remove('active');
      list2Btn.classList.remove('active');
      list1Btn.nextElementSibling.style.maxHeight = null;
      list2Btn.nextElementSibling.style.maxHeight = null;
      list3Btn.classList.toggle('active');
      let content = list3Btn.nextElementSibling;
      if (content.style.maxHeight) {
        content.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        content.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 20 + 'px';
      }
    });
  }

  // селект на странице ...
  if (document.querySelector('.sorting-select')) {
    const sortingSelect = new Choices('.sorting-select', {
      searchEnabled: false,
      shouldSort: false,
      itemSelectText: '',
    });
  }

  // карта на странице Контакты
  if (document.querySelector('#map')) {
    ymaps.ready(init);
    function init() {
      const myMap = new ymaps.Map('map', {
        center: [55.678402, 37.853416],
        zoom: 14,
      });

      const dzerzhinskMap = new ymaps.Map('dzerzhinsk-map', {
        center: [56.290484, 43.603766],
        zoom: 14,
      });

      const homaPlacemark = new ymaps.Placemark(
        [55.678402, 37.853416],
        {},
        {
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'images/svg/homaPoint.svg',
          // Размеры метки.
          iconImageSize: [rem(13.2), rem(8.5)],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [rem(-5), rem(-4)],
        },
      );

      myMap.geoObjects.add(homaPlacemark);

      const dzerzhinskPlacemark = new ymaps.Placemark([56.290484, 43.603766], null, {
        preset: 'islands#redDotIcon',
      });
      dzerzhinskMap.geoObjects.add(dzerzhinskPlacemark);
    }
  }

  // переключалка складов на странице Контакты

  const tabsBtns = document.querySelectorAll('.contacts-hero__left-list__item button');
  const main = document.querySelectorAll(`[data-target="main"]`);
  const dzerzhinsk = document.querySelectorAll(`[data-target="dzerzhinsk"]`);

  tabsBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const path = e.currentTarget.parentElement.dataset.path;

      tabsBtns.forEach(function (tab) {
        tab.parentElement.classList.remove('active');
      });

      tabsBtns.forEach((tabBtn) => {
        if (tabBtn.parentElement.dataset.path === path) {
          tabBtn.parentElement.classList.add('active');
        }
      });

      if (path === 'main') {
        dzerzhinsk.forEach((element) => {
          element.classList.remove('active');
        });
        main.forEach((element) => {
          element.classList.add('active');
        });
      } else if (path === 'dzerzhinsk') {
        main.forEach((element) => {
          element.classList.remove('active');
        });
        dzerzhinsk.forEach((element) => {
          element.classList.add('active');
        });
      }
    });
  });

  // плавный скролл на странице Пресс-центр

  if (document.querySelector('.press-main')) {
    document.querySelectorAll('a[href^="#"').forEach((link) => {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        // const topOffset = document.querySelector('.scrollto').offsetHeight;
        const topOffset = 0; // если не нужен отступ сверху
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth',
        });
      });
    });
  }

  // модалка отклика на вакансии (страницы Вакансия и Страница вакансии)

  if (document.querySelector('.modal-response')) {
    const modalResponse = document.querySelector('.modal-response');

    const responseVacancyBtn = document.querySelector('.vacancy-page__main-right__btn');

    responseVacancyBtn.addEventListener('click', function () {
      modalResponse.classList.add('active');
      document.body.classList.add('lock');
    });

    const modalCloseBtn = document.querySelector('.modal-response .modal__close-btn');
    modalCloseBtn.addEventListener('click', function () {
      modalResponse.classList.remove('active');
      document.body.classList.remove('lock');
    });

    const inputFile = document.querySelector('#resume-file');
    const label = inputFile.nextElementSibling;
    const labelVal = label.innerHTML;

    inputFile.addEventListener('change', function (e) {
      var fileName = '';
      if (this.files && this.files.length > 1)
        fileName = (this.getAttribute('data-multiple-caption') || '').replace(
          '{count}',
          this.files.length,
        );
      else {
        console.log(e);
        fileName = e.target.value.split('\\').pop();
      }

      if (fileName) label.querySelector('span').innerHTML = fileName;
      else label.innerHTML = labelVal;
    });
  }

  // модалка об ошибке нас странице Чем приклеить ПВХ плитку

  if (document.querySelector('.modal-mistake')) {
    const modalResponse = document.querySelector('.modal-mistake');

    const mistakeBtn = document.querySelector('.qa__btn-error');

    mistakeBtn.addEventListener('click', function () {
      modalResponse.classList.add('active');
      document.body.classList.add('lock');
    });

    const modalCloseBtn = document.querySelector('.modal-mistake .modal__close-btn');
    modalCloseBtn.addEventListener('click', function () {
      modalResponse.classList.remove('active');
      document.body.classList.remove('lock');
    });
  }

  // модалка заявку не техподдержку на Главной
  if (document.querySelector('.modal-techsupport-main')) {
    const modalRequest = document.querySelector('.modal-techsupport-main');

    const requestBtn = document.querySelector('.support__left-links__request');

    requestBtn.addEventListener('click', function () {
      modalRequest.classList.add('active');
      document.body.classList.add('lock');
    });

    const modalCloseBtn = document.querySelector('.modal-techsupport-main .modal__close-btn');
    modalCloseBtn.addEventListener('click', function () {
      modalRequest.classList.remove('active');
      document.body.classList.remove('lock');
    });
  }

  // модалка запроса тех описания на Странице товара
  if (document.querySelector('.modal-description')) {
    const modalDescription = document.querySelector('.modal-description');

    // десктоп
    const descriptionBtn = document.querySelector('.product__right-card__right-actions-email');

    descriptionBtn.addEventListener('click', function () {
      modalDescription.classList.add('active');
      document.body.classList.add('lock');
    });

    const modalCloseBtn = document.querySelector('.modal-description .modal__close-btn');
    modalCloseBtn.addEventListener('click', function () {
      modalDescription.classList.remove('active');
      document.body.classList.remove('lock');
    });

    // мобилка

    const descriptionMobileBtn = document.querySelector('.product__right-card__left-actions-email');

    descriptionMobileBtn.addEventListener('click', function () {
      modalDescription.classList.add('active');
      document.body.classList.add('lock');
    });
  }

  // модалка задать вопрос на Странице товара ()
  if (document.querySelector('.modal-question')) {
    // десктоп
    const modalQuestion = document.querySelector('.modal-question');

    const questionBtn = document.querySelector('.product__right-card__right-actions-question');

    questionBtn.addEventListener('click', function () {
      modalQuestion.classList.add('active');
      document.body.classList.add('lock');
    });

    const modalCloseBtn = document.querySelector('.modal-question .modal__close-btn');
    modalCloseBtn.addEventListener('click', function () {
      modalQuestion.classList.remove('active');
      document.body.classList.remove('lock');
    });

    // мобилка
    const questionMobileBtn = document.querySelector('.product__right-card__left-actions-question');
    questionMobileBtn.addEventListener('click', function () {
      modalQuestion.classList.add('active');
      document.body.classList.add('lock');
    });
  }

  // Модалка "Заказать звонок" в хеадере

  if (document.querySelector('.modal-call')) {
    const openModalBtn = document.querySelector('.header__top-call'),
      modal = document.querySelector('.modal-call'),
      closeModalBtn = modal.querySelector('.modal__close-btn');

    openModalBtn.addEventListener('click', () => {
      modal.classList.add('active');
    });

    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  // Модалка на странице тех поддержки

  if (document.querySelector('.modal-techsupport')) {
    const openModalBtn = document.querySelector('.techsupport-hero__right__links-email'),
      modal = document.querySelector('.modal-techsupport'),
      closeModalBtn = modal.querySelector('.modal__close-btn');

    openModalBtn.addEventListener('click', () => {
      modal.classList.add('active');
    });

    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  // Модальные окна на странице контактов

  if (document.querySelector('.contacts-main')) {
    const questionModal = document.querySelector('.modal-question-contacts'),
      callModal = document.querySelector('.modal-call-contacts'),
      feedbackModal = document.querySelector('.modal-feedback-contacts');

    const openQuestionModal = document.querySelector('.contacts-main__open-question'),
      openCallModal = document.querySelector('.contacts-main__open-call'),
      openFeedbackModal = document.querySelector('.contacts-main__open-feedback');

    const closeQuestionModal = questionModal.querySelector('.modal__close-btn'),
      closeCallModal = callModal.querySelector('.modal__close-btn'),
      closeFeedbackModal = feedbackModal.querySelector('.modal__close-btn');

    openQuestionModal.addEventListener('click', () => {
      questionModal.classList.add('active');
    });

    openCallModal.addEventListener('click', () => {
      console.log('2');
      callModal.classList.add('active');
    });

    openFeedbackModal.addEventListener('click', () => {
      feedbackModal.classList.add('active');
    });

    closeQuestionModal.addEventListener('click', () => {
      questionModal.classList.remove('active');
    });

    closeCallModal.addEventListener('click', () => {
      callModal.classList.remove('active');
    });

    closeFeedbackModal.addEventListener('click', () => {
      feedbackModal.classList.remove('active');
    });
  }

  // Модальное окно на странице пресс-центра

  if (document.querySelector('.modal-question-experts')) {
    const openModalBtns = document.querySelectorAll('.press-main__experts-slide__link'),
      modal = document.querySelector('.modal-question-experts'),
      closeModalBtn = modal.querySelector('.modal__close-btn');

    openModalBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        modal.classList.add('active');
      });
    });

    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  // Модальное окно на странице вакансий

  if (document.querySelector('.modal-response-detail')) {
    const openModalBtns = document.querySelectorAll('.vacancies-main__right-list__item-respond'),
      modal = document.querySelector('.modal-response-detail'),
      closeModalBtn = modal.querySelector('.modal__close-btn');

    openModalBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        modal.classList.add('active');
      });
    });

    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    // ------------------------------------------------

    const inputFile = document.querySelector('#resume-file');
    const label = inputFile.nextElementSibling;
    const labelVal = label.innerHTML;

    inputFile.addEventListener('change', function (e) {
      var fileName = '';
      if (this.files && this.files.length > 1)
        fileName = (this.getAttribute('data-multiple-caption') || '').replace(
          '{count}',
          this.files.length,
        );
      else {
        console.log(e);
        fileName = e.target.value.split('\\').pop();
      }

      if (fileName) label.querySelector('span').innerHTML = fileName;
      else label.innerHTML = labelVal;
    });
  }

  // Модальное окно на странице тех. поддержки

  if (document.querySelector('.modal-techsupport-page')) {
    const openModalBtns = document.querySelectorAll('.techsupport-main__block-left__btn'),
      modal = document.querySelector('.modal-techsupport-page'),
      closeModalBtn = modal.querySelector('.modal__close-btn');

    openModalBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        modal.classList.add('active');
      });
    });

    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  // Выпадающее меню в модальных окнах

  if (document.querySelector('.modal__form-input_menu')) {
    const inputContainers = document.querySelectorAll('.modal__form-input_menu');

    inputContainers.forEach((container) => {
      let input = container.querySelector('input'),
        menu = container.querySelector('.modal__menu');

      input.addEventListener('click', () => {
        container.classList.toggle('active');
      });

      menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target.tagName == 'LI') {
          input.value = target.textContent;
          container.classList.remove('active');
        }
      });
    });
  }

  // обрезать кол-во символов на странице Поиск в результатах

  if (document.querySelector('.search-main__list-item__description')) {
    const descriptions = document.querySelectorAll('.search-main__list-item__description');
    for (let i = 0; i < descriptions.length; i++) {
      if (descriptions[i].innerText.length > 228) {
        descriptions[i].innerText = descriptions[i].innerText.substring(0, 228);
        descriptions[i].innerText += '...';
      }
    }
  }

  // обрезать кол-во слов в моб версии на странице Отзывы

  if (document.querySelector('.reviews-main__list-item__description') && window.innerWidth <= 768) {
    const reviews = document.querySelectorAll('.reviews-main__list-item__description');
    for (let i = 0; i < reviews.length; i++) {
      let count = 0;
      const splittedReview = reviews[i].innerText.split(' ');
      for (let i = 0; i < splittedReview.length; i++) {
        if (splittedReview[i] != '') count += 1;
      }
      if (count > 9) {
        reviews[i].innerText = reviews[i].innerText.split(splittedReview[9])[0];
      }
    }
  }

  // модалка с фотками

  if (document.querySelector('.project-page-main__right-block__img')) {
    const photoModal = document.querySelector('.popup__photo');
    const photoModalClose = photoModal.querySelector('.popup__close');

    photoModalClose.addEventListener('click', function () {
      photoModal.classList.remove('active');
      document.body.classList.remove('lock');
    });

    const swiperPhoto = photoModal.querySelector('.popup__photo-swiper');

    const projectPhotos = document.querySelectorAll('.project-page-main__right-block__img');
    projectPhotos.forEach((photo) => {
      photo.addEventListener('click', function (e) {
        const number = e.target.dataset.number;
        console.log(swiperPhoto.swiper);
        swiperPhoto.swiper.slideTo(number);
        photoModal.classList.add('active');
        document.body.classList.add('lock');
      });
    });
  }

  // Проверка есть ли в категориях вложенные списки

  if (document.querySelector('.catalog__categories-accordion.accordion')) {
    // Массив из заголовков на всех уровнях вложенности

    const accItems = [
      ...document.querySelectorAll('.catalog__categories-accordion__item-head'),
      ...document.querySelectorAll('.catalog__categories-accordion__item-sublist-item-head'),
      ...document.querySelectorAll(
        '.catalog__categories-accordion__item-sublist-item-sublist-item-head',
      ),
      ...document.querySelectorAll(
        '.catalog__categories-accordion__item-sublist-item-sublist-item-sublist-item-head',
      ),
    ];

    accItems.forEach((item) => {
      if (!item.nextElementSibling) {
        item.querySelector('button').style.display = 'none';
      }
    });
  }

  // Открытие модалки с изображением

  if (document.querySelector('.press-modal')) {
    const initialImages = document.querySelectorAll('.press-main__photo-slide__img'),
      modalImg = document.querySelector('.press-modal__content img'),
      modal = document.querySelector('.press-modal'),
      closeModalBtn = modal.querySelector('.press-modal__close');

    initialImages.forEach((img) => {
      img.addEventListener('click', (e) => {
        let target = e.target;
        let imgSrc = target.getAttribute('src');

        modal.classList.add('active');

        modalImg.setAttribute('src', imgSrc);
      });
    });

    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  // Открытие модалки с изображением на странице товара

  if (document.querySelector('.product-modal')) {
    const initialImg = document.querySelector('.product__right-card__left-container img'),
      modalImg = document.querySelector('.product-modal__content img'),
      modal = document.querySelector('.product-modal'),
      closeModalBtn = modal.querySelector('.product-modal__close');

    initialImg.addEventListener('click', () => {
      let imgSrc = initialImg.getAttribute('src');

      modalImg.setAttribute('src', imgSrc);

      modal.classList.add('active');
    });

    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  // Запуск видео для Safari

  if (
    document.querySelector('.intro__swiper-slide__top-right-video') &&
    navigator.userAgent.indexOf('Safari') > -1
  ) {
    const videos = document.querySelectorAll('.intro__swiper-slide__top-right-video');

    videos.forEach((video) => {
      video.play();
    });
  }
});
