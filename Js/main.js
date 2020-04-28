let i = 0;
let images = [];
let time = 2500;


images[0] = 'https://res.cloudinary.com/kemkem-dev/image/upload/v1588079854/wedd_trbkxl.jpg';
images[1] = 'https://res.cloudinary.com/kemkem-dev/image/upload/v1588079803/int_b3r54n.jpg';
images[2] = 'https://res.cloudinary.com/kemkem-dev/image/upload/v1588079774/banner2_a6qdtq.jpg';
images[3] = 'https://res.cloudinary.com/kemkem-dev/image/upload/v1588079812/int3_hq8ai9.jpg';

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