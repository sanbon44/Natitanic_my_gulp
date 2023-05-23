$(document).ready(function() {
    $('.slider__items-wrap').slick({
        responsive: [
            {
              breakpoint: 991.98,
              settings: {
                arrows: false,
                dots: true
              }
            },
        ]
    });
    $("a[href*='#']").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
});



// Модуль "показать еще" =======================================================================================================================================================================================================================
/*
Документация по работе в шаблоне:
data-showmore-media = "768,min"
data-showmore="size/items"
data-showmore-content="размер/кол-во"
data-showmore-button="скорость"
Сниппет (HTML): showmore
стили модуля находятся в "base_style/_showmore"
*/

// Если скрипт не работает то нужно задать медиазапрос в html файл: data-showmore-media="300,min"

(() => {
  "use strict";
  let t = (t, e = 500, o = 0) => {
    t.classList.contains("_slide") ||
      (t.classList.add("_slide"),
        (t.style.transitionProperty = "height, margin, padding"),
        (t.style.transitionDuration = e + "ms"),
        (t.style.height = `${t.offsetHeight}px`),
        t.offsetHeight,
        (t.style.overflow = "hidden"),
        (t.style.height = o ? `${o}px` : "0px"),
        (t.style.paddingTop = 0),
        (t.style.paddingBottom = 0),
        (t.style.marginTop = 0),
        (t.style.marginBottom = 0),
        window.setTimeout(() => {
          (t.hidden = !o),
            !o && t.style.removeProperty("height"),
            t.style.removeProperty("padding-top"),
            t.style.removeProperty("padding-bottom"),
            t.style.removeProperty("margin-top"),
            t.style.removeProperty("margin-bottom"),
            !o && t.style.removeProperty("overflow"),
            t.style.removeProperty("transition-duration"),
            t.style.removeProperty("transition-property"),
            t.classList.remove("_slide");
        }, e));
  },
    e = (t, e = 500, o = 0) => {
      if (!t.classList.contains("_slide")) {
        t.classList.add("_slide"),
          (t.hidden = !t.hidden && null),
          o && t.style.removeProperty("height");
        let r = t.offsetHeight;
        (t.style.overflow = "hidden"),
          (t.style.height = o ? `${o}px` : "0px"),
          (t.style.paddingTop = 0),
          (t.style.paddingBottom = 0),
          (t.style.marginTop = 0),
          (t.style.marginBottom = 0),
          t.offsetHeight,
          (t.style.transitionProperty = "height, margin, padding"),
          (t.style.transitionDuration = e + "ms"),
          (t.style.height = r + "px"),
          t.style.removeProperty("padding-top"),
          t.style.removeProperty("padding-bottom"),
          t.style.removeProperty("margin-top"),
          t.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            t.style.removeProperty("height"),
              t.style.removeProperty("overflow"),
              t.style.removeProperty("transition-duration"),
              t.style.removeProperty("transition-property"),
              t.classList.remove("_slide");
          }, e);
      }
    };
  function o(t, e) {
    const o = Array.from(t).filter(function (t, o, r) {
      if (t.dataset[e]) return t.dataset[e].split(",")[0];
    });
    if (o.length) {
      const t = [];
      o.forEach((o) => {
        const r = {},
          s = o.dataset[e].split(",");
        (r.value = s[0]),
          (r.type = s[1] ? s[1].trim() : "max"),
          (r.item = o),
          t.push(r);
      });
      let r = t.map(function (t) {
        return (
          "(" + t.type + "-width: " + t.value + "px)," + t.value + "," + t.type
        );
      });
      r = (function (t) {
        return t.filter(function (t, e, o) {
          return o.indexOf(t) === e;
        });
      })(r);
      const s = [];
      if (r.length)
        return (
          r.forEach((e) => {
            const o = e.split(","),
              r = o[1],
              n = o[2],
              i = window.matchMedia(o[0]),
              a = t.filter(function (t) {
                if (t.value === r && t.type === n) return !0;
              });
            s.push({ itemsArray: a, matchMedia: i });
          }),
          s
        );
    }
  }
  let r = !1;
  setTimeout(() => {
    if (r) {
      let t = new Event("windowScroll");
      window.addEventListener("scroll", function (e) {
        document.dispatchEvent(t);
      });
    }
  }, 0),
    (window.FLS = !0),
    (function (t) {
      let e = new Image();
      (e.onload = e.onerror =
        function () {
          t(2 == e.height);
        }),
        (e.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (t) {
      let e = !0 === t ? "webp" : "no-webp";
      document.documentElement.classList.add(e);
    }),
    (function () {
      const r = document.querySelectorAll("[data-showmore]");
      let s, n;
      function i(t) {
        t.forEach((t) => {
          a(t.itemsArray, t.matchMedia);
        });
      }
      function a(o, r) {
        o.forEach((o) => {
          !(function (o, r = !1) {
            o = r ? o.item : o;
            const s = o.querySelector("[data-showmore-content]"),
              n = o.querySelector("[data-showmore-button]"),
              i = l(o, s);
            (r.matches || !r) &&
              i <
              (function (t) {
                let e = t.offsetHeight;
                t.style.removeProperty("height");
                let o = t.offsetHeight;
                return (t.style.height = `${e}px`), o;
              })(s)
              ? (t(s, 0, i), (n.hidden = !1))
              : (e(s, 0, i), (n.hidden = !0));
          })(o, r);
        });
      }
      function l(t, e) {
        let o = 0;
        if ("items" === (t.dataset.showmore ? t.dataset.showmore : "size")) {
          const t = e.dataset.showmoreContent ? e.dataset.showmoreContent : 3,
            r = e.children;
          for (let e = 1; e < r.length; e++) {
            if (((o += r[e - 1].offsetHeight), e === t)) break;
          }
        } else {
          o = e.dataset.showmoreContent ? e.dataset.showmoreContent : 150;
        }
        return o;
      }
      function d(o) {
        const r = o.target,
          d = o.type;
        if ("click" === d) {
          if (r.closest("[data-showmore-button]")) {
            const o = r
              .closest("[data-showmore-button]")
              .closest("[data-showmore]"),
              s = o.querySelector("[data-showmore-content]"),
              n = o.dataset.showmoreButton ? o.dataset.showmoreButton : "500",
              i = l(o, s);
            s.classList.contains("_slide") ||
              (o.classList.contains("_showmore-active")
                ? t(s, n, i)
                : e(s, n, i),
                o.classList.toggle("_showmore-active"));
          }
        } else "resize" === d && (s.length && a(s), n.length && i(n));
      }
      r.length &&
        ((s = Array.from(r).filter(function (t, e, o) {
          return !t.dataset.showmoreMedia;
        })),
          s.length && a(s),
          document.addEventListener("click", d),
          window.addEventListener("resize", d),
          (n = o(r, "showmoreMedia")),
          n &&
          n.length &&
          (n.forEach((t) => {
            t.matchMedia.addEventListener("change", function () {
              a(t.itemsArray, t.matchMedia);
            });
          }),
            i(n)));
    })();
})();
const headerBurder = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');
const body = document.querySelector('body');
const linkNavs = document.querySelectorAll('.header__nav-items a');
if (headerBurder && headerNav) {
    headerBurder.addEventListener("click", function (e) {
        headerBurder.classList.toggle('active');
        headerNav.classList.toggle('active');
        body.classList.toggle('lock');
    });
}
if (linkNavs.length && headerNav && body && headerBurder) {
    linkNavs.forEach(element => {
        element.addEventListener("click", function (e) {
            headerNav.classList.remove('active')
            body.classList.remove('lock');
            headerBurder.classList.remove('active');
        });
    });

}
// переделанный скрипт мной из _read-more.js который работает так же при вызове функции из html но при ширине экрана меньше 480px
// есть html файл
// btn.classList.remove('up'); нужен чтобы при раскрытии текста, в кнопке изменялась стрелка (менялась направление стрелки), стрелку я добалял через :after
function readMore() {
    const moreArray = document.querySelectorAll('.block-more__more');
    if (moreArray.length) {
        moreArray.forEach(more => {
            const dots = more.previousElementSibling;
            const btn = more.nextElementSibling;
            if (window.matchMedia("screen and (max-width: 480px)").matches) {
                if (dots.style.display === "none") {
                    dots.style.display = "inline";
                    btn.innerHTML = "More";
                    btn.classList.remove('up');
                    more.style.display = "none";
                } else {
                    dots.style.display = "none";
                    btn.classList.add('up');
                    btn.innerHTML = "Less";
                    more.style.display = "inline";
                }
            };
        });
    };
};
// скрипт который имитирует печатную машинку.
// есть html файл 
// настраивается из html через дата атрибутыь data - delay="2" data - add - speed="70" data - remove - speed="100" data - start - delay="3000"> и т.д.
// delay - это задержка между повторениями(интервал между концом и началом следующей)
// addSpeed и removeSpeed - скорость появления и удаления текста
// startDelay - задержка перед стартом
// removeDelay - задержка перед удалением
// незнаю правильно это или нет но если закоментировать строку setTimeout(removePrint, removeDelay) то текст удаляться не будет

