document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("sheepCanvas");
    const ctx = canvas.getContext("2d");

    const texts = ["텍스트1", "텍스트2", "텍스트3", "텍스트4", "텍스트5", 
                   "텍스트6", "텍스트7", "텍스트8", "텍스트9", "텍스트10"];
    const selectedText = texts[Math.floor(Math.random() * texts.length)];

    const sheepImage = new Image();
    sheepImage.src = 'images/sheep.jpg';
    sheepImage.onload = () => {
        canvas.width = sheepImage.width;
        canvas.height = sheepImage.height;
        ctx.drawImage(sheepImage, 0, 0);

        // 텍스트를 가운데에 그리기
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(selectedText, canvas.width / 2, canvas.height / 2);
    };

    let isDrawing = false;

    canvas.addEventListener("mousedown", () => {
        isDrawing = true;
    });

    canvas.addEventListener("mouseup", () => {
        isDrawing = false;
    });

    canvas.addEventListener("mousemove", (event) => {
        if (isDrawing) {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            ctx.clearRect(x, y, 20, 20); // 마우스 위치에서 20x20 픽셀을 지웁니다.
        }
    });
});
