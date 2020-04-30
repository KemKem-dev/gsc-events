let i = 0;
let images = [];
let time = 2500;


images[0] = 'https://res.cloudinary.com/kemkem-dev/image/upload/v1588256520/wedd_nze3dn.jpg';
images[1] = 'https://res.cloudinary.com/kemkem-dev/image/upload/v1588253280/int_cyltcq.jpg';
images[2] = 'https://res.cloudinary.com/kemkem-dev/image/upload/v1588253146/banner2_w4nseb.jpg';
images[3] = 'https://res.cloudinary.com/kemkem-dev/image/upload/v1588253003/int3_b9yjkq.jpg';

function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0
    }

    setTimeout("changeImg ()", time);
}

window.onload = changeImg;

$(document).ready(function() {
    $('.start-btn').click(function() {
        $('.modal-box').toggleClass("show-modal");
        $('.start-btn').toggleClass("show-modal");
    });

    $('.fa-times').click(function() {
        $('.modal-box').toggleClass("show-modal");
        $('.start-btn').toggleClass("show-modal");
    });
});
