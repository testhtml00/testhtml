window.onload = function() {

    alert("Bienvenue sur mon site !");

    

    // Afficher la section active par défaut

    showTabContent('about');

};



// Fonction pour afficher le contenu de l'onglet

function showTabContent(tabId) {

    // Cacher toutes les sections

    const contents = document.querySelectorAll('.tab-content');

    contents.forEach(content => {

        content.classList.remove('active');

    });



    // Afficher la section correspondant à l'onglet cliqué

    const activeContent = document.getElementById(tabId);

    if (activeContent) {

        activeContent.classList.add('active');

    }



    // Mettre à jour l'onglet actif

    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {

        tab.classList.remove('active');

    });



    const activeTab = document.querySelector(`a[href="#${tabId}"]`);

    if (activeTab) {

        activeTab.classList.add('active');

    }

}



// Ajout des événements de clic sur chaque onglet

document.querySelectorAll('.tab').forEach(tab => {

    tab.addEventListener('click', (event) => {

        event.preventDefault(); // Empêche le défilement

        const tabId = tab.getAttribute('href').substring(1); // Récupère l'ID de l'onglet

        showTabContent(tabId); // Affiche le contenu correspondant

    });

});


