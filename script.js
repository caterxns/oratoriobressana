document.addEventListener('DOMContentLoaded', () => {
    
    // 1. GESTIONE MENU MOBILE
    const menuToggle = document.querySelector('.menu-toggle');
    const navWrapper = document.querySelector('.nav-wrapper');

    if (menuToggle && navWrapper) {
        menuToggle.addEventListener('click', () => {
            // Togliamo e aggiungiamo la classe active
            navWrapper.classList.toggle('active');
            // Cambiamo l'aspetto del tasto (se hai previsto animazioni)
            menuToggle.classList.toggle('is-active');
        });
    }

    // 2. GESTIONE DOWNLOAD MODULO
    const registrationForm = document.getElementById('registration-form');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const nome = document.getElementById('nome').value;
            alert("Ciao " + nome + "! Il download sta per iniziare. Stampalo, firmalo e portalo in Oratorio!");

            const link = document.createElement('a');
            // Usiamo il timestamp per evitare che il browser scarichi versioni vecchie (cache)
            link.href = 'tesseramento2026.pdf?v=' + new Date().getTime();
            link.download = 'Modulo_Iscrizione_2026.pdf'; 
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});