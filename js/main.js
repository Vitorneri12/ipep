function openAIWidget(event) {
    if (event) event.preventDefault();
    const section = document.getElementById("ia");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "center" });
    const input = document.getElementById("aiChatInput");
    if (input) setTimeout(function () { input.focus({ preventScroll: true }); }, 700);
  }

  function submitInterest(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const company = document.getElementById("company").value;
    const message = encodeURIComponent("Olá, tenho interesse na Pós-Graduação Executiva em IA para Negócios do IPEP.%0A%0ANome: " + name + "%0AE-mail: " + email + "%0ACPF: " + cpf + "%0AWhatsApp: " + whatsapp + "%0AEmpresa: " + company);
    document.getElementById("formMessage").style.display = "block";
    setTimeout(function() { window.open("https://wa.me/5519978033293?text=" + message, "_blank"); }, 650);
  }

document.addEventListener("DOMContentLoaded", function () {
    const teacherCards = document.querySelectorAll(".teacher-card");

    teacherCards.forEach(function(card) {
      card.addEventListener("click", function(event) {
        const isActive = card.classList.contains("active");
        teacherCards.forEach(function(c) { c.classList.remove("active"); });
        if (!isActive) card.classList.add("active");
        event.stopPropagation();
      });
    });

    document.addEventListener("click", function(event) {
      if (!event.target.closest(".teacher-card")) {
        teacherCards.forEach(function(c) { c.classList.remove("active"); });
      }
    });
  });
