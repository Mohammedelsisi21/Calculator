// Start load
window.addEventListener("load", function () {
    let preloader = document.querySelector("#preloader");
        preloader.classList.add("preloaded");
    setTimeout(function () {
            preloader.remove();
        }, 3000);
});
const parentElement = document.querySelector('.parent');
const openButton = document.querySelector('.open-btn');
const icon = openButton.querySelector('.icon-lok'); // هنا نستخدم openButton للوصول إلى الأيقونة داخل الزر
openButton.addEventListener('click', () => {
if (parentElement.classList.contains('animate')) {
    parentElement.classList.remove('animate');
    parentElement.classList.add('close');
    icon.classList.remove('fa-lock-open');
    icon.classList.add('fa-unlock');
    console.log(icon)
} else {
    parentElement.classList.remove('close');
    parentElement.classList.add('animate');
    icon.classList.remove('fa-unlock');
    icon.classList.add('fa-lock-open');
    console.log(icon)
}
});