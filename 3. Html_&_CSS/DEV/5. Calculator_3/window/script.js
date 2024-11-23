// Перетаскивание окна
const draggable = document.getElementById('draggable');
const header = document.getElementById('header');

header.addEventListener('mousedown', (e) => {
    let offsetX = e.clientX - draggable.getBoundingClientRect().left;
    let offsetY = e.clientY - draggable.getBoundingClientRect().top;

    function mouseMoveHandler(e) {
        draggable.style.left = `${e.clientX - offsetX}px`;
        draggable.style.top = `${e.clientY - offsetY}px`;
        draggable.style.position = 'absolute';
    }

    function mouseUpHandler() {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
});

// Изменение размера окна
const resizer = document.getElementById('resizer');

resizer.addEventListener('mousedown', (e) => {
    e.preventDefault();

    function mouseMoveHandler(e) {
        draggable.style.width = `${e.clientX - draggable.getBoundingClientRect().left}px`;
        draggable.style.height = `${e.clientY - draggable.getBoundingClientRect().top}px`;
    }

    function mouseUpHandler() {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
});
