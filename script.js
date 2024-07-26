function carregarConteudoAssincrono(url, containerId) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(containerId).innerHTML = html;
        })
        .catch(error => {
            console.error('Erro ao carregar conteúdo:', error);
        });
}

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


document.addEventListener('DOMContentLoaded', function () {

    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
        const userData = JSON.parse(userDataString);
        document.getElementById('name').value = userData.name;
        document.getElementById('phone').value = userData.phone;
        document.getElementById('email').value = userData.email;
    }

    document.getElementById('pdfForm').addEventListener('submit', function (event) {
        event.preventDefault();


        let name = document.getElementById('name').value;
        let phone = document.getElementById('phone').value;
        let email = document.getElementById('email').value;


        if (name == '' || phone == '' || email == '') {
            alert('Por favor, preencha todos os campos');
        } else {

            const userData = {
                name: name,
                phone: phone,
                email: email
            };
            localStorage.setItem('userData', JSON.stringify(userData));


            window.location.href = 'ebook-fuscar.pdf';
        }
    });
});
