const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal__title');
const modalClose = document.querySelector('.modal__close');
const btnAddGoods = document.querySelector('.panel__add-goods');
const modalForm = document.querySelector('.modal__form');
const vendorCode = document.querySelector('.vendor-code__id');
const modalTotalPrice = document.querySelector('.modal__total-price');
const crmTotalPrice = document.querySelector('.crm__total-price');
const tableBody = document.querySelector('.table__body');
const itemsId = document.querySelectorAll('.items__id');
const modalFile = document.querySelector('.modal__file');
const modalFieldset = document.querySelector('.modal__fieldset');
const categoryList = document.querySelector('#category-list');
const category = document.querySelector('#category');
const panelInput = document.querySelector('.panel__input');

export default {
  overlay,
  modal,
  modalTitle,
  modalClose,
  btnAddGoods,
  modalForm,
  vendorCode,
  modalTotalPrice,
  crmTotalPrice,
  tableBody,
  modalFile,
  modalFieldset,
  categoryList,
  category,
  panelInput
}