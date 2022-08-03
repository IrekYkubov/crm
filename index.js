import "./modules/controlModal.js";
import controlForm from "./modules/controlForm.js";
import render from "./modules/render.js";
import fetchRequest from "./modules/fetchReq.js";
document.addEventListener('DOMContentLoaded', async () => {
  const result = await fetchRequest('goods/', {
    method: 'get',
    callback: init,
  });
}, false);
// init(goods);