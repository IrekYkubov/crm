import elements from "./elements.js";
import controlForm from "./controlForm.js";
const {getTotalPrice,itemsIdRender} = controlForm;
const {btnAddGoods,
  modalClose,
  overlay,
  vendorCode,
  tableBody,
  crmTotalPrice,
} = elements;
const randomVendorId = () => {
  let vendorId;
  return vendorId = Math.floor(Math.random() * 1e14);
}
btnAddGoods.addEventListener('click', () => {
  overlay.classList.add('active');
  vendorCode.textContent = randomVendorId();
});
modalClose.addEventListener('click', () => {
  overlay.classList.remove('active');
})
overlay.addEventListener('click', (e) => {
  const target = e.target;
  if (target === overlay) {
    overlay.classList.remove('active');
  }
});
const tableRow = document.querySelector('.table__row');
tableBody.addEventListener('click', (e) => {
  const target = e.target;
  if (target.closest('.table__btn_del')) {
    target.closest('.table__row').remove();
    delete goods[target.closest('.table__row').dataset.itemid - 1];
    crmTotalPrice.innerHTML = getTotalPrice();
    itemsIdRender();
    console.log(goods);
  }
});

  tableBody.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.table__btn_pic')) {
      const picUrl = target.closest('.table__btn_pic').dataset.pic;
      const modalPic = open(picUrl, '', `width=800,height=600, top=${((screen.height-600)/2)} ,left=${((screen.width-800)/2)}`);
    };
  });
export default {}