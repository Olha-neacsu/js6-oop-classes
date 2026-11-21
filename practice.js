/*
 * У SmileCare кожен пацієнт — окремий обʼєкт.
 * Поки що опишемо саму сутність, без даних.
 *
 * 1. Оголоси клас Patient з порожнім тілом.
 * 2. Створи два його екземпляри: firstPatient і secondPatient.
 * 3. Виведи обидва екземпляри в консоль.
 * 4. Виведи в консоль результат порівняння firstPatient === secondPatient.
 */

// Твій код тут

// class Patient {}
// const firstPatient = new Patient();
// const secondPatient = new Patient();

// console.log(firstPatient);
// console.log(secondPatient);
// console.log(firstPatient === secondPatient);

//2-----------------------------------------------------------------------
/*
 * Клас Patient з минулого уроку створює порожні обʼєкти. Дамо їм дані.
 *
 * 1. Додай у клас конструктор з двома параметрами: name і visitsCount.
 * 2. У конструкторі запиши обидва значення у властивості нового екземпляра.
 * 3. Онови створення пацієнтів: firstPatient — 'Alex' з 2 візитами,
 *    secondPatient — 'Nora' з 5 візитами.
 */

// class Patient {
//   constructor(name, visitsCounts) {
//     this.name = name;
//     this.visits = visitsCounts;
//   }
// }

// const firstPatient = new Patient('Alex', 2);
// const secondPatient = new Patient('Nora', 5);

// console.log(firstPatient);
// console.log(secondPatient);

//3---------------------------------------------------------------------------
/*
 * Пацієнту потрібна ще й вартість лікування. Трьох аргументів поспіль
 * уже забагато: у виклику не видно, що є що, і переплутати їх легко.
 *
 * 1. Переведи конструктор на один параметр params.
 * 2. Онови створення пацієнтів — передай у виклик обʼєкт параметрів:
 *    firstPatient — patient 'Alex', visits 2, cost 4000;
 *    secondPatient — patient 'Nora', visits 5, cost 6000.
 * 3. У конструкторі запиши значення з params у три властивості екземпляра:
 *    params.patient → this.name,
 *    params.visits → this.visitsCount,
 *    params.cost → this.treatmentCost.
 * 4. Виведи обидвох пацієнтів в консоль.
 */

// class Patient {
//   constructor(params) {
//     this.name = params.patient;
//     this.visitsCount = params.visits;
//     this.treatmentCost = params.cost;
//   }
// }

// const firstPatient = new Patient({ patient: 'Alex', visits: 2, cost: 4000 });
// const secondPatient = new Patient({ patient: 'Nora', visits: 5, cost: 6000 });

// console.log(firstPatient);
// console.log(secondPatient);

//4-----------------------------------------------------------------------------
/*
 * Пацієнт поки що тільки зберігає дані. Навчимо його діям.
 *
 * 1. Додай метод getInfo(), який повертає рядок у форматі
 *    "імʼя: N visits, M UAH" — наприклад "Alex: 2 visits, 4000 UAH".
 * 2. Додай метод addVisit(cost), який збільшує кількість візитів на 1
 *    і додає cost до вартості лікування.
 * 3. Замість виведення самих пацієнтів виведи getInfo() кожного.
 * 4. Додай firstPatient візит вартістю 1500 і знову виведи його getInfo().
 */

// class Patient {
//   constructor(params) {
//     this.name = params.patient;
//     this.visitsCount = params.visits;
//     this.treatmentCost = params.cost;
//   }

//   getInfo() {
//     return `${this.name}: ${this.visitsCount} visits, ${this.treatmentCost} UAH`;
//   }

//   addVisits(cost) {
//     this.visitsCount += 1;
//     this.treatmentCost += cost;
//   }
// }

// const firstPatient = new Patient({
//   patient: 'Alex',
//   visits: 2,
//   cost: 4000,
// });

// const secondPatient = new Patient({
//   patient: 'Nora',
//   visits: 5,
//   cost: 6000,
// });

// console.log(firstPatient.getInfo());
// console.log(secondPatient.getInfo());

// firstPatient.addVisits(1500);
// console.log(firstPatient.getInfo());

