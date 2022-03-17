let formBtn = document.querySelector ('#login-btn');
let formClose = document.querySelector('#form-close');
let loginForm = document.querySelector('.login-form-container');

formBtn.addEventListener('click', function() {
    console.log("Hello World")
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

window.onscroll = () =>{
    loginForm.classList.remove('active');
}

var images = ['./Images/1.jpg', './Images/7.jpg', './Images/8.jpg', './Images/4.jpg'];
    var num = 0;
    var rotator=document.getElementById('rotator')
    var changeImage = function () {
        var len = images.length;
        rotator.src = images[num++];
        if (num == len) {
            num = 0;
        }
    };
    setInterval(changeImage, 4000);