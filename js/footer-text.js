var quotes = [
    "Gắn kết và phục vụ cộng đồng.",
    "Vì tính mạng của con người, lấy y đức và trách nhiệm làm nền tảng.",
    "Đề cao tính độc lập, sáng tạo trong nghiên cứu khoa học.",
    "Xem hợp tác quốc tế là nồng cốt cho sự phát triển.",
    ];

var i = 0;

setInterval(function() {
$("#textslideFooter").html(quotes[i]);
    if (i == quotes.length) {
        i = 0;
    }
    else {
        i++;
    }
}, 2000);