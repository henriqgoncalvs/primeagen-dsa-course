type QNode<T> = {
    value: T;
    next?: QNode<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: QNode<T>;
    private tail?: QNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as QNode<T>;

        this.length++;

        if (!this.tail) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        // console.log(node, this.head, this.tail);
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        if (this.length === 1) {
            this.tail = undefined;
        }

        this.length--;

        let head = this.head;
        // remove the first item
        this.head = this.head.next;

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
