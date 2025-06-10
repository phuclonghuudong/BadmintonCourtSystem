https://www.prisma.io/
https://pris.ly/d/getting-started

// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?
// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init

B1: npm install @prisma/client mysql2
B2: npm install -D prisma
B3: npx prisma init
B4: npx prisma migrate dev --name init
npm install cloudinary cookie-parser cors dotenv morgan multer bcryptjs nodemon express

BƯỚC 1: Cài đặt Prisma vào dự án
Trong thư mục gốc dự án, chạy:

npm install @prisma/client mysql2
npm install -D prisma
npx prisma init
Sau lệnh trên, bạn sẽ có thư mục prisma/ và file .env.

✅ BƯỚC 2: Cấu hình kết nối CSDL
Mở file .env và chỉnh dòng:

DATABASE_URL="mysql://root:password@localhost:3306/ten_database"
⚠️ Lưu ý:

root: user MySQL

password: mật khẩu

ten_database: tên DB đã tạo trong MySQL

✅ BƯỚC 3: Khai báo model trong prisma/schema.prisma
Ví dụ thêm bảng User:

model User {
id Int @id @default(autoincrement())
name String
email String @unique
}
Bạn có thể thêm các model khác tuỳ hệ thống (Product, Court, Booking,...).

✅ BƯỚC 4: Tạo migration và sync database
bash
Sao chép
Chỉnh sửa
npx prisma migrate dev --name init
➡ Prisma sẽ tạo bảng tương ứng trong MySQL.

✅ BƯỚC 5: Tích hợp vào code Node.js
Trong bất kỳ file nào cần thao tác với DB, thêm:

js
Sao chép
Chỉnh sửa
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
Ví dụ dùng trong controller:

js
Sao chép
Chỉnh sửa
// Get all users
const users = await prisma.user.findMany();

// Create user
const newUser = await prisma.user.create({
data: {
name: 'Phúc',
email: 'phuc@example.com'
}
});
✅ Gợi ý: Tổ chức mã sạch
Tạo cấu trúc như sau:

pgsql
Sao chép
Chỉnh sửa
src/
├── controllers/
├── services/
├── routes/
├── prisma/ <-- prisma schema ở đây
├── index.js
├── .env
✅ BƯỚC 6: Prisma Studio (UI kiểm tra dữ liệu)
Chạy:

bash
Sao chép
Chỉnh sửa
npx prisma studio
➡ Mở trình duyệt, bạn có thể xem và chỉnh dữ liệu như bảng tính.

Nếu bạn gửi mình cấu trúc project hiện tại (hoặc nội dung package.json + vài route chính), mình có thể gắn Prisma đúng chỗ cho bạn nhanh hơn. Bạn muốn mình giúp viết CRUD model nào đầu tiên (User, Product, Booking...)?

Công cụ
