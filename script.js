const SERVER_IP = "wirelinerp.nodecraft.gg:30120";
const SERVER_STATUS_URL = "https://wirelinerp-status.nlee342905.workers.dev/";
const DISCORD_URL = "YOUR_DISCORD_LINK";
const APPLY_URL = "YOUR_APPLICATION_LINK";

document.getElementById("discord-link").href = DISCORD_URL;
document.getElementById("discord-nav").href = DISCORD_URL;
document.getElementById("apply-link").href = APPLY_URL;
document.getElementById("join-server").href = `fivem://connect/${SERVER_IP}`;

async function checkServer() {
    try {
        const response = await fetch(SERVER_STATUS_URL);
        const data = await response.json();

        document.getElementById("server-status").textContent = "Online";
        document.getElementById("player-count").textContent =
            `Players: ${data.clients} / ${data.maxClients}`;
        document.getElementById("nav-player-count").textContent =
    `${data.clients} / ${data.maxClients} ONLINE`;
    } catch (error) {
        document.getElementById("server-status").textContent = "Offline";
        document.getElementById("player-count").textContent = "Players: -- / --";
    }
}

checkServer();
setInterval(checkServer, 30000);

function openCarImage(image) {

    const lightbox = document.getElementById("car-lightbox");
    const lightboxImage = document.getElementById("car-lightbox-image");

    lightboxImage.src = image;
    lightbox.classList.add("active");
}

function closeCarImage() {

    const lightbox = document.getElementById("car-lightbox");

    lightbox.classList.remove("active");
}
