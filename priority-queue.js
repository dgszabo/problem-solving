// PRIORITY QUEUE
class Queue {
  constructor() {
      this.queue = [];
  }

  enqueue(el) {
      if(this.queue.length === 0) {
          this.queue.push(el);
      } else {
          let origLength = this.queue.length;
          for(let i = 0; i < origLength; i++) {
              if(el.pri > this.queue[i].pri) {
                  this.queue.splice(i, 0, el);
              } else if(i === this.queue.length - 1) {
                  this.queue.push(el);
              }
          }
      }
  }

  peak() {
      return this.queue[0] ? this.queue[0] : 'No elements in the queue';
  }

  dequeue() {
      return this.queue[0] ? this.queue.shift() : 'No elements in the queue';
  }
}