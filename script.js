const prev = document.getElementById('prev');
const next = document.getElementById('next');
const progress = document.getElementById('progress');

const circles = document.querySelectorAll('.circle');

let = currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
        console.log(currentActive);

    }

    update();
})

prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
        console.log(currentActive);

    }

    update();
})


function update() {
    circles.forEach((circle, idx) => {

        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }

    })

    let widthu = (currentActive - 1) / (circles.length - 1) * 100 + "%";
    console.log(widthu);
    progress.style.width = widthu;

    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === 4) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}