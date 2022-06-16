const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (reaction) => {
  return Promise.all([promiseTheaterIXX(), promiseTheaterVGC()])
    .then((res) => {
      const [sumIXX, sumVGC] = res;
      console.log(sumIXX, sumVGC);
      return [...sumIXX, ...sumVGC].filter((item) => item.hasil === reaction).length;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  promiseOutput,
};
