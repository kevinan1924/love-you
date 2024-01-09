document.getElementById("calculate").addEventListener("click", function() {
    var yourName = document.getElementById("your-name").value.toLowerCase();
    var crushName = document.getElementById("crush-name").value.toLowerCase();

    // Check for the specific names "Yilun" and "Yechan"
    if ((yourName === "yilun" && crushName === "yechan") || (yourName === "yechan" && crushName === "yilun")) {
        document.getElementById("result-message").innerHTML = "Congratulations! Your love is 100% true";
        document.getElementById("result-percentage").innerHTML = "";
    } else {
        // For other names, generate a random percentage
        var percentage = Math.floor(Math.random() * 101); // 0-100
        document.getElementById("result-message").innerHTML = "Your love percentage is calculated based on your algorithm.";
        document.getElementById("result-percentage").innerHTML = "Love Percentage: " + percentage + "%";
    }
});
