// Пересчет rem в px для swiper
const rem = function (rem) {
   if ($(window).width() > 768) {
      return 0.005208335 * $(window).width() * rem;
   } else {
      // где 375 это ширина моб версии макета
      return (100 / 375) * (0.1 * $(window).width()) * rem;
   }
};

const getTwoDigitNumber = function (number) {
   if (number < 10) return String("0" + number);
   else return String(number);
};

const fraction = document.querySelector("#intro__swiper-fraction");

const introSwiper = new Swiper(".intro__swiper", {
   direction: "horizontal",
   // loop: true,
   speed: 500,
   allowTouchMove: false,
   slidesPerView: "auto",

   navigation: {
      nextEl: ".intro__swiper-next",
      prevEl: ".intro__swiper-prev",
   },

   pagination: {
      el: ".intro__swiper-pagination",
   },
   breakpoints: {
      320: {
         pagination: {
            type: "custom",
            renderCustom: function (swiper, current, total) {
               return `<span class="current">${getTwoDigitNumber(
                  current
               )}</span>`;
            },
         },
      },
      769: {
         pagination: {
            renderBullet: function (index, className) {
               if (index < 10) {
                  return (
                     '<span class="' +
                     className +
                     '">' +
                     "0" +
                     (index + 1) +
                     "</span>"
                  );
               } else {
                  return (
                     '<span class="' +
                     className +
                     '">' +
                     (index + 1) +
                     "</span>"
                  );
               }
            },
         },
      },
   },
   on: {
      slideChange: () => {
         fraction.textContent = `${swiper.realIndex + 1} / ${slideCount}`;
      },
   },
});

const swiperNews = new Swiper(".swiper__news", {
   direction: "horizontal",
   speed: 500,
   allowTouchMove: false,
   navigation: {
      nextEl: ".swiper__news-controls__next",
      prevEl: ".swiper__news-controls__prev",
   },

   pagination: {
      el: ".swiper__news-controls__pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
         return `<span class="current">${getTwoDigitNumber(
            current
         )}</span><span class="total">${getTwoDigitNumber(total)}</span>`;
      },
   },
   breakpoints: {
      320: {
         slidesPerView: 2,
         spaceBetween: rem(2.5),
         slidesPerGroup: 2,
      },
      769: {
         slidesPerView: 4,
         spaceBetween: rem(3.3),
         slidesPerGroup: 4,
      },
   },
});

const swiperRecommendations = new Swiper(".swiper__recommendations", {
   direction: "horizontal",
   speed: 500,
   allowTouchMove: false,

   navigation: {
      nextEl: ".swiper__recommendations-controls__next",
      prevEl: ".swiper__recommendations-controls__prev",
   },

   pagination: {
      el: ".swiper__recommendations-controls__pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
         return `<span class="current">${getTwoDigitNumber(
            current
         )}</span><span class="total">${getTwoDigitNumber(total)}</span>`;
      },
   },
   breakpoints: {
      320: {
         slidesPerView: 2,
         spaceBetween: rem(3),
         slidesPerGroup: 2,
      },
      769: {
         slidesPerView: 4,
         slidesPerGroup: 1,
         spaceBetween: 47,
      },
      1201: {
         slidesPerView: "auto",
         spaceBetween: 0,
         slidesPerGroup: 4,
      },
   },
});

const swiperReviews = new Swiper(".swiper__reviews", {
   direction: "horizontal",
   speed: 500,
   allowTouchMove: false,
   loop: false,

   navigation: {
      nextEl: ".swiper__reviews-controls__next",
      prevEl: ".swiper__reviews-controls__prev",
   },

   pagination: {
      el: ".swiper__reviews-controls__pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
         return `<span class="current">${getTwoDigitNumber(
            current
         )}</span><span class="total">${getTwoDigitNumber(total)}</span>`;
      },
   },

   breakpoints: {
      320: {
         slidesPerView: 1,
         slidesPerColumn: 1,
         spaceBetween: rem(4),
         slidesPerGroup: 1,
      },
      769: {
         slidesPerView: 2,
         slidesPerColumn: 1,
         spaceBetween: rem(3.3),
         slidesPerGroup: 2,
      },
   },
});

