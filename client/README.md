Màu sắc: https://colorhunt.co
Icon: https://fontawesome.com/icons
Tailwind Cheat Sheet: https://nerdcave.com/tailwind-cheat-sheet
Tailwind CSS: https://tailwindcss.com

Cấu trúc:
client/
├── public/
│ └── favicon.svg
├── src/
│ ├── assets/ # Ảnh, biểu tượng, font,...
│ ├── components/ # Các component có thể tái sử dụng
│ │ ├── ui/ # Button, Input, Modal,...
│ │ └── layout/ # Layout chính như Header, Footer, Sidebar,...
│ ├── features/ # Chức năng hoặc module theo domain (Redux slice nếu có)
│ │ └── auth/ # auth/login/signup
│ ├── hooks/ # Custom hooks
│ ├── pages/ # Các trang chính (Home, About, Contact,...)
│ ├── routes/ # Định nghĩa router (React Router v6)
│ ├── services/ # Giao tiếp API (axios)
│ ├── store/ # Cấu hình Redux Toolkit hoặc Zustand,...
│ ├── utils/ # Helper functions
│ ├── App.tsx # Thành phần gốc
│ ├── main.tsx # Điểm vào ứng dụng
│ └── index.css # File css chính dùng Tailwind
├── .env # Biến môi trường
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json # Nếu dùng TypeScript
└── vite.config.ts
