
const welcomeScreen = document.getElementById("welcomeScreen");
const lightningScreen = document.getElementById("lightningScreen");
const mainScreen = document.getElementById("mainScreen");

const loadingBar = document.getElementById("loadingBar");
const loadingPercent = document.getElementById("loadingPercent");
const loadingText = document.getElementById("loadingText");

const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openButton");
const instruction = document.getElementById("instruction");

// WELCOME SCREEN: 3 seconds
setTimeout(() => {
    welcomeScreen.classList.add("hidden");
    lightningScreen.classList.remove("hidden");

    startLoading();
}, 3000);


// LIGHTNING + LOADING
function startLoading() {
    const duration = 3000;
    const startTime = performance.now();

    function updateLoading(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const percent = Math.floor(progress * 100);

        loadingBar.style.width = percent + "%";
        loadingPercent.textContent = percent + "%";

        if (percent < 40) {
            loadingText.textContent = "Diyaarinta naqshadda...";
        } else if (percent < 75) {
            loadingText.textContent = "Diyaarinta baqshadda...";
        } else {
            loadingText.textContent = "Wax yar ayaa haray...";
        }

        if (progress < 1) {
            requestAnimationFrame(updateLoading);
        } else {
            loadingText.textContent = "Waa diyaar!";
            setTimeout(showEnvelope, 600);
        }
    }

    requestAnimationFrame(updateLoading);
}


// SHOW THE ENVELOPE
function showEnvelope() {
    lightningScreen.classList.add("hidden");
    mainScreen.classList.remove("hidden");
}


// OPEN ENVELOPE ON CLICK OR TOUCH
function openEnvelope() {
    if (envelope.classList.contains("opened")) {
        return;
    }

    envelope.classList.add("opened");

    instruction.textContent = "Farriintaada quruxda badan ❤️";
    openButton.textContent = "WAA LA FURAY";
}

openButton.addEventListener("click", openEnvelope);

envelope.addEventListener("click", openEnvelope);


// KEYBOARD SUPPORT
envelope.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openEnvelope();
    }
});