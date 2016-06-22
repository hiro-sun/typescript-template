import {Cell} from './cell';

export class List<T> {
    private header: Cell<T>;
    constructor(data_list?:T[]) {
        this.header = new Cell<T>();
        if (data_list) {
            for (let i=0; i<data_list.length; i++) {
                this.add(data_list[i]);
            }
        }
    }

    add(value: T) {
        let node = new Cell<T>();
        node.next = (this.header.next) ? this.header.next : null;
        this.header.next = node;
        node.setValue(value);
    }

    get(position: number): T {
        return this.getCell(position).getValue();
    }

    destroy() {
    }

    del(position: number) {
    }

    ins(position: number, value: T) {
        let before_cell = this.getCell(position-1);
        let after_cell = this.getCell(position);
        let new_cell = new Cell<T>();
        new_cell.next = after_cell
        before_cell.next = new_cell;
        new_cell.setValue(value);
    }

    exportString(): string {
        let buffer: string = '( ';
        let n = this.header.next;
        do {
            buffer += ((n.getValue()) ? n.getValue() : 'nil') + ' ';
            n = n.next;
        } while(n);
        buffer += ' )';
        return buffer;
    }

    private getCell(position: number): Cell<T> {
        position++;
        let n = this.header;
        while (position > 0) {
            n = n.next;
            position--;
        }
        return n;
    }
}