const swiperVideo = new Swiper(".swiper__video", {
   direction: "horizontal",
   speed: 500,
   allowTouchMove: false,
   loop: false,

   navigation: {
      nextEl: ".swiper__video-controls__next",
      prevEl: ".swiper__video-controls__prev",
   },

   pagination: {
      el: ".swiper__video-controls__pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
         return `<span class="current">${getTwoDigitNumber(
            current
         )}</span><span class="total">${getTwoDigitNumber(total)}</span>`;
      },
   },

   breakpoints: {
      320: {
         slidesPerView: 1,
         slidesPerColumn: 2,
         spaceBetween: rem(4),
         slidesPerGroup: 1,
      },
      769: {
         slidesPerView: 4,
         slidesPerColumn: 1,
         spaceBetween: rem(3.3),
         slidesPerGroup: 4,
      },
   },
});

const swiperPolymer = new Swiper(".swiper__polymer", {
   direction: "horizontal",
   speed: 500,
   allowTouchMove: false,
   loop: false,
   slidesPerView: 1,

   navigation: {
      nextEl: ".swiper__polymer-controls__next",
      prevEl: ".swiper__polymer-controls__prev",
   },

   pagination: {
      el: ".swiper__polymer-controls__pagination",
      renderBullet: function (index, className) {
         return `<span class="${className}">${getTwoDigitNumber(
            index + 1
         )}</span>`;
      },
   },

   on: {
      slideChange: function (swiper) {
         if ((swiper.activeIndex + 1) % 2 == 0) {
            document
               .querySelector(".swiper__polymer-controls__prev.mobile")
               .classList.add("even");
            document
               .querySelector(".swiper__polymer-controls__next.mobile")
               .classList.add("even");
            document
               .querySelector(".swiper__polymer-controls__pagination")
               .classList.add("even");
         } else {
            document
               .querySelector(".swiper__polymer-controls__prev.mobile")
               .classList.remove("even");
            document
               .querySelector(".swiper__polymer-controls__next.mobile")
               .classList.remove("even");
            document
               .querySelector(".swiper__polymer-controls__pagination")
               .classList.remove("even");
         }
      },
   },
});

const swiperSame = new Swiper(".swiper__same", {
   direction: "horizontal",
   speed: 500,
   allowTouchMove: false,
   loop: false,
   spaceBetween: rem(4),
   slidesPerView: "auto",

   navigation: {
      nextEl: ".swiper__same-next",
      prevEl: ".swiper__same-prev",
   },

   pagination: {
      el: ".swiper__same-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
         return `<span class="current">${getTwoDigitNumber(
            current
         )}</span><span class="total">${getTwoDigitNumber(total)}</span>`;
      },
   },

   breakpoints: {
      320: {
         slidesPerView: 1,
         slidesPerGroup: 1,
      },
      769: {
         slidesPerView: "auto",
         slidesPerGroup: 3,
      },
   },
});

const swiperRelated = new Swiper(".swiper__related", {
   direction: "horizontal",
   speed: 500,
   allowTouchMove: false,
   loop: false,
   spaceBetween: rem(4),
   slidesPerView: "auto",

   navigation: {
      nextEl: ".swiper__related-next",
      prevEl: ".swiper__related-prev",
   },

   pagination: {
      el: ".swiper__related-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
         return `<span class="current">${getTwoDigitNumber(
            current
         )}</span><span class="total">${getTwoDigitNumber(total)}</span>`;
      },
   },

   breakpoints: {
      320: {
         slidesPerView: 1,
         slidesPerGroup: 1,
      },
      769: {
         slidesPerView: "auto",
         slidesPerGroup: 3,
      },
   },
});

