export const transform = (old) => {
  const etl = {};
  for (let [key, value] of Object.entries(old)) {
    value.forEach(item => etl[item.toLowerCase()] = Number(key));
  }
  return etl;
};
