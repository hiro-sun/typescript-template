export class Cell<T> {
    next: Cell<T>;
    value: T;
    setValue(v: T) {
        this.value = v;
    }

    getValue(): T {
        return this.value;
    }
}
