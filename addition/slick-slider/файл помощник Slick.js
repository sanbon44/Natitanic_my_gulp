
$(document).ready(function(){
  $('.slider').slick({
    arrows: true, /* стрелки - два значения тру и фолс */
    dots: true, /* точки под слайдером. два значения тру и фолс, фолс по умолчанию. */
    adaptiveHeight: true,/* автоматическая отстройка высоты  под каждое изображение, полезное когда изображения разной высоты*/
    slidesToShow: 3, /* Количество слайдов которое мы хотим отобразить за раз. По умолчанию - 1. */
    slidesToScroll: 3, /* Количество слайдов которое мы пролистываем за раз. По умолчанию - 1. */
    infinite: false , /* отображает будет ли слайдер работать безконечно, по умолчанию включено */
    autoplay: true, /* автозапуск слайдов, по умолчанию выключено */
    speed: 500, /* Скорость перелистывания слайда */
    autoplaySpeed: 2000 /* скорость задержки автоматичекого проигрывания слайда, по умолчанию 3000мл секунд или 3 секунды */
  });
});

/* Слайдер */.slick-slider{}
/* Слайдер запущен */.slick-slider.slick-initialized{}
/* Слайдер с точками */.slick-slider.slick-dotted{}
/* Ограничивающая оболочка */.slick-list {}
/* Лента слайдов */.slick-track{}
/* Слайд */.slick-slide{}
/* Слайд активный (показывается) */.slick-slide.slick-active{}
/* Слайд основной */.slick-slide.slick-current{}
/* Слайд по центру */.slick-slide.slick-center{}
/* Клонированный слайд */.slick-slide.slick-cloned{}
/* Стрелка */.slick-arrow{}
/* Стрелка влево */.slick-arrow.slick-prev{}
/* Стрелка вправо */.slick-arrow.slick-next{}
/* Стрелка не активная */.slick-arrow.slick-disabled{}
/* Точки (булиты) */.slick-dots{}.slick-dots li{}
/* Активная точка */.slick-dots li.slick-active{}
/* Элемент точки */.slick-dots li button{}
