
function compte_rebour() {
    //function de mise en forme
    function format_number(nb) {
        return (nb > 9) ? nb : "0" + nb;
    }
    //Déclaration
    // const day = document.getElementById("day");
    // const minute = document.getElementById("minute");
    // const hour = document.getElementById("hour");
    // const second = document.getElementById("second");
    let today = new Date();
    //Récupération de la date
    let year = today.getFullYear();
    let end = new Date(year + "-03-21:13:00:00");

    //différence entre les mois
    let montDiff = format_number(end.getMonth() - today.getMonth());

    //différence entre les dates en secondes
    let diff = (end - today) / 1000;

    //Récupération du jour
    let jourDiff = Math.floor(diff / 86400);
    jourDiff = format_number(jourDiff);

    //Récupération de l'heure
    let heureDiff = Math.floor((diff % (86400)) / 3600);
    heureDiff = format_number(heureDiff);

    //Récupération des minutes
    let minuteDiff = Math.floor((diff % 3600) / 60);
    minuteDiff = format_number(minuteDiff);

    //Récupération des secondes
    let secondDiff = Math.floor(diff % 60);
    secondDiff = format_number(secondDiff);


    day.innerHTML = jourDiff;
    minute.innerHTML = minuteDiff;
    hour.innerHTML = heureDiff;
    second.innerHTML = secondDiff;
}
setInterval(compte_rebour, 1000);