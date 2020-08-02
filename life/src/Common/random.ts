import { BorderPolicy, ICellStyle } from "./Interfaces";

interface IRandom {
    seeds: (height: number, width: number, density: number) => boolean[][],
    boardSize: () => number,
    refreshFrequency: () => number,
    neighbors: () => number,
    borderPolicy: () => BorderPolicy,
    elevation: () => number,
    color: () => string,
    percentage: (max: number) => number,
    style: () => ICellStyle
}

const Random: IRandom = {

    seeds(height: number, width: number, density: number) {
        const result = new Array(height);
        for (let i = 0; i < width; i++) {
            result[i] = new Array(width);
        }

        const size = height * width;
        const arr = new Array(size).fill(false);
        const n = Math.floor(size * density / 10);

        for (let i = 0; i < n; i++) {
            arr[i] = true;
        }

        for (let i = 0; i < size; i++) {
            const other = randomInt(i, size);
            [arr[i], arr[other]] = [arr[other], arr[i]];
        }

        let k = 0;
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                result[i][j] = arr[k++];
            }
        }

        return result;
    },

    boardSize() {
        return randomInt(2, 21);
    },

    refreshFrequency() {
        return randomInt(1, 11);
    },

    neighbors() {
        return randomInt(0, 9);
    },
    
    borderPolicy() {
        return (["alive", "dead", "roll"] as ("alive" | "dead" | "roll")[])[randomInt(0, 3)];
    },

    elevation() {
        return randomInt(0, 11);
    },

    color() {
        return `rgb(${randomInt(0, 256)}, ${randomInt(0, 256)}, ${randomInt(0, 256)})`;
    },

    percentage(max: number) {
        return randomInt(0, max + 1);
    },

    style() {
        return {
            size: this.percentage(100),
            elevation: this.elevation(),
            borderRadius: this.percentage(50),
            borderWidth: this.percentage(50),
            color: this.color(),
            backgroundColor: this.color(),
            borderColor: this.color()
        }
    }
}

function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export default Random