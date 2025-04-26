// Change text content dynamically and animate
document.getElementById("change-text-btn").addEventListener("click", function() {
    const description = document.getElementById("description");
    description.textContent = "The magic is happening! 🌟";
    description.style.color = "#ff4081";
    description.style.fontWeight = "bold";
    description.style.transition = "all 0.5s ease";
});

// Add multiple new elements with animation
document.getElementById("add-element-btn").addEventListener("click", function() {
    const dynamicArea = document.getElementById("dynamic-area");

    // Create a new colorful card
    const newCard = document.createElement("div");
    newCard.classList.add("card");

    // Add content inside the card
    newCard.innerHTML = `
        <h3>🎉 New Surprise</h3>
        <p>This card was added dynamically!</p>
    `;

    // Append the new card to the dynamic area
    dynamicArea.appendChild(newCard);

    // Animate the card
    setTimeout(() => {
        newCard.style.opacity = "1";
        newCard.style.transform = "scale(1)";
    }, 100); // small delay to trigger animation
});

// Remove the last added element
document.getElementById("remove-element-btn").addEventListener("click", function() {
    const dynamicArea = document.getElementById("dynamic-area");
    if (dynamicArea.lastElementChild) {
        dynamicArea.removeChild(dynamicArea.lastElementChild);
    }
});
