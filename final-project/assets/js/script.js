const bark = document.getElementById('bark-link');
document.documentElement.classList.add("js");

var acc = document.getElementsByClassName("accordion");
    var i;

    for(i = 0; i < acc.length ; i++) {
        acc[i].addEventListener("click", function (){
            this.classList.toggle("active");
            this.parentElement.classList.toggle("active");

            var pannel = this.nextElementSibling;

            const expanded = this.getAttribute("aria-expanded") === "true";
            this.setAttribute("aria-expanded", !expanded);

            pannel.classList.toggle("open");
        });
    }

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    bark.currentTime = 0;
    bark.play();
  });
});