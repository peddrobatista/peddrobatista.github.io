let navigation = document.querySelector(".navigation");
let toggle = document.querySelector('.toggle');
let toggle_content = document.querySelector(".toggle_content");
let section = document.querySelector('.section');
toggle.onclick = function () {
    toggle_content.classList.toggle("active");
    navigation.classList.toggle("active");
    section.classList.toggle('active');
}
$(document).ready(function() {
    $('.open-popup').magnificPopup({
        type: 'inline',
        disableOn: 400,
        key: 'some-key',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
});