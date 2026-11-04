# Pocket Tools — PWA giao diện iOS

Có máy tính cơ bản, chuyển đổi độ dài/khối lượng/nhiệt độ/dung lượng, đếm ngược và ghi chú lưu cục bộ.

## Chạy thử trên Windows
1. Giải nén ZIP và mở thư mục trong VS Code.
2. Cài extension **Live Server**.
3. Nhấn chuột phải `index.html` → **Open with Live Server**.
4. Localhost chỉ dùng để thử trên PC; iPhone cần website HTTPS công khai.

## Đưa lên GitHub Pages
1. Tạo repository GitHub mới.
2. Upload toàn bộ file trong thư mục này lên thư mục gốc repository.
3. Mở **Settings → Pages**.
4. Chọn **Deploy from a branch**, branch `main`, folder `/(root)`, rồi Save.
5. Chờ xuất bản. URL thường có dạng `https://TEN-GITHUB.github.io/TEN-REPO/`.

## Cài lên iPhone
1. Mở URL HTTPS bằng Safari.
2. Chọn **Chia sẻ → Thêm vào màn hình chính**.
3. Nếu xuất hiện, bật **Mở dưới dạng ứng dụng web**, rồi nhấn Thêm.
4. Lặp lại trên iPhone còn lại.

## Cập nhật
Sửa file bằng VS Code, commit/upload lên GitHub. Mở lại PWA khi có mạng để nhận bản cập nhật. Có thể đóng hẳn rồi mở lại nếu nội dung cũ còn được lưu cache.

## Lưu ý
Đây là PWA, không phải IPA và không cần ký chứng chỉ. PWA không có toàn bộ quyền của app native. Ghi chú chỉ lưu trong trình duyệt trên từng thiết bị, không đồng bộ giữa iPhone và máy tính. Tránh lưu thông tin nhạy cảm.
