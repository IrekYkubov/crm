import elements from "./elements.js";
import render from "./render.js";
const {addContactData,createRow} = render;
const {modalForm,
  modalTotalPrice,
  tableBody,
  crmTotalPrice,
  overlay,
  vendorCode,
} = elements;
modalForm.addEventListener('change', e => {
  e.preventDefault();
  if (modalForm.discount.checked) {
    modalForm.discount_count.disabled = false;
  } else {
    modalForm.discount_count.value = '';
    modalForm.discount_count.disabled = true;
  }
  if (modalForm.price.value !== '' && modalForm.count.value !== '') {
    modalTotalPrice.textContent = `$ ${Number.parseInt(modalForm.price.value) * Number.parseInt(
      modalForm.count.value)}`;
  }

});
modalForm.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newContact = Object.fromEntries(formData);
  newContact.id = goods.length + 1;
  newContact.vendor = vendorCode.textContent;
  addContactData(newContact);
  tableBody.insertAdjacentHTML('beforeend', createRow(newContact));
  crmTotalPrice.innerHTML = getTotalPrice();
  modalForm.reset();
  overlay.classList.remove('active');

});
const getTotalPrice = () => {
  const totalTablePrice = document.querySelectorAll('.total__Table__Price');
  let sumTotalPrice = 0;
  totalTablePrice.forEach(item => {
    let priceItem = item.innerHTML.replace('$', '');
    sumTotalPrice += Number.parseInt(priceItem);
  });
  return sumTotalPrice;
}
crmTotalPrice.innerHTML = getTotalPrice();

export default {
  getTotalPrice,
}