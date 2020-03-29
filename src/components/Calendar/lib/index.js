/**
 * Делает первый символ строки заглавным
 * @method
 * @param {String} string Строка
 * @return {string} "привет, мир!"=>"Привет, мир!"
 */
export function jsUcfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Расчёт позиции времени
 * @method
 * @summary Возвращает тот час, на который нужно открутить список
 * @return {number} Текущий час минус два часа
 */
export function calcPositionTime() {
  const dtNow = new Date();
  const hour = dtNow.getHours();
  const houtToTop = dtNow.getMinutes() > 30 ? hour + 1 : hour;
  return houtToTop > 2 ? houtToTop - 2 : houtToTop;
}
