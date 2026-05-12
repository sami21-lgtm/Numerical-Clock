document.addEventListener("DOMContentLoaded", () => {
    const clockContainer = document.getElementById("clockContainer");
    const hourHand = document.getElementById("hourHand");
    const minHand = document.getElementById("minHand");
    const secHand = document.getElementById("secHand");
    
    const numbersContainer = document.querySelector(".numbers-container");
    const ticksContainer = document.querySelector(".ticks-container");

    // 1. Generate Numbers (1 to 12)
    for (let i = 1; i <= 12; i++) {
        const numElement = document.createElement("div");
        numElement.classList.add("num");
        numElement.innerText = i;
        numElement.style.transform = `rotate(${i * 30}deg)`;
        
        // Inverse rotate the inner text numbers mapping rendering standard straight alignment 
        const innerTextFix = document.createElement("div");
        innerTextFix.textContent = i;
        innerTextFix.style.transform = `rotate(${-i * 30}deg)`;
        numElement.textContent = '';
        numElement.appendChild(innerTextFix);
        
        numbersContainer.appendChild(numElement);
    }

    // 2. Generate Minute/Second 60 Ticks
    for (let i = 0; i < 60; i++) {
        const tickElement = document.createElement("div");
        tickElement.classList.add("tick");
        if (i % 5 === 0) {
            tickElement.classList.add("major"); // Main hour points standard bolding logic
        }
        tickElement.style.transform = `rotate(${i * 6}deg)`;
        ticksContainer.appendChild(tickElement);
    }

    // 3. Keep Clock Hands Running Smoothly
    function updateClock() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        // Exact rotational mapping conversion degree logic formulas
        const secDegree = (seconds / 60) * 360;
        const minDegree = (minutes / 60) * 360 + (seconds / 60) * 6;
        const hourDegree = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;

        secHand.style.transform = `translateX(-50%) rotate(${secDegree}deg)`;
        minHand.style.transform = `translateX(-50%) rotate(${minDegree}deg)`;
        hourHand.style.transform = `translateX(-50%) rotate(${hourDegree}deg)`;
    }

    // Run clock engine standard loop logic
    setInterval(updateClock, 1000);
    updateClock();

    // 4. State Management Machine - Cycle themes every 5 seconds
    let currentThemeState = 1;

    setInterval(() => {
        currentThemeState++;
        if (currentThemeState > 3) {
            currentThemeState = 1; // Cycle loop reset
        }

        // Apply state conditional rendering configuration styles classes
        if (currentThemeState === 1) {
            clockContainer.classList.remove("theme-2", "theme-3");
        } else if (currentThemeState === 2) {
            clockContainer.classList.remove("theme-3");
            clockContainer.classList.add("theme-2");
        } else if (currentThemeState === 3) {
            clockContainer.classList.remove("theme-2");
            clockContainer.classList.add("theme-3");
        }
    }, 5000); // Trigger transition point sequence precisely every 5000 milliseconds
});
