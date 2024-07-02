document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('sheep-canvas');
    const textContainer = document.querySelector('.text-container');
    const randomText = document.getElementById('random-text');
    const ctx = canvas.getContext('2d');
    let sheepImage;

    // 이미지 로드 후 초기화
    function initialize() {
        sheepImage = new Image();
        sheepImage.onload = function() {
            canvas.width = sheepImage.width;
            canvas.height = sheepImage.height;
            ctx.drawImage(sheepImage, 0, 0);
        };
        sheepImage.src = 'images/sheep.jpg';

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseout', handleMouseOut);

        // 텍스트 랜덤으로 업데이트
        updateRandomText();
    }

    // 마우스 이동 처리 함수
    function handleMouseMove(event) {
        const mouseX = event.offsetX;
        const mouseY = event.offsetY;

        // 특정 영역의 투명도 조절
        const radius = 5; // 마우스 올린 위치에서의 투명 반경
        const imageData = ctx.getImageData(mouseX - radius, mouseY - radius, radius * 2, radius * 2);
        const pixels = imageData.data;

        for (let i = 3; i < pixels.length; i += 4) {
            pixels[i] *= 0.9; // alpha 값을 10% 감소 (90% 투명)
        }

        ctx.putImageData(imageData, mouseX - radius, mouseY - radius);
    }

    // 마우스 이벤트 리셋 함수
    function handleMouseOut() {
        ctx.drawImage(sheepImage, 0, 0);
    }

    // 텍스트 랜덤으로 업데이트하는 함수
    function updateRandomText() {
        const texts = [
            '텍스트 1',
            '텍스트 2',
            '텍스트 3',
            '텍스트 4',
            '텍스트 5',
            '텍스트 6',
            '텍스트 7',
            '텍스트 8'
        ];
        const randomIndex = getRandomInt(0, texts.length - 1);
        randomText.textContent = texts[randomIndex];
    }

    // 랜덤 정수 생성 함수
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // 초기화 함수 호출
    initialize();
});
