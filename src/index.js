class Sorter {
    constructor() {
        this.array = [];
        this.comparator = (a, b) => a - b;
    }

    add(element) {
        this.array.push(element);
    }

    at(index) {
        return this.array[index];
    }

    get length() {
        return this.array.length;
    }

    toArray() {
        return this.array;
    }

    sort(indices) {
        indices.sort();
        let tempArray = [];
        for (let i = 0; i < indices.length; i++) {
            tempArray.push(this.array[indices[i]]);
        }
        tempArray.sort(this.comparator);

        for (let i = 0; i < tempArray.length; i++) {
            this.array[indices[i]] = tempArray[i];
        }
    }

    setComparator(compareFunction) {
        this.comparator = compareFunction;
    }
}

module.exports = Sorter;