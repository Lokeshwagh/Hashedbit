var typed = new Typed('#ser', {
    strings: ['Web Apps', 'Android Apps' , 'Video Editing', 'Content Writing', 'Web Application'],
    typeSpeed: 100,
    backSpeed: 100,
    smartBackspace: true,
    backDelay: 700,
    loop:true
  });

let year = document.querySelector("#year");

$(document).ready(function () {
  year.innerText = new Date().getFullYear();
});