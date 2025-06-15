const TrangThai = {
  RESET_REQUIRED: 3,
  PENDING: 2,
  ACTIVE: 1,
  INACTIVE: 0,
  BLOCKED: -1,
};
// 3 - RESET_REQUIRED:      Cài đặt lại
// 2 - PENDING_APPROVAL:    Chờ phê duyệt
// 1 - ACTIVE:              Hoạt động
// 0 - INACTIVE:            Dừng hoạt động
//-1 - LOCKED:              Khóa - Đã xóa khỏi databse
