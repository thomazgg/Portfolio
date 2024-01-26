// Adiciona a classe 'hidden' ao .menu-overlay
gsap.set(".menu-overlay", { visibility: "hidden" });

// Setup
const tl = gsap.timeline({ paused: true });
const path = document.querySelector("path");
const transitionElement = document.querySelector(".menu-overlay .menu");

// Toggle Menu
function revealMenu() {
    revealMenuItems();

    const hamburger = document.getElementById("hamburger");
    const toggleBtn = document.getElementById("toggle-btn");

    toggleBtn.addEventListener("click", function () {
        hamburger.classList.toggle("active");

        // Se a animação está reversa
        if (tl.reversed()) {
            // Reproduz a animação
            tl.play();
            // Remove a classe transition
            transitionElement.classList.remove("transition");
        } 
        // Se a animação não está reversa
        else { 
            // Reverte a animação
            tl.reverse();
            // Remove a classe transition
            transitionElement.classList.remove("transition");
        }
    });
}

revealMenu();

function revealMenuItems() {

    // Adiciona a classe transition quando a animação está completa
    tl.eventCallback("onComplete", function () {
        transitionElement.classList.add("transition");
    });
    
    // Define start and end SVG paths
    const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const end = "M0, 1005S175, 995, 500, 995s500, 5, 500, 5V0H0Z";

    // Easing functions
    const power2 = "power2.inOut";
    const power4 = "power4.inOut";

    // Timeline animations
    tl.to("#hamburger", 1.25, {
        marginTop: "-5px",
        x: -40,
        y: 40,
        ease: power4,
    });

    tl.to(".btn .btn-outline", 1.25, {
        x: -40,
        y: 40,
        width: "140px",
        height: "140px",
        border: "1px solid #e2e2dc",
        ease: power4,
    }, "<");

    tl.to(path, 0.8, {
        attr: {
            d: end,
        },
        ease: Power2.easeOut,
    }, "<").to(path, 0.8, {
        attr: {
            d: start,
        },
        ease: Power2.easeIn,
    }, "-0.8");
    

    tl.to(".menu", 1, {
        visibility: "visible",
    }, "-=0.5");

    tl.to(".menu-item > a", 1, {
        top: 0,
        ease: "power3.out",
        stagger: {
            amount: 0.5,
        },
    }, "-=1").reverse();

    tl.to(".social-links li", 0, {
        opacity: 0,
        transform: "translateY(200px)", // Posição inicial
    }, "<");

    tl.to(".social-links li", 1, {
        opacity: 1,
        transform: "translateY(0)", // Posição final
        ease: "power3.out",
        stagger: {
            amount: 0.2, // Atraso entre cada item
        },
    }, "-=1");
}

// Chama a função após 1 segundo para revelar o menu
setTimeout(function() {
    // Remove a classe 'hidden' após 1 segundo
    gsap.set(".menu-overlay", { visibility: "visible" });
}, 3000);