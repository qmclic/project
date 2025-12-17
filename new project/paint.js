// where
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const brushSizeInput = document.getElementById('brushSize');
const clearBtn = document.getElementById('clearBtn');
const saveBtn = document.getElementById('saveBtn');
const undoBtn = document.getElementById('undoBtn');
const redoBtn = document.getElementById('redoBtn');

canvas.style.touchAction = 'none';

let painting = false;
let brushColor = colorPicker.value;
let brushSize = Number(brushSizeInput.value);

// undo redo state
const undoStack = [];
const redoStack = [];
const MAX_HISTORY = 50;

// what do
function fillBackground() {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function updateBrush() {
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = brushColor;
}

function saveState(stack, clearRedo = false) {
    if (stack.length >= MAX_HISTORY) {
        stack.shift();
    }
    stack.push(canvas.toDataURL());
    if (clearRedo) {
        redoStack.length = 0;
    }
}

function restoreState(stackFrom, stackTo) {
    if (stackFrom.length === 0) return;

    if (stackTo.length >= MAX_HISTORY) {
        stackTo.shift();
    }

    stackTo.push(canvas.toDataURL());

    const img = new Image();
    img.src = stackFrom.pop();
    img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
    };
}

function startDrawing(e) {
    canvas.setPointerCapture(e.pointerId);
    painting = true;
    saveState(undoStack, true);
    ctx.beginPath();
    draw(e);
}

function stopDrawing(e) {
    painting = false;
    canvas.releasePointerCapture(e.pointerId);
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

// when
fillBackground();
updateBrush();
saveState(undoStack);

canvas.addEventListener('pointerdown', startDrawing);
canvas.addEventListener('pointerup', stopDrawing);
canvas.addEventListener('pointerout', stopDrawing);
canvas.addEventListener('pointermove', draw);

colorPicker.addEventListener('input', e => {
    brushColor = e.target.value;
    updateBrush();
});

brushSizeInput.addEventListener('input', e => {
    brushSize = Number(e.target.value);
    updateBrush();
});

clearBtn.addEventListener('click', () => {
    saveState(undoStack, true);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fillBackground();
});

undoBtn.addEventListener('click', () => {
    restoreState(undoStack, redoStack);
});

redoBtn.addEventListener('click', () => {
    restoreState(redoStack, undoStack);
});

// keyboard shortcuts
document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 'z') {
        e.preventDefault();
        restoreState(undoStack, redoStack);
    }
    if (e.ctrlKey && (e.key === 'y' || (e.shiftKey && e.key === 'Z'))) {
        e.preventDefault();
        restoreState(redoStack, undoStack);
    }
});

// save button
saveBtn.addEventListener('click', () => {
    canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'drawing.jpg';
        link.click();

        URL.revokeObjectURL(url);
    }, 'image/jpeg', 0.9);
});
