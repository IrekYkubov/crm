'use strict';

{
  const overlay = document.querySelector('.overlay');
  const modal = document.querySelector('.modal');
  const modalClose = document.querySelector('.modal__close');
  const btnAddGoods = document.querySelector('.panel__add-goods');
  const modalForm = document.querySelector('.modal__form');
  const vendorCode = document.querySelector('.vendor-code__id');
  const modalTotalPrice = document.querySelector('.modal__total-price');
  const crmTotalPrice = document.querySelector('.crm__total-price');

  const tableBody = document.querySelector('.table__body');
  const addContactData = contact => {
    goods.push(contact);
  };
  const createRow = (goodsObj) => {
    const goodsParam = goodsObj;
    const teamplateGoods = 
    `<tr class="table__row" data-itemid="${goodsParam.id}">
    <td class="table__cell">${goodsParam.id}</td>
    <td class="table__cell table__cell_left table__cell_name" data-id="24601654816512">
      <span class="table__cell-id">id: ${goodsParam.vendor}</span>
      ${goodsParam.title}</td>
    <td class="table__cell table__cell_left">${goodsParam.category}</td>
    <td class="table__cell">${goodsParam.units}</td>
    <td class="table__cell">${goodsParam.count}</td>
    <td class="table__cell">$${goodsParam.price}</td>
    <td class="table__cell total__Table__Price">$${goodsParam.price * goodsParam.count}</td>
    <td class="table__cell table__cell_btn-wrapper">
      <button class="table__btn table__btn_pic"></button>
      <button class="table__btn table__btn_edit"></button>
      <button class="table__btn table__btn_del"></button>
    </td>
  </tr>`;
  return teamplateGoods;
  }

  const renderGoods = (goodsArr) => {
    const goodsPak = goodsArr;
    goodsPak.forEach(item => {
      tableBody.insertAdjacentHTML('beforeend', createRow(item))
    });
  }
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
  renderGoods(goods);

  const tableRow = document.querySelector('.table__row');
  tableBody.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.table__btn_del')) {
      target.closest('.table__row').remove();
      delete goods[target.closest('.table__row').dataset.itemid - 1];
      crmTotalPrice.innerHTML = getTotalPrice();
      console.log(goods);
    }
  });
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
    console.log(goods);
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
}