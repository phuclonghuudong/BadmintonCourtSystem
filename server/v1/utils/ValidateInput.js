// Kiểm tra email hợp lệ
const isValidEmail = (email) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
};

// Kiểm tra số điện thoại (bắt đầu bằng 0, có 10 chữ số)
const isValidPhone = (phone) => {
  const regex = /^0\d{9}$/;
  return regex.test(phone);
};

// Kiểm tra CCCD đúng định dạng (12 chữ số)
const isValidCCCD = (cccd) => {
  const regex = /^\d{12}$/;
  return regex.test(cccd);
};

// Kiểm tra mật khẩu phải ≥ 6 ký tự, có ít nhất 1 chữ và 1 số
const isValidPassword = (password) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  return regex.test(password);
};

// Kiểm tra ngày sinh không được lớn hơn ngày hiện tại
const isValidBirthday = (ngaySinh) => {
  const date = new Date(ngaySinh);
  const today = new Date();
  return date <= today;
};

module.exports = {
  isValidEmail,
  isValidPhone,
  isValidCCCD,
  isValidPassword,
  isValidBirthday,
};
