document.addEventListener("DOMContentLoaded", () => {
    const descriptions = document.querySelectorAll(".card-text");
    const container = document.querySelector(".Project");

    descriptions.forEach((description) => {
        const fullText = description.textContent.trim();
        if (description.scrollHeight > description.offsetHeight) {
            const showMore = document.createElement("span");
            showMore.classList.add("show-more");
            showMore.textContent = " See more";
            description.textContent = fullText.slice(0, 50).trim() + "..."; // Adjust 50 to desired truncation
            description.appendChild(showMore);

            showMore.addEventListener("click", () => {
                if (description.classList.contains("expanded")) {
                    description.classList.remove("expanded");
                    description.textContent = fullText.slice(0, 50).trim() + "...";
                    description.appendChild(showMore);
                    showMore.textContent = " See more";

                    // Adjust container height back to 70vh
                    container.style.height = "70vh";
                } else {
                    description.classList.add("expanded");
                    description.textContent = fullText;
                    description.appendChild(showMore);
                    showMore.textContent = " See less";

                    // Adjust container height to 100vh
                    container.style.height = "100vh";
                }
            });
        }
    });
});
