document.addEventListener("DOMContentLoaded", () => {
    const sheepImage = document.getElementById("sheepImage");
    const textContainer = document.getElementById("textContainer");
    const texts = ["텍스트1", "텍스트2", "텍스트3", "텍스트4", "텍스트5", 
                   "텍스트6", "텍스트7", "텍스트8", "텍스트9", "텍스트10"];

    const imageWidth = sheepImage.offsetWidth;
    const imageHeight = sheepImage.offsetHeight;

    // 이미지 크기에 맞게 텍스트 요소를 생성합니다.
    for (let y = 0; y < imageHeight; y += 10) {
        for (let x = 0; x < imageWidth; x += 10) {
            const div = document.createElement("div");
            div.className = "text";
            div.style.width = "10px";
            div.style.height = "10px";
            div.style.position = "absolute";
            div.style.left = `${x}px`;
            div.style.top = `${y}px`;
            div.innerText = texts[Math.floor(Math.random() * texts.length)];
            textContainer.appendChild(div);
        }
    }

    textContainer.addEventListener("mouseover", (event) => {
        if (event.target.classList.contains("text")) {
            event.target.style.opacity = "1";
        }
    });

    textContainer.addEventListener("mouseout", (event) => {
        if (event.target.classList.contains("text")) {
            event.target.style.opacity = "0";
        }
    });
});
