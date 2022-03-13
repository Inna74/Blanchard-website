document.addEventListener('DOMContentLoaded', () => {

  const dropdownSubmenu = document.querySelectorAll('.dropdown');
  const searchBtn = document.querySelector('.header__top__search-btn');
  const searchBlock = document.querySelector('.header__top__search-block');
  const closeBtn = document.querySelector('.header__top__close-btn');

  const dropdownLink = document.querySelectorAll('.nav__art-submenu');
  const dropdownArrow = document.querySelectorAll('.nav__art-arrow');
  const element = document.querySelector('#gallery__select');

  const nav = document.querySelector('.nav-top');

  // dropdown
  document.querySelectorAll(".header__bottom__list-item__btn").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".dropdown");

      document.querySelectorAll(".header__bottom__list-item__btn").forEach(el => {
        if (el != btn) {
          el.classList.remove("header__bottom__list-item__btn__active");
        }
      });

      document.querySelectorAll(".dropdown").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("dropdown__active");
        }
      })
      dropdown.classList.toggle("dropdown__active");
      btn.classList.toggle("header__bottom__list-item__btn__active")
    })
  })

  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".header__bottom__list")) {
      document.querySelectorAll(".dropdown").forEach(el => {
          el.classList.remove("dropdown__active");
      })
       document.querySelectorAll(".header__bottom__list-item__btn").forEach(el => {
          el.classList.remove("header__bottom__list-item__btn__active");
      });
    }
  })

new SimpleBar(document.querySelector(".simplebar"), {
   /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 25,
});
new SimpleBar(document.querySelector(".simplebar2"), {
  /* чтобы изначально ползунок был виден */
 autoHide: false,
 /* с помощью этого значения вы можете управлять высотой ползунка*/
 scrollbarMaxSize: 25,
});
new SimpleBar(document.querySelector(".simplebar3"), {
  /* чтобы изначально ползунок был виден */
 autoHide: false,
 /* с помощью этого значения вы можете управлять высотой ползунка*/
 scrollbarMaxSize: 25,
});
new SimpleBar(document.querySelector(".simplebar4"), {
  /* чтобы изначально ползунок был виден */
 autoHide: false,
 /* с помощью этого значения вы можете управлять высотой ползунка*/
 scrollbarMaxSize: 25,
});
new SimpleBar(document.querySelector(".simplebar5"), {
  /* чтобы изначально ползунок был виден */
 autoHide: false,
 /* с помощью этого значения вы можете управлять высотой ползунка*/
 scrollbarMaxSize: 25,
});
    // search
    document.addEventListener('click', function (clickEvent) {
      if (clickEvent.target === searchBtn) {
        searchBtn.classList.add('header__top__search-btn__clicked');
        searchBlock.classList.add('header__top__search-block__active');
      } else if (!clickEvent.target.classList.contains('header__top__search-block')) {
        if (!clickEvent.target.classList.contains('form-search')) {
          if (!clickEvent.target.classList.contains('form-search__btn')) {
            if (!clickEvent.target.classList.contains('form-search__input')) {
              searchClosing();
            }
          }
        }
      }
    });
    closeBtn.addEventListener('click', function () {
      searchClosing();
    });
    function searchClosing() {
      searchBlock.classList.remove('header__top__search-block__active');
      searchBtn.classList.remove('header__top__search-btn__clicked');
    }

    // burger
    document.addEventListener('click', function (event) {
      if (event.target === document.querySelector('#burger')) {
        document.querySelector('#burger-menu').classList.add('menu-block__active');
      } else if (event.target !== document.querySelector('#burger-menu')) {
        if (!event.target.classList.contains('menu-list')) {
          if (!event.target.classList.contains('menu-list__item')) {
            burgerClosing();
          }
        }
      }
    });
    document.querySelector('.menu-block__close-btn').addEventListener('click', function () {
      burgerClosing();
    });
    function burgerClosing() {
      document.querySelector('#burger-menu').classList.remove('menu-block__active');
    }

    //accordion

    $(function() {
      $(".accordion__list").accordion()
    });

    $(".accordion__list").accordion({
      heightStyle: "content",
      refresh: true,
      collapsible: true,
      active: 0
    });

$( ".tooltippy" ).each(function( i ) {
  tippy(this, {
      trigger: 'click',
      allowHTML: true,
      placement: 'top',
      animation: 'scale-subtle',
      interactive: true,
      theme: 'proectsPopup',
      content: "Пример современных тенденций - современная методология разработки",
  });
});
$( ".tooltippy_two" ).each(function( i ) {
  tippy(this, {
      trigger: 'click',
      allowHTML: true,
      placement: 'top',
      animation: 'scale-subtle',
      interactive: true,
      theme: 'proectsPopup',
      content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
  });
});
$( ".tooltippy_three" ).each(function( i ) {
  tippy(this, {
      trigger: 'click',
      allowHTML: true,
      placement: 'top',
      animation: 'scale-subtle',
      interactive: true,
      theme: 'proectsPopup',
      content: "В стремлении повысить качество",
  });
});
})
