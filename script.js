window.onload = function() {
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateLove);
}

function calculateLove() {
    let yourName = document.getElementById("your-name").value.toLowerCase();
    let crushName = document.getElementById("crush-name").value.toLowerCase();

    if (yourName != "" && crushName != "") {
        // Check for the specific names "Yilun" and "Yechan"
        if ((yourName === "yilun" && crushName === "yechan") || (yourName === "yechan" && crushName === "yilun")) {
            document.getElementById("result-message").innerText = "Congratulations! Your love is 100% true";
            document.getElementById("result-percentage").innerText = "";
        } else {
            // For other names, generate a random percentage
            let percentage = Math.floor(Math.random() * 101); // 0-100
            document.getElementById("result-message").innerText = yourName + " and " + crushName + "'s chance of love:";
            document.getElementById("result-percentage").innerText = percentage.toString() + "%";
        }
    }
}
