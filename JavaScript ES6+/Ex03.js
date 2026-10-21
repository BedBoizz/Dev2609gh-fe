const tongGiay = 3725;
const gio = Math.floor(tongGiay / 3600);
const phut = Math.floor((tongGiay % 3600) /60);
const giay = tongGiay % 60;
console.log(`{tongGiay} giây = ${gio} giờ ${phut} phút ${giay} giây`);
console.log(`${String(gio).padStart(2, "0")}:${String(phut).padStart(2,"0")}:${String(giay).padStart(2,"0")}`);

