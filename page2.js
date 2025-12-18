// watchlist to do list

// where
const list = document.getElementById('todo-list');
const newTaskInput = document.getElementById('new-task');
const addBtn = document.getElementById('add-task');
const clearWatchedBtn = document.getElementById('clear-watched');
const resetBtn = document.getElementById('reset-list');
const originalHTML = list.innerHTML;

// what do
function saveState() {
    const state = {};
    const items = list.querySelectorAll('li');

    for (let item of items) {
        const checkbox = item.querySelector('input');
        const html = item.querySelector('span').innerHTML;

        state[checkbox.dataset.id] = {
            html,
            checked: checkbox.checked
        };
    }

    localStorage.setItem('todoState', JSON.stringify(state));
}

function addTask(html, checked = false, id = Date.now().toString()) {
    const li = document.createElement('li');

    li.innerHTML = `
        <label>
            <input type="checkbox" data-id="${id}">
            <span>${html}</span>
        </label>
    `;

    const checkbox = li.querySelector('input');
    checkbox.checked = checked;
    checkbox.addEventListener('change', saveState);

    list.appendChild(li);
}

function sortList() {
    const items = [];

    const lis = list.querySelectorAll('li');
    for (let li of lis) {
        const checkbox = li.querySelector('input');
        const html = li.querySelector('span').innerHTML;

        const text = html.replace(/<[^>]*>/g, '').trim();

        items.push({ id: checkbox.dataset.id, html, text, checked: checkbox.checked });
    }

    items.sort((a, b) => a.text.localeCompare(b.text, 'en', { sensitivity: 'base' }));

    list.innerHTML = '';

    for (let item of items) {
        addTask(item.html, item.checked, item.id);
    }

    saveState();
}

function loadState() {
    const saved = JSON.parse(localStorage.getItem('todoState'));
    if (!saved) return;

    list.innerHTML = '';

    for (let id in saved) {
        addTask(saved[id].html, saved[id].checked, id);
    }

    sortList();
}

function clearWatched() {
    const items = list.querySelectorAll('li');

    for (let item of items) {
        const checkbox = item.querySelector('input');
        if (checkbox.checked) {
            item.remove();
        }
    }

    saveState();
}

function resetList() {
    if (!confirm('Reset watchlist to original?')) return;

    localStorage.removeItem('todoState');
    list.innerHTML = originalHTML;

    const checkboxes = list.querySelectorAll('input[type="checkbox"]');
    for (let checkbox of checkboxes) {
        checkbox.addEventListener('change', saveState);
    }

    sortList();
}

// when
addBtn.addEventListener('click', () => {
    const value = newTaskInput.value.trim();
    if (!value) return;

    //italics for manual adds
    const html = `<i>${value}</i>`;
    addTask(html);
    sortList();
    newTaskInput.value = '';
});

newTaskInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});

resetBtn.addEventListener('click', resetList);
clearWatchedBtn.addEventListener('click', clearWatched);

loadState();





// diff background

const darkModeBtn = document.getElementById("darkModeToggle");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});



// poll

  const form = document.getElementById("pollForm");
  const results = document.getElementById("results");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.style.display = "none";
    results.classList.remove("hidden");
  });

