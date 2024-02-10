window.addEventListener("load", () => {
        const navButton = document.getElementById("navBtn");
        headerLinksHandler();
        navButton.addEventListener("click", responsiveNavToggler);
});

window.addEventListener("scroll", headerHandler);

const responsiveNavToggler = () => {
        if (window.innerWidth > 1024) return;

        const navMenu = document.getElementById("nav");
        const navButton = document.getElementById("navBtn");

        navButton.classList.toggle("active");
        navMenu.classList.toggle("active");

        navMenu.classList.contains("active")
                ? (document.body.style.overflowY = "hidden")
                : (document.body.style.overflowY = "auto");
};

function headerHandler() {
        const header = document.getElementById("header");
        if (window.scrollY > 0) {
                header.classList.add("bg-[#000000ef]", "backdrop-blur");
        } else {
                header.classList.remove("bg-[#000000ef]", "backdrop-blur");
        }
}

function headerLinksHandler() {
        const navMenu = document.getElementById("nav");
        navMenu.querySelectorAll("a").forEach((link) => {
                link.addEventListener("click", responsiveNavToggler);
        });
}
