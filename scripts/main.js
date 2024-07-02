document.addEventListener('DOMContentLoaded', function() {
    const sheep = document.getElementById('sheep');
    const texts = document.querySelectorAll('.random-text');

    sheep.addEventListener('mouseover', function() {
        texts.forEach(text => {
            text.classList.add('active');
        });
    });

    sheep.addEventListener('mouseout', function() {
        texts.forEach(text => {
            text.classList.remove('active');
        });
    });

    function randomizeTextDisplay() {
        const randomIndex = Math.floor(Math.random() * texts.length);
        texts.forEach((text, index) => {
            if (index === randomIndex) {
                text.classList.add('active');
            } else {
                text.classList.remove('active');
            }
        });
    }

    setInterval(randomizeTextDisplay, 2000); // 2초마다 랜덤 텍스트 표시
});
