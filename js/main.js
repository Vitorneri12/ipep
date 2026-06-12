function simulateAI() {
    const question = document.getElementById("aiQuestion").value.trim();
    const responseBox = document.getElementById("aiResponse");
    if (!question) {
      responseBox.style.display = "block";
      responseBox.innerHTML = "Digite sua dúvida para que a IA do Programa possa orientar você.";
      return;
    }
    responseBox.style.display = "block";
    responseBox.innerHTML = "Excelente pergunta. Esta pós foi criada para profissionais que desejam aplicar Inteligência Artificial de forma estratégica nos negócios, sem necessidade de formação técnica em programação. O programa trabalha visão executiva, governança, dados, aplicações práticas e projeto aplicado. Para orientação personalizada, preencha o formulário ou fale com um especialista pelo WhatsApp.";
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
