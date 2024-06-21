const left = document.getElementById("left-side");

const handleOnMove = e => {
    const p = e.clintX / window.innerWidth * 100;
    left.style.width = '${p}%'
}

document.onmousemove = e => handleOnMove(e);
document.ontouchmove = e => handleOnMove(e.touches[0]);