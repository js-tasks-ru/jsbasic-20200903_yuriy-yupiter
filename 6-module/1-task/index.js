

/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');
    this.rows = rows;
    this.essence = rows[0];
    this.thead = this.elem.createTHead();
    this.tbody = this.elem.createTBody();
    this.tr = this.elem.insertRow();
    this.createHead();
    this.createBody();
    this.createClickButton();
  }

  createHead() {
    let keys = Object.keys(this.essence);
    keys.forEach( (key) => {
      if (key === 'name') {key = 'Имя'}
      else if (key === 'age') {key = 'Возраст'}
      else if (key === 'salary') {key = 'Зарплата'}
      else if (key === 'city') {key = 'Город'}

      let th = document.createElement('th');
      th.innerHTML = key;
      this.tr.appendChild(th);
    })
    let th5 = document.createElement('th');
    this.tr.appendChild(th5);
    this.thead.appendChild(this.tr);
    this.elem.appendChild(this.thead);
    return this;
  }

  createBody() {
    for (let row of this.rows) {
      this.tr = document.createElement('tr');
      for (let key in row) {
        if (row.hasOwnProperty(key)) {
          let td = document.createElement('td');
          td.innerHTML = row[key];
          this.tr.appendChild(td);
        }
      }
      let tdButton = document.createElement('td');
      tdButton.innerHTML = '<button>X</button>';
      this.tr.appendChild(tdButton);
      this.tbody.appendChild(this.tr);
    }
    this.elem.appendChild(this.tbody);
    return this;
  }


  createClickButton() {
    this.elem.onclick = function (event) {
      if (event.target.tagName !== 'BUTTON') return;
      let target = event.target;
      let rowRemove = target.closest('tr');
      rowRemove.remove();
    }
    return this;
  }
}


