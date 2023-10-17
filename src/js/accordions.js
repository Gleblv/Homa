jQuery(document).ready(function ($) {
   $(".accordion").accordionjs({
      activeIndex: false,
      closeAble: true,
      closeOther: true,
      slideSpeed: 250,
   });

   $(".staff-accordion").accordionjs({
      activeIndex: 0,
      closeAble: true,
      closeOther: true,
      slideSpeed: 250,
   });
});
