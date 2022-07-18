const score = document.querySelector('.score');
const control_buttons = document.querySelectorAll('.control');
const history_container = document.querySelector('.history_container');
const undo = document.querySelector('.undo');
const redo = document.querySelector('.redo');

const undoed_state = [];



control_buttons.forEach(node => {
    node.addEventListener('click', () => {
        onClickButton(node);
    })
})

undo.addEventListener('click', () => {
    onUndoClick();
})
redo.addEventListener('click', () => {
    onRedoClick();
})

// A reusable function that will work for all the control buttons and will update the score.
function onClickButton(node) {
    console.log(node.textContent);
    const numberToBeAdded = +node.textContent;
    const previousScore = +score.textContent;
    score.textContent = +score.textContent + numberToBeAdded;

    // Update the history container.
    const element = document.createElement('div');
    element.className = 'row';

    const firstColumn = document.createElement('div');
    const secondColumn = document.createElement('div');
    element.appendChild(firstColumn);
    element.appendChild(secondColumn);

    firstColumn.textContent = `${node.textContent}`;
    secondColumn.textContent = ` (${previousScore} -> ${score.textContent})`;
    history_container.appendChild(element);
}


function onUndoClick() {
    console.log("length", history_container.childNodes.length);
    if (history_container.childNodes.length !== 0) {
        redo.disabled = false;
        const removed_child = history_container.removeChild(history_container.lastChild);
        undoed_state.push(removed_child);
        if (undoed_state.length === 0) {
            redo.disabled = true;
        }
        score.textContent = +score.textContent + (removed_child.childNodes[0].textContent * -1);
    }
}
function onRedoClick() {
    if (undoed_state.length) {
        const popped = undoed_state.pop();
        if (undoed_state.length === 0) redo.disabled = true;
        history_container.appendChild(popped);
        score.textContent = +score.textContent + +popped.childNodes[0].textContent;
    }
}