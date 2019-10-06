class TicTacToe {
    constructor() {
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        this.isX = true;
    }

    getCurrentPlayerSymbol() {
        return this.isX ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] !== null) return;
        this.field[rowIndex][columnIndex] = this.isX ? 'x' : 'o';
        this.isX = !this.isX;
    }

    isFinished() {
        if(this.getWinner() !== null || this.isDraw()) {
            return true;
        }
        return false;
    }

    getWinner() {
        const lines = [
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 0], [1 ,0], [2 ,0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]],
        ];
        let field = this.field;
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (field[a[0]][a[1]] && field[a[0]][a[1]] === field[b[0]][b[1]] && field[a[0]][a[1]] === field[c[0]][c[1]]) {
                return field[a[0]][a[1]];
            }
        }
        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.field[i][j] === null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        return this.getWinner() === null && this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
