function attachGradientEvents() {

    let gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove', showWidth);
    gradient.addEventListener('mouseout', hideWidth);

    function showWidth(event) {
        let gradientWidth = gradient.clientWidth;
        let offsetX = event.offsetX;
        let percent = offsetX / (gradientWidth - 1);
        document.getElementById('result').textContent = Math.trunc(percent * 100) + '%';
    }

    function hideWidth() {
        document.getElementById('result').textContent = '';
    }
}