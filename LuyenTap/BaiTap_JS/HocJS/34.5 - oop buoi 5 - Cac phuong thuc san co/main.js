//34.5. Một số phương thức sẵn có Trong JavaScript,
// 1. Object.keys(obj)
// Phương thức này trả về một mảng chứa tất cả các key (tên thuộc tính) của đối tượng.

let preson = {
    name: "john",
    age: 30,
};

let keys = Object.keys(preson);
console.log(keys);

//2. Object.values(obj);
// Phương thức này trả về một mảng chứa tất cả các giá trị của đối tượng.
let preson2 = {
    name: "john",
    age: 30,
};

let keys2 = Object.values(preson2);
console.log(keys2);

//3. Object.entries(obj);
// Phương thức này trả về một mảng chứa các cặp [khóa, giá trị] của đối tượng dưới dạng mảng con.
let preson3 = {
    name: "john",
    age: 30,
};

let keys3 = Object.entries(preson3);
console.log(keys3);

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
