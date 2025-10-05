// split every subtitle text into spans so each character sits on its own line
document.querySelectorAll(".subtitle").forEach(sub => {
  const text = sub.textContent.trim();
  sub.textContent = ""; // clear original
  [...text].forEach(char => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char; // keep spaces visible
    sub.appendChild(span);
  });
});

document.querySelectorAll(".letter-container").forEach(container => {
  const subtitle = container.querySelector(".subtitle");

  container.addEventListener("mouseenter", () => {
    // 👇 Center the subtitle on the hovered letter
    subtitle.style.top = "50%";
    subtitle.style.transform = "translate(-50%, -50%)";

    container.classList.add("expanded");

    // optional: debug to confirm
    console.log(
      "Hovered:", container.querySelector(".letter").textContent,
      "| Expanding from this letter"
    );
  });

  container.addEventListener("mouseleave", () => {
    // 👇 Return subtitle to resting position below the letter
    subtitle.style.top = "60px";
    subtitle.style.transform = "translateX(-50%)";
    container.classList.remove("expanded");
  });
});
