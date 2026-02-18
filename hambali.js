let index = 0;
const cards = document.querySelectorAll(".card");
const track = document.querySelector(".track");
const dots = document.querySelectorAll(".dots span");

function goSlide(i) {
  index = i;
  update();
}

function update() {
  track.style.transform = `translateX(-${index * 75}%)`;

  cards.forEach(c => c.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  cards[index].classList.add("active");
  dots[index].classList.add("active");
}

// auto slide
setInterval(() => {
  index++;
  if (index >= cards.length) index = 0;
  update();
}, 4000);