const swiperProductRecommendations = new Swiper(
   ".swiper__product-recommendations",
   {
      direction: "horizontal",
      speed: 500,
      allowTouchMove: false,
      loop: false,

      navigation: {
         nextEl: ".swiper__product-recommendations-next",
         prevEl: ".swiper__product-recommendations-prev",
      },

      pagination: {
         el: ".swiper__product-recommendations-pagination",
         type: "custom",
         renderCustom: function (swiper, current, total) {
            return `<span class="current">${getTwoDigitNumber(
               current
            )}</span><span class="total">${getTwoDigitNumber(total)}</span>`;
         },
      },

      breakpoints: {
         320: {
            slidesPerView: 2,
            spaceBetween: rem(3),
            slidesPerGroup: 2,
         },
         769: {
            slidesPerView: "auto",
            spaceBetween: rem(3.2),
            slidesPerGroup: 3,
         },
      },
   }
);

const staff = document.querySelectorAll(".swiper__staff");
staff.forEach((swiperStaff) => {
   new Swiper(swiperStaff, {
      direction: "horizontal",
      speed: 500,
      loop: false,
      slidesPerGroup: 3,

      navigation: {
         nextEl: ".swiper__staff-next",
         prevEl: ".swiper__staff-prev",
      },

      pagination: {
         el: ".swiper__staff-pagination",
         type: "custom",
         renderCustom: function (swiper, current, total) {
            return `<span class="current">${getTwoDigitNumber(
               current
            )}</span><span class="total">${getTwoDigitNumber(total)}</span>`;
         },
      },

      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         769: {
            slidesPerView: "auto",
            spaceBetween: rem(4),
         },
      },
   });
});

// Пресс-центр

const swiperExperts = new Swiper(".press-main__experts", {
   direction: "horizontal",
   speed: 500,
   allowTouchMove: false,
   loop: false,
   spaceBetween: rem(4),

   navigation: {
      nextEl: ".press-main__experts-next",
      prevEl: ".press-main__experts-prev",
   },

   pagination: {
      el: ".press-main__experts-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
         return `<span class="current">${getTwoDigitNumber(
            current
         )}</span><span class="total">${getTwoDigitNumber(total)}</span>`;
      },
   },

   breakpoints: {
      320: {
         slidesPerView: 1,
         slidesPerGroup: 1,
      },
      769: {
         slidesPerView: "auto",
         slidesPerGroup: 3,
      },
   },
});

const swiperMedia = new Swiper(".press-main__media", {
   direction: "horizontal",
   speed: 500,
   allowTouchMove: false,
   loop: false,
   spaceBetween: rem(4),

   navigation: {
      nextEl: ".press-main__media-next",
      prevEl: ".press-main__media-prev",
   },

   pagination: {
      el: ".press-main__media-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
         return `<span class="current">${getTwoDigitNumber(
            current
         )}</span><span class="total">${getTwoDigitNumber(total)}</span>`;
      },
   },

   breakpoints: {
      320: {
         slidesPerView: 1,
         slidesPerGroup: 1,
      },
      769: {
         slidesPerView: "auto",
         slidesPerGroup: 3,
      },
   },
});

const swiperPhoto = new Swiper(".press-main__photo", {
   direction: "horizontal",
   speed: 500,
   allowTouchMove: false,
   loop: false,

   navigation: {
      nextEl: ".press-main__photo-next",
      prevEl: ".press-main__photo-prev",
   },

   pagination: {
      el: ".press-main__photo-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
         return `<span class="current">${getTwoDigitNumber(
            current
         )}</span><span class="total">${getTwoDigitNumber(total)}</span>`;
      },
   },

   breakpoints: {
      320: {
         slidesPerView: 2,
         spaceBetween: rem(3),
         slidesPerGroup: 2,
      },
      769: {
         slidesPerView: "auto",
         spaceBetween: rem(4),
         slidesPerGroup: 3,
      },
   },
});

const swiperAbout = new Swiper(".press-main__about", {
   direction: "horizontal",
   speed: 500,
   allowTouchMove: false,
   loop: false,

   navigation: {
      nextEl: ".press-main__about-next",
      prevEl: ".press-main__about-prev",
   },

   pagination: {
      el: ".press-main__about-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
         return `<span class="current">${getTwoDigitNumber(
            current
         )}</span><span class="total">${getTwoDigitNumber(total)}</span>`;
      },
   },

   breakpoints: {
      320: {
         slidesPerView: 1,
         slidesPerColumn: 1,
         spaceBetween: rem(3),
      },
      769: {
         slidesPerView: "auto",
         slidesPerColumn: 5,
      },
   },
});

