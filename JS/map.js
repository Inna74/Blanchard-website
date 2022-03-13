document.addEventListener('DOMContentLoaded', () => {
  let myMap;

  function initDesktop(){
    myMap = new ymaps.Map('map', {
      center: [55.75991743174908,37.63745011920072],
      zoom: 14,
    });

    var myPlacemark = new ymaps.Placemark([55.75846306898368,37.601079499999905], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemark.png',
      iconImageSize: [20, 20]
    });

    myMap.geoObjects.add(myPlacemark);
  }

  function init1440(){
    myMap = new ymaps.Map('map', {
      center: [55.75991743174908,37.62745011920072],
      zoom: 14,
    });

    var myPlacemark = new ymaps.Placemark([55.75846306898368,37.601079499999905], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemark.png',
      iconImageSize: [20, 20]
    });

    myMap.geoObjects.add(myPlacemark);
  }

  function initTablet(){
    myMap = new ymaps.Map('map', {
      center: [55.75991743174908,37.61745011920072],
      zoom: 14,
    });

    var myPlacemark = new ymaps.Placemark([55.75846306898368,37.601079499999905], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemark.png',
      iconImageSize: [20, 20]
    });

    myMap.geoObjects.add(myPlacemark);
  }

  function init768(){
    myMap = new ymaps.Map('map', {
      center: [55.75991743174908,37.60745011920072],
      zoom: 14,
    });

    var myPlacemark = new ymaps.Placemark([55.75846306898368,37.601079499999905], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemark.png',
      iconImageSize: [20, 20]
    });

    myMap.geoObjects.add(myPlacemark);
  }

  function initMobile(){
    myMap = new ymaps.Map('map', {
      center: [55.75991743174908,37.60745011920072],
      zoom: 14,
    });

    var myPlacemark = new ymaps.Placemark([55.75846306898368,37.601079499999905], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemark.png',
      iconImageSize: [20, 20]
    });

    myMap.geoObjects.add(myPlacemark);
  }

  if (window.matchMedia("(max-width: 767px)").matches) {
    ymaps.ready(initMobile);
  } else if (window.matchMedia("(max-width: 1023px)").matches) {
    ymaps.ready(init768);
  } else if (window.matchMedia("(max-width: 1439px)").matches) {
    ymaps.ready(initTablet);
  } else if (window.matchMedia("(max-width: 1919px)").matches) {
    ymaps.ready(init1440);
  } else if (window.matchMedia("(min-width: 1920px)").matches) {
    ymaps.ready(initDesktop);
  }

  const widthDesktop = window.matchMedia('(min-width: 1920px)');
  const widthSmallDesktop = window.matchMedia('(max-width: 1919px)');
  const widthTablet = window.matchMedia('(max-width: 1439px)');
  const widthBigMobile = window.matchMedia('(max-width: 1023px)');
  const widthMobile = window.matchMedia('(max-width: 767px)');

  widthMobile.addEventListener('change', e => {
    if (e.matches) {
      myMap.setCenter([55.75846306898368,37.601079499999905], 14, {});
    }
  });

  widthBigMobile.addEventListener('change', e => {
    if (e.matches) {
      myMap.setCenter([55.75991743174908,37.60745011920072], 14, {});
    }
  });

  widthTablet.addEventListener('change', e => {
    if (e.matches) {
      myMap.setCenter([55.75991743174908,37.61745011920072], 14, {});
    }
  });

  widthSmallDesktop.addEventListener('change', e => {
    if (e.matches) {
      myMap.setCenter([55.75991743174908,37.62745011920072], 14, {});
    }
  });

  widthDesktop.addEventListener('change', e => {
    if (e.matches) {
      myMap.setCenter([55.75991743174908,37.63745011920072], 14, {});
    }
  });
});
