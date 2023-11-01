const vibration = (target) => {
    target.classList.add("vibration");

    setTimeout(function () {
        target.classList.remove("vibration");
    }, 400);
}