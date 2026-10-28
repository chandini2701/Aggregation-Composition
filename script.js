document.addEventListener("DOMContentLoaded", function () {
  // Copy Java code
  const copyButtons = document.querySelectorAll(".copy-btn");

  copyButtons.forEach(function (button) {
    button.addEventListener("click", async function () {
      const codeId = button.getAttribute("data-copy");
      const codeElement = document.getElementById(codeId);

      if (!codeElement) {
        return;
      }

      try {
        await navigator.clipboard.writeText(codeElement.innerText);
        button.textContent = "Copied! ✓";
      } catch (error) {
        button.textContent = "Copy unavailable";
      }

      setTimeout(function () {
        button.textContent = "Copy code";
      }, 1800);
    });
  });

  // Aggregation and Composition knowledge quiz
  const quizOptions = document.querySelectorAll(".quiz-option");
  const feedback = document.getElementById("quiz-feedback");

  quizOptions.forEach(function (option) {
    option.addEventListener("click", function () {
      quizOptions.forEach(function (item) {
        item.classList.remove("correct", "wrong");
      });

      if (option.dataset.answer === "correct") {
        option.classList.add("correct");
        feedback.textContent =
          "Correct! Aggregation allows the Teacher to exist independently.";
        feedback.style.color = "#526b40";
      } else {
        option.classList.add("wrong");
        feedback.textContent =
          "Not quite. Think about whether the Teacher can exist without the Department.";
        feedback.style.color = "#a85d3d";
      }
    });
  });

  // Smooth navigation for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
