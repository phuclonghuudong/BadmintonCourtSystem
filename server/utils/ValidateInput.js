const isValidEmail = (email) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
};

const isValidPhone = (phone) => {
  const regex = /^0\d{9}$/;
  return regex.test(phone);
};

const isValidCCCD = (cccd) => {
  const regex = /^\d{12}$/;
  return regex.test(cccd);
};

const isValidPassword = (password) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  return regex.test(password);
};

const isValidBirthday = (ngaySinh) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(ngaySinh)) return false;

  const date = new Date(ngaySinh);
  const today = new Date();
  if (isNaN(date.getTime())) return false;

  return date <= today;
};

module.exports = {
  isValidEmail,
  isValidPhone,
  isValidCCCD,
  isValidPassword,
  isValidBirthday,
};
