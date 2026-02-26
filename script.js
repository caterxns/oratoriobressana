document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navWrapper = document.querySelector('.nav-wrapper');

    menuToggle.addEventListener('click', () => {
        navWrapper.classList.toggle('active');
                menuToggle.classList.toggle('is-open');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. GESTIONE MENU MOBILE (Hamburger) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navWrapper = document.querySelector('.nav-wrapper');

    if (menuToggle && navWrapper) {
        menuToggle.addEventListener('click', () => {
            // Apre o chiude il menu a tendina
            navWrapper.classList.toggle('active');
            
            // Opzionale: aggiunge un'animazione al tasto hamburger
            menuToggle.classList.toggle('is-active');
        });
    }

    // --- 2. GESTIONE DOWNLOAD MODULO (Con trucco anti-cache) ---
    const registrationForm = document.getElementById('registration-form');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Blocca l'invio della pagina

            const nome = document.getElementById('nome').value;
            
            // Messaggio amichevole
            alert("Ciao " + nome + "! Abbiamo ricevuto i dati. Ora scaricherai il modulo: stampalo, firmalo e portalo in Oratorio con la quota!");

            // Creiamo un link temporaneo "invisibile" per il download
            const link = document.createElement('a');
            
            // 'tesseramento2026.pdf' deve essere il nome esatto del file nella cartella.
            // Aggiungiamo il timestamp (?v=...) per essere sicuri che scarichi l'ultima versione.
            link.href = 'tesseramento2026.pdf?v=' + new Date().getTime();
            
            // Nome con cui il file verrà salvato sul PC dell'utente
            link.download = 'Modulo_Iscrizione_2026.pdf'; 
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});