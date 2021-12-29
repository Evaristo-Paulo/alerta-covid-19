// PÁGINA EM CONSTRUÇÃO
var elems = document.querySelectorAll('.building');

if (elems) {
    for (let i = 0; i < elems.length; i++) {
        elems[i].addEventListener('click', (e) => {
            alert('A página solicitada encontra-se indisponível no momento...')
        })
    }
}

// ANO ACTUAL PARA O FOOTER
var footerYear = document.querySelector('#year');

if (footerYear) {
    let date = new Date();
    footerYear.innerHTML = date.getFullYear();
}

// MANIPULAR MODAL 
let modalTriggers = document.querySelectorAll('.modal-trigger')
let modal = document.querySelector('.modal')
let modalItems = document.querySelectorAll('.modal-body-content-item')
let menuHumburger = document.querySelector('#bar-group')
let modalClose = document.querySelectorAll('.modal-close')

if (modalTriggers) {
    for (let i = 0; i < modalTriggers.length; i++) {
        modalTriggers[i].addEventListener('click', (e) => {

            /* REMOVER TODOS OS MODAIS FILHOS APRESENTADOS */
            for (let ii = 0; ii < modalItems.length; ii++) {
                if (modalItems[ii].classList.contains('active')) {
                    modalItems[ii].classList.remove('active')
                }
            }

            /* SUMIR  COM AS BARRAS DO MENU */
            menuHumburger.style.display = 'none'

            /* APRESENTAR O CONTAINER DA MODAL */
            modal.classList.add('active')

            /* GIRAR AS BARRAS DO CLOSE DA MODAL */
            for (let ii = 0; ii < modalClose.length; ii++) {
                modalClose[ii].classList.add('turn')
            }

            let modalItem = document.querySelector(`#${modalTriggers[i].dataset.value}`)
            /* APRESENTAR O ELEMENTO DA MODAL SOLICITADO*/
            modalItem.classList.add('active')
        })
    }
}

// FECHAR MODAL PELO CLOSE
if (modalClose) {
    for (let i = 0; i < modalClose.length; i++) {
        modalClose[i].addEventListener('click', () => {

            if (modal.classList.contains('active')) {
                /* HIDE MODAL */
                modal.classList.remove('active')

                /* HIDE BAR CLOSE MODAL */
                modalClose[i].classList.remove('turn')

                //APRESENTAR MENU HUMBURGUER CASO O VALOR SEJA SUPERIOR OU IGUAL AO VALOR DA CONDIÇÃO
                if (window.matchMedia("(min-width: 1200px)").matches) {
                    menuHumburger.style.display = 'none'
                } else {
                    menuHumburger.style.display = 'block'
                }
            }
        })
    }
}

/* FECHAR MODAL QUANDO REDIMENSIONAR TAMANHO DA PÁGINA */
window.addEventListener('resize', () => {
    /* REMOVER TODOS OS MODAIS FILHOS APRESENTADOS */
    for (let ii = 0; ii < modalItems.length; ii++) {
        if (modalItems[ii].classList.contains('active')) {
            modalItems[ii].classList.remove('active')
        }
    }

    /* FECHAR O CONTAINER DA MODAL */
    if (modal.classList.contains('active')) {
        modal.classList.remove('active')
    }

    for (let ii = 0; ii < modalClose.length; ii++) {
        modalClose[ii].classList.remove('turn')
    }

    //APRESENTAR MENU HUMBURGUER CASO O VALOR SEJA SUPERIOR OU IGUAL AO VALOR DA CONDIÇÃO
    if (window.matchMedia("(min-width: 1200px)").matches) {
        menuHumburger.style.display = 'none'
    } else {
        menuHumburger.style.display = 'block'
    }

})

/* ENCONTRA REFEÊNCIA DO LINK */
$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 2000, function () {
                window.location.hash = hash;
            });
        }
    });
});


/* SUBIR PARA O TOP DA PÁGINA */
let goUp = document.querySelector('#go-up');

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goUp.style.display = "flex";
    } else {
        goUp.style.display = "none";
    }
}

if (goUp) {
    goUp.addEventListener('click', () => {
        goTop();
    })
}

const goTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    // HANDLE LAZY LOAD 
    ! function (window) {
        var $q = function (q, res) {
                if (document.querySelectorAll) {
                    res = document.querySelectorAll(q);
                } else {
                    var d = document,
                        a = d.styleSheets[0] || d.createStyleSheet();
                    a.addRule(q, 'f:b');
                    for (var l = d.all, b = 0, c = [], f = l.length; b < f; b++)
                        l[b].currentStyle.f && c.push(l[b]);

                    a.removeRule(0);
                    res = c;
                }
                return res;
            },
            addEventListener = function (evt, fn) {
                window.addEventListener ?
                    this.addEventListener(evt, fn, false) :
                    (window.attachEvent) ?
                    this.attachEvent('on' + evt, fn) :
                    this['on' + evt] = fn;
            },
            _has = function (obj, key) {
                return Object.prototype.hasOwnProperty.call(obj, key);
            };

        function loadImage(el, fn) {
            var img = new Image(),
                src = el.getAttribute('data-src');
            img.onload = function () {
                if (!!el.parent)
                    el.parent.replaceChild(img, el)
                else
                    el.src = src;

                fn ? fn() : null;
            }
            img.src = src;
        }

        function elementInViewport(el) {
            var rect = el.getBoundingClientRect()

            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.top <= (window.innerHeight || document.documentElement.clientHeight)
            )
        }

        var images = new Array(),
            query = $q('img.lazy'),
            processScroll = function () {
                for (var i = 0; i < images.length; i++) {
                    if (elementInViewport(images[i])) {
                        loadImage(images[i], function () {
                            images.splice(i, i);
                        });
                    }
                };
            };
        // Array.prototype.slice.call is not callable under our lovely IE8 
        for (var i = 0; i < query.length; i++) {
            images.push(query[i]);
        };

        processScroll();
        addEventListener('scroll', processScroll);

    }(this);

/* REVELAR ELEMENTO AO FAZER SCROLL DOWN */
window.addEventListener('scroll', reveal)

function reveal() {
    var reveals = document.querySelectorAll('.reveal')

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active')
        } else {
            reveals[i].classList.remove('active')
        }
    }

}