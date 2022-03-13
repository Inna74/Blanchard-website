document.addEventListener('DOMContentLoaded', () => {

  const btns = document.querySelectorAll('.accordion__arrow-btn');
    const accordionBtn = document.querySelectorAll('.accordion__btn');
    const tabs = document.querySelector('.tabs');
    const tabsBtn = document.querySelectorAll('.tabs__btn');
    const tabsContent = document.querySelectorAll('.tabs-content');
    const tabsPainter = document.querySelectorAll('.accordion__painter-list');
    const painterLink = document.querySelectorAll('.accordion__painter-link');
    const painter = document.querySelectorAll('.painter');

     // tabs counter

     if (tabs) {
      tabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('tabs__btn')) {
          const tabsPath = e.target.dataset.tabsPath;
          tabsHandler(tabsPath);
        }
      })

      const tabsHandler = (path) => {
        tabsBtn.forEach(el => {el.classList.remove('tabs__btn-active')})
        document.querySelector(`[data-tabs-path="${path}"]`).classList.add('tabs__btn-active')

        tabsContent.forEach(el => {el.classList.remove('tabs-content-active')})
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs-content-active')
      }
    }
   /*добавляем и убираем класс active*/
  $('.tabs__item').click(function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});
    // tabs painter

    if (tabsPainter) {
      const tabsHandler = (tabLinks) => {
        tabLinks.forEach(el => {
          const path = el.dataset.tabsPath;
          el.addEventListener('click', (e) => {
            e.preventDefault();
            painterLink.forEach(el => {el.classList.remove('accordion__painter-link--active')});
            e.target.classList.add('accordion__painter-link--active');
            painter.forEach(el => {el.classList.remove('painter-content-active')});
            document.querySelector(`[data-tabs-target="${path}"]`).classList.add('painter-content-active');
          });
        });
      }

      tabsPainter.forEach(el => {
        const tabsLinks = el.querySelectorAll('.accordion__painter-link');
        tabsHandler(tabsLinks);
      });
    }})
