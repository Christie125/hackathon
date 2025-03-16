let popup = document.getElementById("popup");

function burst() {
    let img = document.createElement("img");
    img.src = "/images/exploded-fish.png";
    img.style.position = "fixed";
    img.style.top = "0";
    img.style.left = "50%";
    img.style.transform = "translateX(-50%)";
    document.body.appendChild(img);
    setTimeout(() => {
        let img2 = document.createElement("img");
        img.src = "/images/map4.png";
        img.style.position = "fixed";
        img.style.top = "20%";
        img.style.left = "50%";
        img.style.transform = "translateX(-50%)";
    document.body.appendChild(img);
    }, 3000);
}

function closePopup() {
    popup.classList.remove("open-popup");
}