
function compte_rebour (){
        // const day = document.getElementById("day");
        // const minute = document.getElementById("minute");
        // const hour = document.getElementById("hour");
        // const second = document.getElementById("second");
        let today = new Date("2024-03-19:14:00:00");
        let end = new Date("2024-03-19:15:00:00");

        //différence entre les dates en secondes
        var diff = (end - today)/1000;
        //Récupération de l'heure
        let minuteDiff = Math.floor(diff/60);
        let secondDiff = diff % 60
        // day.innerHTML = diffDay;
        // minute.innerHTML = diffMinute;
        // hour.innerHTML = diffHour;
        // second.innerHTML = secondDiff;
        // minute.innerHTML = minuteDiff;
        console.log(minuteDiff+" m : "+secondDiff+" s");
        // setTimeout(compte_rebour,1000);
} 
compte_rebour();
// setInterval(compte_rebour,1000);