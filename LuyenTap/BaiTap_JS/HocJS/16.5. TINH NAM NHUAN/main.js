let nam = parseInt(
  prompt("Điền Năm bạn muốn biết Năm đấy có phải năm nhuận hay không: "),
);
if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
  alert(`Năm ${nam} là năm nhuận`);
} else {
  alert(`Năm ${nam} không phải là năm nhuận`);
}
