import * as rules from "./references";

const factory = (options) => {
  return rules[options.type](options);
};

export default factory;