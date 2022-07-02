import elements from "./elements.js";
const {tableBody} = elements;
const addContactData = contact => {
  goods.push(contact);
};
const createRow = (goodsObj) => {
  const goodsParam = goodsObj;
  const teamplateGoods = 
  `<tr class="table__row" data-itemid="${goodsParam.id}">
  <td class="table__cell items__id">${goodsParam.id}</td>
  <td class="table__cell table__cell_left table__cell_name" data-id="24601654816512">
    <span class="table__cell-id">id: ${goodsParam.vendor}</span>
    ${goodsParam.title}</td>
  <td class="table__cell table__cell_left">${goodsParam.category}</td>
  <td class="table__cell">${goodsParam.units}</td>
  <td class="table__cell">${goodsParam.count}</td>
  <td class="table__cell">$${goodsParam.price}</td>
  <td class="table__cell total__Table__Price">$${goodsParam.price * goodsParam.count}</td>
  <td class="table__cell table__cell_btn-wrapper">
    <button class="table__btn table__btn_pic" data-pic="/img/nophoto.png"></button>
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

window.init = renderGoods;
export default {
  addContactData,
  createRow,
  renderGoods,
}