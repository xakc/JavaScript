function attachEventsListeners() {

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let secondsBtn = document.getElementById('secondsBtn');
    secondsBtn.addEventListener('click', ()=> {cenvert(+seconds.value)});

    function convert(sec=0){
        let day = sec / (24*60*60);
        let hour = sec / (60*60);
        let min = sec / 60;
        let sec  = sec % 60;

        days.value = day;
        hours.value = hour;
        minutes.value = min;
        seconds.value = sec;
    }
 
}