/* ========================================
   script.js — Apple Store JavaScript
   ======================================== */

// 1. Select HTML elements
const heading = document.querySelector("#heading");
const message = document.querySelector("#message");
const status = document.querySelector("#status");
const changeButton = document.querySelector("#changeButton");
const resetButton = document.querySelector("#resetButton");

// 2. Save the original background color
const originalBackground = document.body.style.backgroundColor;

// 3. Activate JavaScript when the first button is clicked
changeButton.addEventListener("click", function () {

    // Change the heading
    heading.textContent = "🚀 JavaScript is Working!";

    // Change the paragraph
    message.textContent =
        "Amazing! JavaScript has changed the content of this webpage.";

    // Change the page background
    document.body.style.backgroundColor = "#d1fae5";

    // Change the status message
    status.textContent = "✅ Website successfully updated!";

    // Change the button text
    changeButton.textContent = "🎉 JavaScript Activated";
});

// 4. Restore the original content when Reset is clicked
resetButton.addEventListener("click", function () {

    heading.textContent = "🍎 Welcome to Apple Store!";

    message.textContent =
        "Discover your next favorite Apple device.";

    document.body.style.backgroundColor = originalBackground;

    status.textContent = "JavaScript is ready to use!";

    changeButton.textContent = "✨ Activate JavaScript";
});

