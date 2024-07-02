document.addEventListener('DOMContentLoaded', function() {
    const sheepImage = document.getElementById('sheep-image');
    const textContainer = document.querySelector('.text-container');
    const randomText = document.getElementById('random-text');
    const imageContainer = document.querySelector('.image-container');

    // 마우스 위치에서 이미지 중심까지의 거리를 계산하는 함수
    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }

    // 이미지 컨테이너에서의 마우스 이동 이벤트
    imageContainer.addEventListener('mousemove', function(e) {
        const imageRect = sheepImage.getBoundingClientRect();
        const mouseX = e.clientX - imageRect.left; // 이미지 내 마우스 X 위치
        const mouseY = e.clientY - imageRect.top;  // 이미지 내 마우스 Y 위치
        const imageCenterX = imageRect.width / 2;   // 이미지 중심 X
        const imageCenterY = imageRect.height / 2;  // 이미지 중심 Y

        // 마우스와 이미지 중심 사이의 거리 계산
        const distance = calculateDistance(imageCenterX, imageCenterY, mouseX, mouseY);
        // 최대 거리 계산 (투명도 0이 되는 거리)
        const maxDistance = imageRect.width / 2 + 5;

        // 거리에 따른 투명도 계산
        let opacity = 1 - (distance / maxDistance) * 0.1;
        opacity = Math.max(opacity, 0); // 최소 투명도 0으로 설정

        // 양 이미지에 투명도 적용
        sheepImage.style.opacity = opacity.toFixed(1); // 소수점 첫째 자리까지 반올림
    });

    // 마우스가 이미지 밖으로 나갈 경우 투명도 초기화
    imageContainer.addEventListener('mouseout', function() {
        sheepImage.style.opacity = 1; // 투명도 초기화
    });

    // 텍스트 랜덤으로 업데이트하는 함수 (이전 예제와 동일)
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

    // 양 이미지에 마우스 오버 이벤트 (이전 예제와 동일)
    sheepImage.addEventListener('mouseover', function() {
        textContainer.style.display = 'block'; // 텍스트 컨테이너 표시
        updateRandomText(); // 텍스트 업데이트
    });

    // 양 이미지에서 마우스 아웃 이벤트 (이전 예제와 동일)
    sheepImage.addEventListener('mouseout', function() {
        textContainer.style.display = 'none'; // 텍스트 컨테이너 숨김
    });
});
