window.addEventListener("load", () => {
    document.querySelector(".preloader").classList.add("loaded");
    document.querySelector(".preloader-slide").addEventListener("animationend", () => {
        document.querySelector(".preloader").style.display = "none";
        AOS.init({
            once: true,
            duration: 2000
        });
    });
});

// nav toggle
function nav() {
    const navToggler = document.querySelector(".js-toggler");
    const nav = document.querySelector(".js-nav");

    navToggler.addEventListener("click", toggleNav);

    function toggleNav() {
        navToggler.classList.toggle("active");
        nav.classList.toggle("open");
        if(nav.classList.contains("open")){
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.removeProperty("overflow");
        }
    }

    nav.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", toggleNav);
    })
}

nav();



// video popop

function video() {
    const btns = ['.video-popup-close','.play-btn'];
    const popup = document.querySelector('.video-popup');
    const iframe = popup.querySelector('.video-iframe');
    const src = iframe.src;

    btns.forEach((btn) => {
        document.querySelector(btn).addEventListener("click", () => {
            if(popup.classList.contains("open")){
                popup.classList.remove("open");
                iframe.src = ""
            } else {
                popup.classList.add("open");
                if(iframe.getAttribute("src") == ""){
                iframe.src = src;
                }
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    video();
});

// services accordion

function accordion(ele) {
    const accordion = document.querySelector(ele);

    accordion.addEventListener("click", ({target}) => {
        if(!target.closest(".accord-btn")){
            return;
        }
        const btn = target.closest(".accord-btn");
        const item = btn.parentElement.parentElement;
        const body = btn.parentElement.nextElementSibling;

        if(target.closest(".active")){
            slideUp();
            return;
        }

        if(accordion.querySelector(".active")){
            slideUp();
        }
        item.classList.add("active");
        body.style.height = body.scrollHeight + "px";
        function slideUp() {
            accordion.querySelector(".active").lastElementChild.style.height = "0";
            accordion.querySelector(".active").classList.remove("active")
        }

    })
}
accordion(".accordion");


window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  