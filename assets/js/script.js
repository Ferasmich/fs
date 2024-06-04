document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    const percentages = document.querySelectorAll('.percentage');

    progressBars.forEach((bar, index) => {
        const target = bar.getAttribute('data-progress');
        const percentageElem = percentages[index];
        
        // Animate progress bar width
        setTimeout(() => {
            bar.style.width = `${target}%`;
        }, 500);  // Small delay to ensure animation starts from zero

        // Animate percentage text
        let count = 0;
        const increment = () => {
            if (count < target) {
                count++;
                percentageElem.textContent = `${count}%`;
                setTimeout(increment, 3000 / target);  // Adjust the speed of counter as per your need
            } else {
                percentageElem.textContent = `${target}%`;
            }
        };
        increment();
    });
});
