class CircularBuffer {
  constructor(size) {
    this.size = size;
    this.buffer = [];
    this.volum = 0;
  }

  write(item) {
    if (this.buffer.length < this.size) {
      this.volum++;
      this.buffer.push(item);
    } else {
      throw new BufferFullError();
    }
  }

  read() {
    if (this.volum === 0) {
      throw new BufferEmptyError();
    } else {
      this.volum--;
      return this.buffer.shift();
    }
  }

  forceWrite(item) {
    if (this.buffer.length >= this.size) {
      this.read();
    }
    this.write(item);
  }

  clear() {
    this.buffer = [];
    this.volum = 0;
  }
}

export default CircularBuffer;

export class BufferFullError extends Error {
  constructor() {
    super();
  }
}

export class BufferEmptyError extends Error {
  constructor() {
    super();
  }
}
