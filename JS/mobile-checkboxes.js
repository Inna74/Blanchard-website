document.addEventListener('DOMContentLoaded', function () {
  const spoilerBtn = document.querySelector('.mobile-spoiler__heading');
  const spoilerList = document.querySelector('.mobile-spoiler__categories-list');
  const items = document.querySelectorAll('.categories-list__item');

  items.forEach(item => {
    if (item.querySelector('input').checked) {
      item.classList.add('categories-list__item__clicked');
      itemToggling(item, 'show');
    }

    item.querySelector('input').addEventListener('click', function () {
      if (!item.querySelector('input').checked) {
        item.classList.remove('categories-list__item__clicked');
        if (!spoilerList.classList.contains('mobile-spoiler__categories-list__active')) {
          itemToggling(item, 'hide');
        }
      } else {
        item.classList.add('categories-list__item__clicked');
      }
    });
  });

  spoilerBtn.addEventListener('click', spoilerToggling);

  function spoilerToggling() {
    if (!spoilerList.classList.contains('mobile-spoiler__categories-list__active')) {
      spoilerBtn.classList.add('mobile-spoiler__heading__active');

      spoilerList.classList.add('mobile-spoiler__categories-list__active');

      items.forEach(item => {
        itemToggling(item, 'show');
      });
    } else {
      spoilerBtn.classList.remove('mobile-spoiler__heading__active');

      spoilerList.classList.remove('mobile-spoiler__categories-list__active');

      items.forEach(item => {
        if (item.querySelector('input').checked) {
          item.classList.add('categories-list__item__clicked');
          itemToggling(item, 'show');
        } else {
          item.classList.remove('categories-list__item__clicked');
          itemToggling(item, 'hide');
        }
      });
    }
  }

  function itemToggling(item, action) {
    if (action === 'show') {
      item.classList.add('categories-list__item__active');
      setTimeout(function () {
        item.classList.add('categories-list__item__animated');
      }, 100);
    } else {
      item.classList.remove('categories-list__item__animated');
      setTimeout(function () {
        item.classList.remove('categories-list__item__active');
      });
    }
  }
});
