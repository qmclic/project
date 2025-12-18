const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

const colorPicker = document.getElementById("colorPicker");
const brushSizeInput = document.getElementById("brushSize");
const clearBtn = document.getElementById("clearBtn");
const saveBtn = document.getElementById("saveBtn");
const undoBtn = document.getElementById("undoBtn");
const redoBtn = document.getElementById("redoBtn");

canvas.style.touchAction = "none";

let painting = false;
let brushColor = colorPicker.value;
let brushSize = Number(brushSizeInput.value);

/* Undo / redo */
const undoStack = [];
const redoStack = [];
const MAX_HISTORY = 50;

/* Canvas helpers */
function fillBackground() {
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function updateBrush() {
  ctx.lineWidth = brushSize;
  ctx.lineCap = "round";
  ctx.strokeStyle = brushColor;
}

function saveState(stack, clearRedo = false) {
  if (stack.length >= MAX_HISTORY) stack.shift();
  stack.push(canvas.toDataURL());
  if (clearRedo) redoStack.length = 0;
}

function restoreState(from, to) {
  if (!from.length) return;

  if (to.length >= MAX_HISTORY) to.shift();
  to.push(canvas.toDataURL());

  const img = new Image();
  img.src = from.pop();
  img.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
  };
}

/* Coordinate scaling */
function getCanvasPos(e) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;

  return {
    x: (e.clientX - rect.left) * scaleX,
    y: (e.clientY - rect.top) * scaleY
  };
}

/* Drawing */
function startDrawing(e) {
  canvas.setPointerCapture(e.pointerId);
  painting = true;
  saveState(undoStack, true);
  ctx.beginPath();

  const pos = getCanvasPos(e);
  ctx.moveTo(pos.x, pos.y);
}

function stopDrawing(e) {
  painting = false;
  canvas.releasePointerCapture(e.pointerId);
  ctx.beginPath();
}

function draw(e) {
  if (!painting) return;

  const pos = getCanvasPos(e);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
}

/* Init */
fillBackground();
updateBrush();
saveState(undoStack);

/* Events */
canvas.addEventListener("pointerdown", startDrawing);
canvas.addEventListener("pointermove", draw);
canvas.addEventListener("pointerup", stopDrawing);
canvas.addEventListener("pointerout", stopDrawing);

colorPicker.addEventListener("input", e => {
  brushColor = e.target.value;
  updateBrush();
});

brushSizeInput.addEventListener("input", e => {
  brushSize = Number(e.target.value);
  updateBrush();
});

clearBtn.addEventListener("click", () => {
  saveState(undoStack, true);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fillBackground();
});

undoBtn.addEventListener("click", () => restoreState(undoStack, redoStack));
redoBtn.addEventListener("click", () => restoreState(redoStack, undoStack));

document.addEventListener("keydown", e => {
  if (e.ctrlKey && e.key === "z") {
    e.preventDefault();
    restoreState(undoStack, redoStack);
  }
  if (e.ctrlKey && (e.key === "y" || (e.shiftKey && e.key === "Z"))) {
    e.preventDefault();
    restoreState(redoStack, undoStack);
  }
});

saveBtn.addEventListener("click", () => {
  canvas.toBlob(blob => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "drawing.jpg";
    link.click();
    URL.revokeObjectURL(link.href);
  }, "image/jpeg", 0.9);
});

/* Dark mode */
document.getElementById("darkModeToggle")
  .addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
