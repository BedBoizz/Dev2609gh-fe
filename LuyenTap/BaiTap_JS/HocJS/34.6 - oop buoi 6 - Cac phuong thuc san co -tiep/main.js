//34.5. Một số phương thức sẵn có Trong JavaScript,
// 1. Object.keys(obj)
// Phương thức này trả về một mảng chứa tất cả các key (tên thuộc tính) của đối tượng.
let person = {
    name: "John",
    age: 30,
};
let keys = Object.keys(person);
console.log(keys);

//2. Object.values(obj);
// Phương thức này trả về một mảng chứa tất cả các giá trị của đối tượng.
let person2 = {
    name: "John",
    age: 30,
};

let values = Object.values(person2);
console.log(values);

//3. Object.entries(obj);
// Phương thức này trả về một mảng chứa các cặp [khóa, giá trị] của đối tượng dưới dạng mảng con.
let person3 = {
    name: "John",
    age: 30,
};

let entries = Object.entries(person3);
console.log(entries);

// 4. Object.assign(target, source);
//sử dụng để sao chép các thuộc tính từ một hoặc
//nhiều đối tượng nguồn (source) vào một đối tượng đích (target).
let target = { c: 100 };
let source1 = { a: 1 };
let source2 = { b: 2 };
Object.assign(target, source1, source2);
console.log(target);

let target2 = { ...source1, ...source2 };
console.log(target2);

//5.  Object.hasOwnProperty(prop);
// Phương thức này kiểm tra xem đối tượng có một thuộc tính nào
// đó hay không và trả về true nếu có.

let preson4 = {
    name: "John",
    age: 30,
};
console.log(preson4.hasOwnProperty("name"));
console.log(preson4.hasOwnProperty("job"));

//6. Object.freeze(obj);
// Phương thức này đóng băng đối tượng, làm cho nó không thể thêm, sửa, xóa.
let preson5 = {
    name: "John",
    age: 30,
};
Object.freeze(preson5);

// Sửa thuộc tính
preson5.age = 100;
//Thêm thuộc tính
preson5.email = "Tuhoc.cc@gmail.com";
// Xoá
delete preson5.age;

console.log(preson5);

// 7. Object.seal(obj)
// Seal the object
//(Ngăn 0 cho thêm, xóa thuộc tính, chỉ cho phép sửa giá trị )
let preson6 = {
    name: "John",
    age: 30,
};
Object.seal(preson6);

// Thêm thuộc tính
preson6.localtion = "New York";
// Xoá thuộc tính
delete preson6.age;
// Sửa
preson6.age = 100;
console.log(preson6);
