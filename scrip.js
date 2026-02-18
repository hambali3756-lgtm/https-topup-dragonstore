function nextStep(step) {
  let steps = document.querySelectorAll(".step");
  steps.forEach(s => s.classList.remove("active"));

  document.getElementById("step" + step).classList.add("active");

  // Simulasi proses top up
  if (step === 5) {
    setTimeout(() => {
      document.getElementById("step5").classList.remove("active");
      document.getElementById("step6").classList.add("active");
    }, 3000);
  }
}
