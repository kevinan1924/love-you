window.onload = function() {
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateLove);
}

function calculateLove() {
    let yourName = document.getElementById("your-name").value.toLowerCase();
    let crushName = document.getElementById("crush-name").value.toLowerCase();

    let percentage = 0;  // Default value

    // Check for the specific names "Yilun" and "Yechan"
    if ((yourName === "yilun" && crushName === "yechan") || (yourName === "yechan" && crushName === "yilun")) {
        console.log("Congratulations! Your love is 100% true");
        document.getElementById("result-message").innerText = "Congratulations! Your love is 100% true";
    } else {
        // For other names, generate a random percentage
        percentage = Math.floor(Math.random() * 101); // 0-100
        console.log(yourName + " and " + crushName + "'s chance of love: " + percentage + "%");
        document.getElementById("result-message").innerText = yourName + " and " + crushName + "'s chance of love:";
    }

    // Display the love percentage
    document.getElementById("result-percentage").innerText = percentage.toString() + "%";
}
