const truncarString = (str, maxLength) => {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.substring(0, maxLength - 3) + "...";
  }
};

export { truncarString };
