// Source: https://codepen.io/firestar300/pen/zLKZVZ
var $loader = document.querySelector('.loader');

window.onload = function() {
    $loader.classList.remove('loader--active');
};

document.querySelector('.transition-btn').addEventListener('click', function (e) {
    var that = this;
    e.preventDefault();
    $loader.classList.add('loader--active');

    window.setTimeout(function () {
        window.location = that.getAttribute('href');
    }, 1500)
})