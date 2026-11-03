# Portfolio nhóm

Website giới thiệu nhóm và portfolio thành viên.

## Cấu trúc
- `index.html`: trang giới thiệu nhóm.
- `vo-duc-tin.html`, `vo-van-tin.html`: portfolio thành viên.
- `css/main.css`, `js/main.js`: giao diện và tương tác trang Võ Đức Tín.
- `css/member.css`, `js/member.js`: giao diện và tương tác trang Võ Văn Tín.
- `images/`: ảnh thành viên.

## Chạy
Mở `index.html` bằng trình duyệt, hoặc deploy lên GitHub Pages từ thư mục gốc của nhánh `main`.

## Lưu ý
- `thanhvien5.jpg` chưa có trong tài liệu gốc, nên thẻ ảnh thành viên 5 vẫn dùng cơ chế ảnh dự phòng của giao diện.
- Liên kết `file:///D:/BAITAP_LTWEB_DH.pdf` ở `vo-van-tin.html` là đường dẫn máy cá nhân của bản gốc, không thể mở trên GitHub Pages. Cần thay bằng đường dẫn web/PDF công khai khi có tài liệu.

## Liên kết Portfolio trong popup

Trong `index.html`, tìm `const membersData`. Điền địa chỉ website Portfolio riêng vào `portfolioUrl` của từng thành viên. Nếu để `"#"`, nút **Xem thông tin chi tiết** sẽ hiện mờ và không dẫn tới GitHub hoặc một trang giả. Hai thành viên đầu hiện đang dùng trang HTML nội bộ có sẵn.

### Hướng dẫn cho 4 thành viên chưa có link

Mở **`index.html`**, dùng Ctrl+F tìm tên của mình trong `const membersData`, sửa duy nhất `portfolioUrl: "#"` thành đường dẫn đầy đủ, ví dụ `portfolioUrl: "https://tenmien-cua-ban.com/"`. Không thay trường `github`, vì GitHub và Portfolio là hai liên kết khác nhau.

- Võ Đức Tín: `vo-duc-tin.html` (đã có trang).
- Võ Văn Tín: `vo-van-tin.html` (đã có trang).
- Dương Chí Toàn: `#` (chờ link).
- Hứa An Việt Thành: `#` (chờ link).
- Thành viên 5: `#` (chờ link).
- Huỳnh Đoàn Quang Mạnh: `#` (chờ link).

Nút của người chưa có link sẽ ghi **Chưa cập nhật Portfolio** và không bấm được. Sau khi điền link, nút tự đổi thành **Xem thông tin chi tiết**.