//5-----------------------------------------------------------------
/*
 * Вартість лікування можна переписати ззовні будь-яким значенням.
 * У SmileCare так не можна: вартість лише читають, а змінюють
 * тільки додаванням нової процедури. Сховаємо її від зовнішнього коду.
 *
 * 1. Зроби властивість treatmentCost приватною: #treatmentCost.
 * 2. Додай метод getCost(), який повертає вартість лікування.
 * 3. Додай метод addCharge(amount), який додає amount до вартості.
 * 4. Виведи вартість firstPatient.
 * 5. Додай firstPatient нову процедуру на 1500 і знову виведи вартість.
 * 6. Наприкінці виведи вартість secondPatient.
 */

// class Patient {
//   #treatmentCost;

//   constructor(params) {
//     this.name = params.patient;
//     this.visitsCount = params.visits;
//     this.#treatmentCost = params.cost;
//   }

//   getCost() {
//     return this.#treatmentCost;
//   }

//   addCharge(amount) {
//     this.#treatmentCost += amount;
//   }
// }

// const firstPatient = new Patient({
//   patient: 'Alex',
//   visits: 2,
//   cost: 4000,
// });

// const secondPatient = new Patient({
//   patient: 'Nora',
//   visits: 5,
//   cost: 6000,
// });

// console.log(firstPatient.getCost());
// firstPatient.addCharge(1500);
// console.log(firstPatient.getCost());
// console.log(secondPatient.getCost());

//6-----------------------------------------------------------
/*
 * У SmileCare діє знижка за лояльність: чим більше візитів,
 * тим більша знижка на лікування. Саме правило знижки —
 * внутрішня політика клініки, пацієнту його знати не треба:
 * він бачить лише кінцеву вартість.
 *
 * 1. Додай приватний метод #getLoyaltyDiscount(), який повертає знижку
 *    за кількістю візитів: 5 або більше — 0.2; 3 або більше — 0.1;
 *    інакше — 0.
 * 2. Додай публічний метод getFinalCost(), який повертає вартість
 *    лікування за відрахуванням знижки від #getLoyaltyDiscount().
 * 3. Виведи кінцеву вартість firstPatient (2 візити, знижки немає).
 * 4. Виведи кінцеву вартість secondPatient (5 візитів, знижка діє).
 */

// class Patient {
//   #treatmentCost;

//   constructor(params) {
//     this.name = params.patient;
//     this.visitsCount = params.visits;
//     this.#treatmentCost = params.cost;
//   }

//   #getLoyaltyDiscount() {
//     if (this.visitsCount >= 5) {
//       return 0.2;
//     } else if (this.visitsCount >= 3) {
//       return 0.1;
//     } else {
//       return 0;
//     }
//   }

//   getFinalCost() {
//     const discount = this.#getLoyaltyDiscount();
//     return this.#treatmentCost - this.#treatmentCost * discount;
//   }
// }

// const firstPatient = new Patient({
//   patient: 'Alex',
//   visits: 2,
//   cost: 4000,
// });

// const secondPatient = new Patient({
//   patient: 'Nora',
//   visits: 5,
//   cost: 4000,
// });

// console.log(firstPatient.getFinalCost());
// console.log(secondPatient.getFinalCost());

//7----------------------------------------------
/*
 * Електромобіль — це той самий транспорт: у нього є марка й максимальна
 * швидкість. Але є й своє, чого немає у звичайного транспорту, — запас
 * ходу на одному заряді.
 *
 * 1. Клас Vehicle уже готовий — не змінюй його.
 * 2. Оголоси клас ElectricCar, який успадковує Vehicle через extends.
 * 3. Додай йому конструктор: виклич super(params), а тоді запиши
 *    у властивість batteryRange значення з params.range.
 * 4. Додай метод getRange(), який повертає рядок у форматі
 *    "марка: N km on a charge" — наприклад "Tesla Model 3: 500 km on a charge".
 */

// class Vehicle {
//   constructor(params) {
//     this.brand = params.brand;
//     this.maxSpeed = params.speed;
//   }

//   getInfo() {
//     return `${this.brand}, up to ${this.maxSpeed} km/h`;
//   }
// }

// // Твій код тут

// class ElectricCar extends Vehicle {
//   constructor(params) {
//     super(params);
//     this.batteryRange = params.range;
//   }

//   getRange() {
//     return `${this.brand}: ${this.batteryRange} km on a charge`;
//   }
// }

// const tesla = new ElectricCar({
//   brand: 'Tesla Model 3',
//   speed: 225,
//   range: 500,
// });

// console.log(tesla.getInfo()); // Tesla Model 3, up to 225 km/h
// console.log(tesla.getRange()); // Tesla Model 3: 500 km on a charge
