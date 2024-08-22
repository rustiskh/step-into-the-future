document.addEventListener("DOMContentLoaded", () => {
    console.log('loaded');

    const burger = document.getElementById('burger-checkbox');
    const menu = document.getElementById('header-nav');
    burger.checked = false;

    burger.addEventListener("click", (elem) => {
        console.log(elem.target.checked);
        if (elem.target.checked) {
            menu.classList.add("active")
        } else {
            menu.classList.remove("active")
        }
    })


})