export class Scale {
  SHARPS = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
  FLATS = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];
  useFLATS = [
    "F",
    "Bb",
    "Eb",
    "Ab",
    "Db",
    "Gb",
    "d",
    "g",
    "c",
    "f",
    "bb",
    "eb",
  ];
  constructor(tonic) {
    this.tonic = tonic[0].toUpperCase() + tonic.slice(1);
    this.scale = this.useFLATS.includes(tonic) ? this.FLATS : this.SHARPS;
  }

  chromatic() {
    const idx = this.scale.indexOf(this.tonic);
    return [...this.scale.slice(idx), ...this.scale.slice(0, idx)];
  }

  interval(intervals) {
    const flags = ["m", "M", "A"];
    const res = [];
    const scale = this.chromatic();

    const int = intervals.split("").map((item) => {
      return flags.indexOf(item) + 1;
    });

    let index = 0;
    for (let i = 0; i < int.length; i++) {
      res.push(scale[index]);
      index += int[i];
    }
    return res;
  }
}
