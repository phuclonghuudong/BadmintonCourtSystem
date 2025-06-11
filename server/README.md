https://www.prisma.io/
https://pris.ly/d/getting-

FRONTEND_URL = http://localhost:5173
SERVER_URL = http://localhost:
DATABASE_URL="mysql://root:123456@localhost:3306/badminton_server_management_system"

B1: npm install @prisma/client mysql2
B2: npm install -D prisma
B3: npx prisma init
B4: npx prisma migrate dev --name init
npm install cloudinary cookie-parser cors dotenv morgan multer bcryptjs nodemon express luxon

BƯỚC 1: Cài đặt Prisma vào dự án
Trong thư mục gốc dự án, chạy:

npm install @prisma/client mysql2
npm install -D prisma
npx prisma init
npx prisma migrate dev --name init
npx prisma generate
npx prisma migrate reset ->Reset lại toàn bộ database (xóa sạch dữ liệu và chạy lại tất cả migration)

400 BadRequest Dữ liệu gửi lên không hợp lệ (thiếu trường, sai kiểu, v.v.)
401 Unauthorized Chưa đăng nhập hoặc token không hợp lệ
403 Forbidden Không đủ quyền truy cập
404 NotFound Không tìm thấy tài nguyên
409 Conflict Trùng khóa chính, dữ liệu đã tồn tại
422 UnprocessableEntity Không thể xử lý dữ liệu hợp lệ (nhưng đúng định dạng)
500 InternalServerError Lỗi phía server, không xác định

Thuộc tính trạng thái
1: Hoạt động
0: Dừng
-1: Đã xóa khỏi database
