function rangeDecimalAge(options) {
  this.get = (age) => {
    if (!!options) {
      for (const key in options) {
        if (Object.hasOwnProperty.call(options, key)) {
          const item = options[key];
          if (
            (!item.minAge || age >= item.minAge) &&
            (!item.maxAge || age <= item.maxAge)
          ) {
            return item.value;
          }
        }
      }
    }
  };
}

export default rangeDecimalAge;
