document.addEventListener("DOMContentLoaded", () => {
    const bannerWraps = document.querySelectorAll(".each-banner-wrap");

    bannerWraps.forEach((bannerWrap) => {
        bannerWrap.addEventListener("click", (event) => {
            const pageName = event.currentTarget.getAttribute("href");
            window.location.href = pageName;
        });
    });
});

