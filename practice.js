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
