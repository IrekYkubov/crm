
import {renderGoods} from './modules/render.js';
import modalActions from './modules/modal.js';
import {removeRow} from './modules/removeRow.js';
import {events} from './modules/events.js';
import fetchRequest from './modules/fetchRequest.js';

const init = () => Promise.all([
  fetchRequest('goods/', {
    callback: renderGoods,
  }),
  fetchRequest('goods/', {
    callback: modalActions,
  }),
]);

init().then(() => {
  events();
});
// Запрос на сервер
let data = await fetch('https://cryptic-temple-67554.herokuapp.com/api/goods');
data = await data.json();
removeRow(data);

