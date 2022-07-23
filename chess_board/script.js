const board = document.querySelector(".chess_board");

// Create Rows and Cells.
(function createCell() {
    for (let i = 1; i <= 8; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        board.appendChild(row);
    }
    const rows = document.querySelectorAll('.row');

    for (let i = 0; i < rows.length; i++) {
        // Add 8 cells.
        for (let j = 0; j <= 7; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            if (i % 2 == 0 && j % 2 != 0) {
                cell.classList.add("black_cell");
            }
            else if (i % 2 != 0 && j % 2 == 0) {
                cell.classList.add("black_cell");
            }
            rows[i].appendChild(cell);
            // Adding Event listener to each cell;
            cell.addEventListener('click', () => {
                onclick(i, j);
            })
        }
    }
})();

function onclick(row, col) {
    // first remove all red cells that are already selected.
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        const cells = row.childNodes;
        cells.forEach(cell => {
            cell.classList.remove("red_cell");
        })
    })
    let i = row;
    let j = col;
    while (i >= 0 && j >= 0) {
        rows[i].childNodes[j].classList.add("red_cell");
        i--;
        j--;
    }

    let l = row;
    let m = col;
    while (l <= 7 && m <= 7) {
        rows[l].childNodes[m].classList.add("red_cell");
        l++;
        m++;
    }

    let x = row;
    let y = col;
    while (x >= 0 && y <= 7) {
        rows[x].childNodes[y].classList.add("red_cell");
        x--;
        y++;
    }

    let a = row;
    let b = col;
    while (a <= 7 && y >= 0) {
        rows[a].childNodes[b].classList.add("red_cell");
        a++;
        b--;
    }


}