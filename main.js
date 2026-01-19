// Câu 1: Khai báo constructor function Product để tạo đối tượng sản phẩm.
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products gồm ít nhất 6 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau.
const products = [
    new Product(1, "iPhone 15 Pro Max", 32000000, 10, "Smartphones", true),
    new Product(2, "MacBook Pro M3", 45000000, 5, "Laptops", true),
    new Product(3, "AirPods Pro 2", 6000000, 20, "Accessories", true),
    new Product(4, "Apple Watch Series 9", 11000000, 0, "Smartwatches", false),
    new Product(5, "iPad Pro M2", 25000000, 8, "Tablets", true),
    new Product(6, "USB-C Hub", 1500000, 15, "Accessories", true),
    new Product(7, "Magic Mouse", 2000000, 0, "Accessories", true)
];

// Câu 3: Tạo mảng mới chỉ chứa: name, price của mỗi sản phẩm.
const productNamesAndPrices = products.map(p => ({ name: p.name, price: p.price }));
console.log("Câu 3:", productNamesAndPrices);

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0).
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("Câu 4:", inStockProducts);

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không.
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log("Câu 5:", hasExpensiveProduct);

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không.
const allAccessoriesAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);
console.log("Câu 6:", allAccessoriesAvailable);

// Câu 7: Tính tổng giá trị kho hàng. Giá trị kho = price * quantity
const totalInventoryValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);
console.log("Câu 7:", totalInventoryValue.toLocaleString('vi-VN') + " VND");

// Câu 8: Dùng for...of Duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
console.log("Câu 8:");
for (const p of products) {
    console.log(`${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`);
}

// Câu 9: dùng for...in để:
// • In ra tên thuộc tính
// • In ra giá trị tương ứng
console.log("Câu 9 (Sản phẩm đầu tiên):");
const firstProduct = products[0];
for (const key in firstProduct) {
    console.log(`${key}: ${firstProduct[key]}`);
}

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
const availableInStockNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
console.log("Câu 10:", availableInStockNames);
