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

var images = ['1.jpg', '7.jpg', '8.jpg', '4.jpg'];
    var num = 0;
    var changeImage = function () {
        var len = images.length;
        rotator.src = images[num++];
        if (num == len) {
            num = 0;
        }
    };
    setInterval(changeImage, 5000);