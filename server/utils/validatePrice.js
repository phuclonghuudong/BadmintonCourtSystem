const validatePrice = async (value) => {
  if (typeof value === "string") {
    value = value.trim();
  }

  const number = Number(value);

  if (isNaN(number)) {
    return {
      valid: false,
      number: null,
      message: "Giá trị không hợp lệ, phải là một số.",
    };
  }

  if (number < 0) {
    return {
      valid: false,
      number: null,
      message: "Giá trị phải lớn hơn hoặc bằng 0.",
    };
  }

  return {
    valid: true,
    number,
  };
};

module.exports = validatePrice;
