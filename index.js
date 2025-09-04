const dyE1= document.getElementById("day");
const hrE1= document.getElementById("hours");
const minE1= document.getElementById("minute");
const secE1= document.getElementById("second");
const newYearTime= new Date("Jan 1, 2026 00:00:00").getTime();

updateCountdown();

function updateCountdown(params) {
    const now= new Date().getTime();
    const gap= newYearTime - now;   
  const seconds= 1000;
  const minutes= seconds * 60;
  const hours= minutes * 60;
  const days= hours * 24;
  const d= Math.floor(gap / days);
  const h= Math.floor((gap % days) / hours);
  const m= Math.floor((gap % hours) / minutes);
  const s= Math.floor((gap % minutes) / seconds);
    dyE1.innerText= d;
    hrE1.innerText= h;
    minE1.innerText= m;
    secE1.innerText= s;
    setTimeout(updateCountdown, 1000);
}