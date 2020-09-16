let calculator = {
  read(a, b) {
     this.first = a;
     this.second = b;
  },
  sum() {
    return this.first + this.second;
  },
  mul() {
    return this.first * this.second;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
