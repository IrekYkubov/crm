'use strict';

{
  const overlay = document.querySelector('.overlay');
  const modal = document.querySelector('.modal');
  const modalClose = document.querySelector('.modal__close');
  const btnAddGoods = document.querySelector('.panel__add-goods');

  const tableBody = document.querySelector('.table__body');
  const createRow = (goodsObj) => {
    const goodsParam = goodsObj;
    const teamplateGoods = 
    `<tr>
    <td class="table__cell">${goodsParam.id}</td>
    <td class="table__cell table__cell_left table__cell_name" data-id="24601654816512">
      <span class="table__cell-id">id: 24601654816512</span>
      ${goodsParam.title}</td>
    <td class="table__cell table__cell_left">${goodsParam.category}</td>
    <td class="table__cell">${goodsParam.units}</td>
    <td class="table__cell">${goodsParam.count}</td>
    <td class="table__cell">$${goodsParam.price}</td>
    <td class="table__cell">$${goodsParam.price * goodsParam.count}</td>
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

  btnAddGoods.addEventListener('click', () => {
    overlay.classList.add('active');
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
}