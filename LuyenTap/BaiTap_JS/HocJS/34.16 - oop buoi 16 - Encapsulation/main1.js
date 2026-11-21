//34.16 - oop buoi 16 Encapsulation
/*
// Public fields : Trường công khai, trường công cộng
// Private fields : Trường riêng tư
// Public method : Phương thức công khai
// Private method: Phương thức riêng tư
*/

class Wallet {
    constructor(bankName, pin) {
        this.bankName = bankName;
        this.pin = pin;
        this.balance = 0; // Tài khoản bằng 0 lúc tạo thẻ
    }
    // Phương thức gửi tiền vào tài khoản
    deposit(value) {
        return (this.balance += value);
    }

    // Phương thức rút tiền tài khoản
    withdraw(value) {
        if (value > this.balance) {
            console.log("Số tiền trong tài khoản không đủ");
        } else {
            value -= this.balance;
            console.log("Tài khoản rút tiền thành công");
        }
    }
}

// Tạo đối tượng
const wallet = new Wallet("Mb bank", 1234);
console.log(wallet.balance);

// gửi tiền

console.log(wallet.deposit(1000));
//rút tiền
console.log(wallet.withdraw(500));

// xem số tài khoản
console.log(wallet.balance);
console.log(wallet.pin);
