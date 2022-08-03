import elements from "./elements.js";
import controlForm from "./controlForm.js";
import fetchRequest from "./fetchReq.js";
import { toBase64 } from "./base64.js";
const {getTotalPrice, goodsForm} = controlForm;
const {btnAddGoods,
  modalClose,
  overlay,
  vendorCode,
  tableBody,
  crmTotalPrice,
  modalFile,
  modalFieldset,
  categoryList,
  modalTitle,
  modalForm
} = elements;
const randomVendorId = () => {
  let vendorId;
  return vendorId = Math.floor(Math.random() * 1e10);
}
const renderCategory = (err, catArr) => {
  const catPak = catArr;
  catPak.forEach(item => {
    categoryList.insertAdjacentHTML('beforeend', `<option value="${item.title}">${item.title}</option>`);
  });
}
btnAddGoods.addEventListener('click', async () => {
  overlay.classList.add('active');
  modalTitle.textContent = 'Дабавить товар'
  vendorCode.textContent = randomVendorId();
  const result = await fetchRequest('category', {
    method: 'get',
    callback: renderCategory,
  });
});
tableBody.addEventListener('click', async (e) => {
  const target = e.target;
  if (target.closest('.table__btn_edit')) {
    const idElement = target.closest('.table__row').dataset.itemid;
    const result = await fetchRequest(`goods/${idElement}`, {
      method: 'get',
      callback: goodsForm,
    });
    overlay.classList.add('active');
  }
});
modalClose.addEventListener('click', () => {
  modalForm.reset();
  overlay.classList.remove('active');
})
overlay.addEventListener('click', (e) => {
  const target = e.target;
  if (target === overlay) {
    modalForm.reset();
    overlay.classList.remove('active');
  }
});
const tableRow = document.querySelector('.table__row');
tableBody.addEventListener('click', async (e) => {
  const target = e.target;
  if (target.closest('.table__btn_del')) {
    const idElement = target.closest('.table__row').dataset.itemid;
    target.closest('.table__row').remove();
    const result = await fetchRequest(`goods/${idElement}`, {
      method: 'DELETE',
    });
    // delete goods[target.closest('.table__row').dataset.itemid];
    
    crmTotalPrice.innerHTML = getTotalPrice();
    // itemsIdRender();
  }
});

tableBody.addEventListener('click', (e) => {
  const target = e.target;
  if (target.closest('.table__btn_pic')) {
    const picUrl = target.closest('.table__btn_pic').dataset.pic;
    const modalPic = open(picUrl, '', `width=800,height=600, top=${((screen.height-600)/2)} ,left=${((screen.width-800)/2)}`);
  };
});

modalFile.addEventListener('change', async () => {
  if (modalFile.files.length > 0) {
    if (modalFile.files[0].size < 1048576) {
      const src = URL.createObjectURL(modalFile.files[0]);
      const preview = document.createElement('div');
      preview.classList.add('preview');
      const img = document.createElement('img');
      const result = await toBase64(modalFile.files[0]);
      img.src = result;
      preview.append(img);
      modalFieldset.append(preview);
    } else {
      const preview = document.createElement('div');
      preview.classList.add('preview', 'file__danger');
      preview.textContent = 'Изображение не должно превышать размер 1 мб';
      modalFieldset.append(preview);
    }
  }
});