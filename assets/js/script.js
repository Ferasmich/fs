document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    const percentages = document.querySelectorAll('.percentage');

    progressBars.forEach((bar, index) => {
        const target = bar.getAttribute('data-progress');
        const percentageElem = percentages[index];
        
        // Animate progress bar width
        bar.style.width = `${target}%`;

        // Animate percentage text
        let count = 0;
        const counter = setInterval(() => {
            if (count < target) {
                count++;
                percentageElem.textContent = `${count}%`;
            } else {
                clearInterval(counter);
            }
        }, 2000 / target);  // Adjust the speed of counter as per your need
    });
});
