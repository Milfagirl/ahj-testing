/* eslint-disable spaced-comment */
/* eslint-disable default-case */
/* eslint-disable operator-assignment */
/* eslint-disable no-else-return */
/* eslint no-mixed-operators: "error"*/

export default function validate(data) {
  const value = data.trim();
  const newvalue = value.slice(0, -1);
  const control = Number(value[value.length - 1]);
  let sum = 0;
  let lunachek;
  let payment = '';
  const array = [...newvalue].map((name) => Number(name));
  for (let i = array.length - 1; i >= 0; i -= 2) {
    array[i] = array[i] * 2;
    if (array[i] > 9) {
      array[i] = Math.trunc(array[i] / 10) + (array[i] % 10);
    }
  }
  array.forEach((elem) => {
    sum += elem;
  });
  sum *= 9;
  if ((sum % 10) === control) {
    lunachek = true;
    switch (Number(value[0])) {
      case 2:
        payment = 'mir';
        break;
      case 3:
        payment = 'amex';
        break;
      case 4:
        payment = 'visa';
        break;
      case 5:
        payment = 'master';
        break;
      case 6:
        payment = 'discover';
        break;
    }
  } else {
    lunachek = false;
  }
  return [lunachek, payment];
}
