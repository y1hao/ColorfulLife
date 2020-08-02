import { BorderPolicy } from "./Interfaces";

interface IRandom {
    seeds: (height: number, width: number, density: number) => boolean[][],
    boardSize: () => number,
    refreshFrequency: () => number,
    neighbors: () => number,
    borderPolicy: () => BorderPolicy,
    elevation: () => number,
    color: () => string,
    percentage: (max: number) => number
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
        return 0;
    },

    refreshFrequency() {
        return 0;
    },

    neighbors() {
        return 0;
    },
    
    borderPolicy() {
        return "alive"
    },

    elevation() {
        return 0
    },

    color() {
        return ""
    },

    percentage(max: number) {
        return 0
    }
}

function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export default Random