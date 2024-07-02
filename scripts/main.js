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
        const radius = 10; // 마우스 올린 위치에서의 투명 반경
        ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스 클리어
        ctx.globalAlpha = 1; // 초기 투명도

        // 마우스 위치 주변의 이미지 그리기
        ctx.drawImage(sheepImage, 0, 0);
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, radius, 0, 2 * Math.PI);
        ctx.clip(); // 클리핑 영역 설정
        ctx.clearRect(0, 0, canvas.width, canvas.height); // 클리핑 영역 지우기
        ctx.globalAlpha = 0.9; // 클리핑 영역 투명도 설정
        ctx.drawImage(sheepImage, 0, 0); // 클리핑 영역에 이미지 그리기
        ctx.globalAlpha = 1; // 투명도 원래대로 복원
    }

    // 마우스 이벤트 리셋 함수
    function handleMouseOut() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스 클리어
        ctx.drawImage(sheepImage, 0, 0); // 원래 이미지 그리기
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
