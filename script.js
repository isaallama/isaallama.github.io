document.addEventListener('DOMContentLoaded', (event) => {
    const instagramLink = document.getElementById('whatsapp-link');

    instagramLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'https://api.whatsapp.com/send/?phone=555134802136&text&type=phone_number&app_absent=0';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const instagramLink = document.getElementById('instagram-link');

    instagramLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'https://www.instagram.com/fuscar_centro_automotivo/';
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const localizacaoLink = document.getElementById('Localização-link');

    localizacaoLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'https://www.google.com/maps/place/Fuscar+Centro+Automotivo/@-30.112716,-51.3263169,15z/data=!4m6!3m5!1s0x95197f8b0cff3d83:0xefb768fb1524bbf3!8m2!3d-30.112716!4d-51.3263169!16s%2Fg%2F1tngrg6h?entry=ttu';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const avaliacaoLink = document.getElementById('Avaliação-link');

    avaliacaoLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'https://www.google.com/search?q=fuscar+centro+automotivo&oq=f&gs_lcrp=EgZjaHJvbWUqBggDEEUYOzIGCAAQRRg8MgYIARBFGDwyBggCEEUYPDIGCAMQRRg7MgYIBBBFGD0yBggFEEUYPTIGCAYQRRg8MgYIBxBFGDzSAQgyMDk1ajBqNKgCALACAQ&sourceid=chrome&ie=UTF-8#';
    });
});


function initializeBtnConhecaNos(document) {
    const btnConhecaNos = document.getElementById('btnConhecaNos');
    if (btnConhecaNos) {
        btnConhecaNos.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = 'sobre.html';
        });
    } else {
        console.error('Elemento com ID "btnConhecaNos" não encontrado.');
    }
}


initializeBtnConhecaNos(window.document);



document.addEventListener('DOMContentLoaded', (event) => {
    let currentSlide = 1;
    showSlide(currentSlide);

    function changeSlide(n) {
        showSlide(currentSlide += n);
    }

    function showSlide(n) {
        let slides = document.getElementsByClassName("slide");

        if (n > slides.length) {
            currentSlide = 1;
        }
        if (n < 1) {
            currentSlide = slides.length;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[currentSlide - 1].style.display = "block";
    }

    document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.next').addEventListener('click', () => changeSlide(1));
});





