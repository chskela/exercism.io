//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(h = 0, m = 0) {
    const _h = (h + Math.floor(m / 60)) % 24;
    const _m = m % 60;
    this.h = (_h < 0) ? 24 + _h : _h;
    this.m = (_m < 0) ? 60 + _m : _m;
  }

  toString() {
    const format = f => (f < 10) ? `0${f}` : `${f}`;
    const hours = format(this.h);
    const minutes = format(this.m);
    return `${hours}:${minutes}`;
  }

  plus(minutes) {
    const _h = (Math.floor((minutes + this.m) / 60) + this.h) % 24;
    const _m = (minutes % 60 + this.m) % 60;
    this.h = (_h < 0) ? 24 + _h : _h;
    this.m = (_m < 0) ? 60 + _m : _m;
    return this;
  }

  minus(minutes) {
    const _h = (this.h + Math.floor((this.m - minutes) / 60)) % 24;
    const _m = (this.m - minutes % 60) % 60;
    this.h = (_h < 0) ? 24 + _h : _h;
    this.m = (_m < 0) ? 60 + _m : _m;
    return this;
  }

  equals(clock) {
    return this.toString() === clock.toString();
  }
}
