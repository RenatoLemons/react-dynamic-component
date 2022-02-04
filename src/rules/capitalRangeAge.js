import rangeDecimalAge from "./rangeDecimalAge";

const capitalRangeAge = (options) => {
  const ranges = new rangeDecimalAge(options.ranges);

  return {
    getCapital: (model) => {
      return ranges.get(model.age) || options.default;
    },
  };
};

export default capitalRangeAge;
