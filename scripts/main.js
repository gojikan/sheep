document.addEventListener('DOMContentLoaded', function() {
    const highlightCircle = document.getElementById('highlight');
    const textContainer = document.querySelector('.text-container');
    const randomText = document.getElementById('random-text');

    // Generate a random number between min and max (inclusive)
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to update text randomly
    function updateRandomText() {
        const texts = [
            'Text 1',
            'Text 2',
            'Text 3',
            'Text 4',
            'Text 5',
            'Text 6',
            'Text 7',
            'Text 8'
        ];
        const randomIndex = getRandomInt(0, texts.length - 1);
        randomText.textContent = texts[randomIndex];
    }

    // Event listener for mouseover on sheep image
    document.getElementById('sheep-image').addEventListener('mouseover', function() {
        highlightCircle.style.display = 'block'; // Show highlight circle

        // Gradually increase transparency of highlight circle
        let opacity = 0.1;
        const interval = setInterval(function() {
            opacity += 0.01; // Increase opacity by 1% (0.01)
            highlightCircle.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
            if (opacity >= 0.2) { // Adjust final transparency level here (0.2 for 20%)
                clearInterval(interval);
                textContainer.style.display = 'block'; // Show text container
                updateRandomText(); // Update random text when visible
            }
        }, 10); // Adjust interval for smoother effect (lower value means smoother but more CPU intensive)
    });

    // Event listener for mouseout on sheep image
    document.getElementById('sheep-image').addEventListener('mouseout', function() {
        highlightCircle.style.display = 'none'; // Hide highlight circle
        highlightCircle.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'; // Reset highlight circle opacity
        textContainer.style.display = 'none'; // Hide text container
    });
});
