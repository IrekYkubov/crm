const URL = 'https://cryptic-temple-67554.herokuapp.com/api/';

const fetchRequest = async (prefix, {
  method = 'GET',
  callback,
  body,
  headers,
}) => {
  try {
    const options = {
      method,
    };

    if (body) options.body = JSON.stringify(body);
    if (headers) options.headers = headers;

    const response = await fetch(`${URL}${prefix}`, options);

    if (response.ok) {
      const data = await response.json();
      if (callback) return callback(null, data);
      return;
    }
    if (response.status === 422 ||
        response.status === 404 || response.status >= 500) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    } else {
      throw new Error(`Что-то пошло не так...`);
    }
  } catch (err) {
    return callback(err);
  }
};

export default fetchRequest;
