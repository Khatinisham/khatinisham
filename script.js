let i = 0;
const images = document.querySelectorAll('#slide-container img'); // Ambil semua imej dalam slider
const totalImages = images.length;
const time = 5000; // Tempoh antara pertukaran

function changeImg() {
    i++;
    if (i >= totalImages) {
        i = 0; // Kembali ke gambar pertama jika sudah habis
    }

    const offset = -i * 104; // Mengira posisi untuk 'slide'
    document.getElementById('slide-container').style.transform = `translateX(${offset}%)`;

    setTimeout(changeImg, time); // Panggil semula fungsi
}

window.onload = changeImg; // Mulakan slideshow selepas laman dimuatkan
