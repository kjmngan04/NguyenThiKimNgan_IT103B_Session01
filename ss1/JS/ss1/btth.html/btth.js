let bookName = prompt("Nhập tên sách:");
let authorName = prompt("Nhập tên tác giả:");
let publishYear = prompt("Nhập năm xuất bản:");
let price = prompt("Nhập giá tiền một cuốn:");
let quantity = prompt("Nhập số lượng nhập kho");

bookName = bookName.trim().toUpperCase();
authorName = authorName.toUpperCase();

publishYear = Number(publishYear);
price = Number(price);
quantity = Number(quantity);

let authorCode = authorName.substring(0, 3); 
let randomNumber = Math.floor(Math.random() * 1000) + 1;
let bookId = `${authorCode}${publishYear}-${randomNumber}`;

let currentYear = 2026;
let bookAge = currentYear - publishYear;
let totalValue = price * quantity;

let shelfNumber = Math.floor(Math.random() * 10) + 1;

console.log(`--- PHIẾU NHẬP KHO ---`);
console.log(`Mã sách: ${bookId}`);
console.log(`Tên sách: ${bookName}`);
console.log(`Tác giả: ${authorName}`);
console.log(`Năm xuất bản: ${publishYear}`);
console.log(`Tuổi sách: ${bookAge} năm`);
console.log(`Tổng giá trị: ${totalValue} VNĐ`);
console.log(`Ngăn kệ gợi ý: Kệ số ${shelfNumber}`);
