export class BankAccount {
  constructor() {
    this._balance = 0;
    this.status = false;
  }

  open() {
    if (this.status) {
      throw new ValueError();
    }
    this.status = true;
  }

  close() {
    if (!this.status) {
      throw new ValueError();
    }
    this.status = false;
    this._balance = 0;
  }

  deposit(value) {
    if (value < 0 || !this.status) {
      throw new ValueError();
    }
    this._balance += value;
  }

  withdraw(value) {
    if (value < 0 || !this.status || this._balance < value) {
      throw new ValueError();
    }
    this._balance -= value;
  }

  get balance() {
    if (!this.status) {
      throw new ValueError();
    }
    return this._balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