// слайдеры на странице Проекты

const swiperEvents = new Swiper(".projects-main__events", {
   direction: "horizontal",
   speed: 500,
   allowTouchMove: false,
   loop: false,
   spaceBetween: rem(4.1),

   navigation: {
      nextEl: ".projects-main__events-next",
      prevEl: ".projects-main__events-prev",
   },

   pagination: {
      el: ".projects-main__events-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
         return `<span class="current">${getTwoDigitNumber(
            current
         )}</span><span class="total">${getTwoDigitNumber(total)}</span>`;
      },
   },

   breakpoints: {
      320: {
         slidesPerView: 1,
         slidesPerGroup: 1,
      },
      769: {
         slidesPerView: "auto",
         slidesPerGroup: 3,
      },
   },
});

const swiperGlue = new Swiper(".projects-main__glue", {
   direction: "horizontal",
   speed: 500,
   allowTouchMove: false,
   loop: false,
   spaceBetween: rem(4.1),

   navigation: {
      nextEl: ".projects-main__glue-next",
      prevEl: ".projects-main__glue-prev",
   },

   pagination: {
      el: ".projects-main__glue-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
         return `<span class="current">${getTwoDigitNumber(
            current
         )}</span><span class="total">${getTwoDigitNumber(total)}</span>`;
      },
   },

   breakpoints: {
      320: {
         slidesPerView: 1,
         slidesPerGroup: 1,
      },
      769: {
         slidesPerView: "auto",
         slidesPerGroup: 3,
      },
   },
});

const swiperObjects = new Swiper(".projects-main__objects", {
   direction: "horizontal",
   speed: 500,
   allowTouchMove: false,
   loop: false,
   spaceBetween: rem(4.1),

   navigation: {
      nextEl: ".projects-main__objects-next",
      prevEl: ".projects-main__objects-prev",
   },

   pagination: {
      el: ".projects-main__objects-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
         return `<span class="current">${getTwoDigitNumber(
            current
         )}</span><span class="total">${getTwoDigitNumber(total)}</span>`;
      },
   },

   breakpoints: {
      320: {
         slidesPerView: 1,
         slidesPerGroup: 1,
      },
      769: {
         slidesPerView: "auto",
         slidesPerGroup: 3,
      },
   },
});

const swiperHomakoll = new Swiper(".projects-main__homakoll", {
   direction: "horizontal",
   speed: 500,
   allowTouchMove: false,
   loop: false,
   spaceBetween: rem(4.1),

   navigation: {
      nextEl: ".projects-main__homakoll-next",
      prevEl: ".projects-main__homakoll-prev",
   },

   pagination: {
      el: ".projects-main__homakoll-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
         return `<span class="current">${getTwoDigitNumber(
            current
         )}</span><span class="total">${getTwoDigitNumber(total)}</span>`;
      },
   },

   breakpoints: {
      320: {
         slidesPerView: 1,
         slidesPerGroup: 1,
      },
      769: {
         slidesPerView: "auto",
         slidesPerGroup: 3,
      },
   },
});

const swiperModal = new Swiper(".popup__photo-swiper", {
   direction: "horizontal",
   speed: 500,
   allowTouchMove: false,
   loop: false,
   spaceBetween: rem(4.1),
   slidesPerView: 1,

   navigation: {
      nextEl: ".popup__photo-swiper__controllers .swiper__controls__next",
      prevEl: ".popup__photo-swiper__controllers .swiper__controls__prev",
   },

   pagination: {
      el: ".popup__photo-swiper__controllers .swiper__controls__pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
         return `<span class="current">${getTwoDigitNumber(
            current
         )}</span><span class="total">${getTwoDigitNumber(total)}</span>`;
      },
   },
});
