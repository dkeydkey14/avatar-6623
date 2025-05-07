# 6623 Promotion Website

Website khuyến mãi mừng sinh nhật 6623 với hiệu ứng đẹp mắt.

## Triển khai trên aaPanel

### Các bước triển khai

1. **Tải code lên VPS**

Tải code lên đường dẫn của website trong aaPanel, ví dụ: `/www/wwwroot/sukien6623.com`

2. **Cấp quyền thực thi cho các file script**

```bash
cd /www/wwwroot/sukien6623.com
chmod +x setup.sh start.sh
```

3. **Cài đặt môi trường (chỉ cần chạy lần đầu)**

```bash
./setup.sh
```

Script này sẽ tự động:
- Phát hiện hệ điều hành (CentOS/Ubuntu)
- Cài đặt Node.js 18 LTS
- Cài đặt NPM
- Cài đặt PM2
- Thiết lập quyền thư mục phù hợp

4. **Triển khai và khởi động ứng dụng**

```bash
./start.sh
```

Script này sẽ tự động:
- Cài đặt các dependencies
- Xóa bản build cũ nếu có
- Build ứng dụng Next.js
- Kiểm tra quá trình build thành công
- Thiết lập quyền thư mục build
- Khởi động ứng dụng với PM2
- Lưu cấu hình PM2 để tự động khởi động khi reboot

5. **Cấu hình Reverse Proxy trong aaPanel**

   a. Đăng nhập vào aaPanel
   b. Vào phần "Website"
   c. Chọn website của bạn và nhấp vào "Settings"
   d. Chọn "Proxy" hoặc "Reverse Proxy"
   e. Thêm proxy mới với cấu hình:
      - Domain path: `/` (hoặc đường dẫn bạn muốn)
      - Target URL: `http://127.0.0.1:9900`
   f. Lưu cấu hình

### Quản lý ứng dụng

- **Xem logs**:
```bash
pm2 logs 6623-site
```

- **Xem lỗi**:
```bash
pm2 logs 6623-site --err
```

- **Khởi động lại ứng dụng**:
```bash
pm2 restart 6623-site
```

- **Dừng ứng dụng**:
```bash
pm2 stop 6623-site
```

- **Xem trạng thái**:
```bash
pm2 status
```

- **Giám sát tài nguyên**:
```bash
pm2 monit
```

### Xử lý sự cố

- **Lỗi BUILD_ID không tồn tại**:
```bash
# Dừng ứng dụng
pm2 stop 6623-site

# Xóa thư mục build cũ
cd /www/wwwroot/sukien6623.com
rm -rf .next

# Build lại và khởi động
./start.sh
```

- **Đảm bảo quyền thư mục phù hợp**:
```bash
chmod -R 755 /www/wwwroot/sukien6623.com
```

## Triển khai trên VPS thông thường

### Chuẩn bị

1. Đã cài đặt hệ điều hành Linux (Ubuntu 20.04 hoặc mới hơn khuyến nghị)
2. Có quyền sudo

### Các bước triển khai

1. **Clone repository về VPS**

```bash
git clone [url-repository] 6623-promo
cd 6623-promo
```

2. **Cấp quyền thực thi cho các file script**

```bash
chmod +x setup.sh start.sh
```

3. **Cài đặt môi trường (chỉ cần chạy lần đầu)**

```bash
./setup.sh
```

Quá trình này sẽ cài đặt:
- Node.js 18 LTS
- NPM
- PM2
- Cấu hình PM2 khởi động cùng hệ thống

4. **Triển khai và khởi động ứng dụng**

```bash
./start.sh
```

Script này sẽ tự động:
- Cài đặt các dependencies
- Build ứng dụng Next.js
- Khởi động ứng dụng với PM2

5. **Lưu trạng thái PM2 để tự động khởi động khi reboot**

```bash
pm2 save
```

### Quản lý ứng dụng

- **Xem logs**:
```bash
pm2 logs 6623-promo
```

- **Khởi động lại ứng dụng**:
```bash
pm2 restart 6623-promo
```

- **Dừng ứng dụng**:
```bash
pm2 stop 6623-promo
```

- **Xem trạng thái**:
```bash
pm2 status
```

- **Giám sát tài nguyên**:
```bash
pm2 monit
```

### Cấu hình Nginx (Nếu cần)

Nếu bạn muốn sử dụng Nginx làm reverse proxy:

```bash
sudo apt install -y nginx

# Tạo file cấu hình
sudo nano /etc/nginx/sites-available/6623-promo

# Thêm cấu hình sau
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Kích hoạt cấu hình
sudo ln -s /etc/nginx/sites-available/6623-promo /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## Lưu ý cập nhật

Khi có cập nhật mới:

```bash
# Pull code mới
git pull

# Triển khai lại
./start.sh
``` 