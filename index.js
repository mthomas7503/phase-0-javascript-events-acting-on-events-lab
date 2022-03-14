

function moveDodgerRight() {
const leftNumbers = dodger.style.left.replace('px', '');
const left = parseInt(leftNumbers, 10);

if (left >= 360) {
dodger.style.left = `360px`}
else if (left >= 180) {dodger.style.left = `${left + 1}px`}
}

document.addEventListener('keydown', e => {if (e.key === "ArrowRight") {moveDodgerRight()}})

