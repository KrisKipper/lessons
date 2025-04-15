(function () {
    const tabs = (element) => {
        if (!element) return;
        const top = element.querySelector(".help__top");

        top.addEventListener('click', function () {
            element.classList.toggle("active");
        });
    };

    const onLoad = () => {
        document.querySelectorAll('.help').forEach((element) => {
            tabs(element);
        });
    };

    document.addEventListener('DOMContentLoaded', onLoad);
})();
