let btnWhatsapp = document.querySelector('#whatsapp-link');

btnWhatsapp.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'https://api.whatsapp.com/send/?phone=555134802136&text&type=phone_number&app_absent=0';
});


let btnInstagram = document.querySelector('#instagram-link');

btnInstagram.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'https://www.instagram.com/fuscar_centro_automotivo/';
});


let btnConhecaNos = document.querySelector('#btnConhecaNos');

btnConhecaNos.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'sobre.html';
});


document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('pdfForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        openPdf();
    });

    function openPdf() {
        let name = document.getElementById('name').value;
        let phone = document.getElementById('phone').value;
        let email = document.getElementById('email').value;

        if (name == '' || phone == '' || email == '') {
            alert('Por favor, preencha todos os campos');
        } else {
            window.location.href = 'ebook-fuscar.pdf';
        }
    }
});