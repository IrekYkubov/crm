import elements from "./elements.js";
import render from "./render.js";
import fetchRequest from "./fetchReq.js";
import { toBase64 } from "./base64.js";
const {addContactData, createRow, renderGoods} = render;
const {modalForm,
  modalTotalPrice,
  tableBody,
  crmTotalPrice,
  overlay,
  vendorCode,
  modalTitle,
  panelInput,
  modalFile,
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
// const itemsIdRender = () => {
//   const itemsId = document.querySelectorAll('.items__id');
//   itemsId.forEach((element, id) => {
//     element.textContent = id + 1;
//   });
// }
const search = async (searchInp) => {
  const tableRow = document.querySelectorAll('.table__row');
  tableRow.forEach(item => {
    item.remove();
  })
  const result = await fetchRequest(`goods?search=${searchInp}`, {
    method: 'GET',
    callback: renderGoods,
  });
}

panelInput.addEventListener('input', async () => {
  setTimeout(() => {
    search(panelInput.value);
  }, 300);
});

const renameValue = async (err, renameGoods) => {

}
modalForm.addEventListener('submit', async e => {
  e.preventDefault();
  if (modalTitle.textContent === 'Изменить товар') {
    const formData = new FormData(e.target);
    const renContact = Object.fromEntries(formData);
    renContact.images = [await toBase64(modalFile.files[0])];
    console
    const result = await fetchRequest(`goods/${vendorCode.textContent}`, {
      method: 'PATCH',
      body: renContact,
    });
    modalForm.reset();
    overlay.classList.remove('active');
  } else {
    const formData = new FormData(e.target);
    const newContact = Object.fromEntries(formData);
    newContact.images = [await toBase64(modalFile.files[0])];
    newContact.id = vendorCode.textContent;
    console.log(newContact);
    // newContact.id = goods.length + 1;
    // newContact.vendor = vendorCode.textContent;
    addContactData(newContact);
    tableBody.insertAdjacentHTML('beforeend', createRow(newContact));
    crmTotalPrice.innerHTML = getTotalPrice();
    modalForm.reset();
    overlay.classList.remove('active');
    // itemsIdRender();
  }
});
const goodsForm = async (err, goodVal) => {
  modalTitle.textContent = 'Изменить товар';
  vendorCode.textContent = goodVal.id;
  modalForm.name.value = goodVal.title;
  modalForm.category.value = goodVal.category;
  modalForm.description.value = goodVal.description;
  modalForm.units.value = goodVal.units;
  modalForm.count.value = goodVal.count;
  modalForm.price.value = goodVal.price;
  modalTotalPrice.textContent = goodVal.price * goodVal.count;
  if (goodVal.discount) {
    modalForm.discount.checked = true;
    modalForm.discount_count.disabled = false;
    modalForm.discount_count.value = goodVal.discount;
  }

}
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
  goodsForm
}