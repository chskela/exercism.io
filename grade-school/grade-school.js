export class GradeSchool {
  #roster;
  constructor() {
    this.#roster = {};
  }
  roster() {
    return JSON.parse(JSON.stringify(this.#roster));
  }

  add(name, grade) {
    Object.entries(this.#roster).forEach(([n, g]) => {
      this.#roster = {
        ...this.#roster,
        [n]: g.filter((item) => item !== name),
      };
    });

    const list = this.#roster.hasOwnProperty(grade)
      ? [...this.#roster[grade], name].sort()
      : [name];

    this.#roster = {
      ...this.#roster,
      [grade]: list,
    };

    return this;
  }

  grade(grade) {
    return this.#roster.hasOwnProperty(grade) ? [...this.#roster[grade]] : [];
  }
}
