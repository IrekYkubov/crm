const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const btnAddGoods = document.querySelector('.panel__add-goods');
const modalForm = document.querySelector('.modal__form');
const vendorCode = document.querySelector('.vendor-code__id');
const modalTotalPrice = document.querySelector('.modal__total-price');
const crmTotalPrice = document.querySelector('.crm__total-price');
const tableBody = document.querySelector('.table__body');
const itemsId = document.querySelectorAll('.items__id');

export default {
  overlay,
  modal,
  modalClose,
  btnAddGoods,
  modalForm,
  vendorCode,
  modalTotalPrice,
  crmTotalPrice,
  tableBody,
}