const printfunc = () => {
    const elems =document.querySelectorAll('.print');
    
    const print = (elem) => {
        const delay = elem.dataset.delay || 2000;
        const startDelay = elem.dataset.startDelay || 0;
        const removeDelay = elem.dataset.removeDelay || 1000;
        const addSpeed = elem.dataset.addSpeed || 50;
        const removeSpeed = elem.dataset.removeSpeed || 20;
        const text = elem.textContent.replace(/\s+/g, '  ').trim();
        
        let count = 0;
        let newText = '';
        
        elem.textContent = '';
        
        const addPrint = () => {
            let interval;
            interval = setInterval(() => {
                newText += text[count];
                elem.textContent = newText;
                count++
    
                if (count === text.length) {
                    clearInterval(interval)

                    // setTimeout(removePrint, removeDelay) 
                    // незнаю правильно это или нет но если закоментировать строку выше то текст удаляться не будет

                }
            }, addSpeed);
            
        };

        const removePrint = () => {
            let interval;

            interval = setInterval(() => {
                if (newText.length) {
                    newText = newText.slice(0, -1)
                    elem.textContent = newText
                    count--

                } else {
                    clearInterval(interval)
                    setTimeout(addPrint, delay)
                }
            }, removeSpeed);
        }
        setTimeout(addPrint, startDelay)
    

    }
    
    elems.forEach(elem => {
        print(elem);
    });
}
printfunc();