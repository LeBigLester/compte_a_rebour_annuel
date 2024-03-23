const monElement = document.querySelector('#body'); // Remplacez '#monElementId' par le sélecteur de votre élément

// Demandez à l'élément d'entrer en mode plein écran
if (monElement.requestFullscreen) {
  monElement.requestFullscreen();
} else if (monElement.mozRequestFullScreen) { // Pour Firefox
  monElement.mozRequestFullScreen();
} else if (monElement.webkitRequestFullscreen) { // Pour Chrome, Safari et Opera
  monElement.webkitRequestFullscreen();
} else if (monElement.msRequestFullscreen) { // Pour Internet Explorer et Edge
  monElement.msRequestFullscreen();
}

function compte_rebour() {
    //function de mise en forme
    function format_number(nb) {
        return (nb > 9) ? nb : "0" + nb;
    }
    function format_chaine(nb,singular,plural){
        return (nb > 1) ? plural : singular;
    }
    // Déclaration
    const day = document.getElementById("day");
    const minute = document.getElementById("minute");
    const hour = document.getElementById("hour");
    const second = document.getElementById("second");
    const hourMessage = document.getElementById("hourMessage");
    const minuteMessage = document.getElementById("minuteMessage");
    const secondMessage = document.getElementById("secondMessage");
    const dayMessage = document.getElementById("dayMessage");

    //Récupération de la date
    let today = new Date();
    let year = today.getFullYear();
    let end = new Date(year + "-12-31:23:59:59");

    //différence entre les mois
    let montDiff = format_number(end.getMonth() - today.getMonth());

    //différence entre les dates en secondes
    let diff = (end - today) / 1000;

    //Récupération du jour
    let jourDiff = Math.floor(diff / 86400);
    dayMessage.innerHTML = format_chaine(jourDiff,"jour","jours");
    jourDiff = format_number(jourDiff);

    //Récupération de l'heure
    let heureDiff = Math.floor((diff % (86400)) / 3600);
    hourMessage.innerHTML = format_chaine(heureDiff,"heure","heures");
    heureDiff = format_number(heureDiff);

    //Récupération des minutes
    let minuteDiff = Math.floor((diff % 3600) / 60);
    minuteMessage.innerHTML = format_chaine(minuteDiff,"minute","minutes");
    minuteDiff = format_number(minuteDiff);

    //Récupération des secondes
    let secondDiff = Math.floor(diff % 60);
    secondMessage.innerHTML = format_chaine(secondDiff,"seconde","secondes");
    secondDiff = format_number(secondDiff);


    day.innerHTML = jourDiff;
    minute.innerHTML = minuteDiff;
    hour.innerHTML = heureDiff;
    second.innerHTML = secondDiff;
}
compte_rebour();
setInterval(compte_rebour, 1000);