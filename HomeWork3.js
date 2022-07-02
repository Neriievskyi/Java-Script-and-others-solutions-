// // // Task 1.
// // // Написать функцию, которая найдет и выведет в консоль юзеров, зарегистрированных 09.10.2021 и 10.10.2021).
// // // const users = [
// // //         {
// // //             firstName: 'John',
// // //             lastName: 'Caper',
// // //             phone: '7436676737634',
// // //            registrationDate: '12.10.2021'
// // //         },
// // //         {
// // //             firstName: 'Clark',
// // //             lastName: 'Kent',
// // //             phone: '4346676737634',
// // //             registrationDate: '16.09.2021'
// // //         },
// // //         {
// // //             firstName: 'Tony',
// // //             lastName: 'Stark',
// // //             phone: '7436698337634',
// // //             registrationDate: '11.10.2021'
// // //         },
// // //         {
// // //             firstName: 'Bruce',
// // //             lastName: 'Wayne',
// // //             phone: '1111176737634',
// // //             registrationDate: '09.10.2021'
// // //         },
// // //         {
// // //             firstName: 'Star',
// // //             lastName: 'Lord',
// // //             phone: '7439374737634',
// // //             registrationDate: '10.10.2021'
// // //         },
// // //         {
// // //             firstName: 'Kate',
// // //             lastName: 'Bishop',
// // //             phone: '7436693647634',
// // //             registrationDate: '11.10.2021'
// // //         },
// // //         {
// // //             firstName: 'Jerry',
// // //             lastName: 'James',
// // //             phone: '7409048737634',
// // //             registrationDate: '10.10.2021'
// // //         },
// // //         {
// // //             firstName: 'Jeremy',
// // //             lastName: 'Clarkson',
// // //             phone: '743667600289334',
// // //             registrationDate: '16.10.2020'
// // //         },
// // //         {
// // //             firstName: 'Robert',
// // //             lastName: 'Patrik',
// // //             phone: '7436676730093',
// // //             registrationDate: '10.10.2020'
// // //         },
// // //         {
// // //             firstName: 'Jonny',
// // //             lastName: 'Sins',
// // //             phone: '74923982737634',
// // //             registrationDate: '01.01.2021'
// // //         },
// // //         {
// // //             firstName: 'Andrew',
// // //             lastName: 'Garfield',
// // //             phone: '743667988344',
// // //             registrationDate: '09.10.2019'
// // //         },
// // //         {
// // //             firstName: 'Jane',
// // //             lastName: 'Foster',
// // //             phone: '74368783427634',
// // //             registrationDate: '09.10.2019'
// // //         },
// // //         {
// // //             firstName: 'Rick',
// // //             lastName: 'Smith',
// // //             phone: '700000037634',
// // //             registrationDate: '12.10.2021'
// // //         },
// // //     ];
// // // Решение в одну строку!
// //     // const usersUnique = users.filter(el => (el.registrationDate === '09.10.2021' || el.registrationDate === '10.10.2021'));
// //     // console.log(usersUnique);

// //     // Решение используя if()
// //     // const filtered = users.filter((key) => {
// //     //     if(key.registrationDate === '09.10.2021' || key.registrationDate === '10.10.2021'){
// //     //         return users;
// //     //     }
// //     // });
// //     // console.log(filtered);

// //     // Решение с использованием функции.
// //     // function unique(date1, date2){
// //     //     return users.filter(el => (el.registrationDate === date1 || el.registrationDate === date2))
// //     // }
// //     // console.log(unique('09.10.2021', '10.10.2021'));

// // // Task 2*
// // // Дан массив объектов. Каждый объект является идентификационной карточкой человека. Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.
// // // Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании
// // // Модуль fs в Node.js предоставляет полезные функции для взаимодействия с файловой системой. Включая, но не ограничиваясь считывание/доступ к файлам внутри файловой системы где мы находимся.

// // const peoplesCards = [{
// //     "name": "Leanne Graham",
// //     "username": "Bret",
// //     "email": "Sincere@april.biz",
// //     "address": {
// //         "street": "Kulas Light",
// //         "suite": "Apt. 556",
// //         "city": "Gwenborough",
// //         "zipcode": "92998-3874",
// //         "geo": {
// //             "lat": "-37.3159",
// //             "lng": "81.1496"
// //         }
// //     },
// //     "phone": "1-770-736-8031 x56442",
// //     "website": "hildegard.org",
// //     "company": {
// //         "name": "Romaguera-Crona",
// //         "catchPhrase": "Multi-layered client-server neural-net",
// //         "bs": "harness real-time e-markets"
// //     }
// // },
// // {
// //     "name": "Clementine Bauch",
// //     "username": "Samantha",
// //     "email": "Nathan@yesenia.net",
// //     "address": {
// //         "street": "Douglas Extension",
// //         "suite": "Suite 847",
// //         "city": "McKenziehaven",
// //         "zipcode": "59590-4157",
// //         "geo": {
// //             "lat": "-68.6102",
// //             "lng": "-47.0653"
// //         }
// //     },
// //     "phone": "1-463-123-4447",
// //     "website": "ramiro.info",
// //     "company": {
// //         "name": "Romaguera-Jacobson",
// //         "catchPhrase": "Face to face bifurcated interface",
// //         "bs": "e-enable strategic applications"
// //     }
// // },
// // {
// //     "name": "Ervin Howell",
// //     "username": "Antonette",
// //     "email": "Shanna@melissa.tv",
// //     "address": {
// //         "street": "Victor Plains",
// //         "suite": "Suite 879",
// //         "city": "Wisokyburgh",
// //         "zipcode": "90566-7771",
// //         "geo": {
// //             "lat": "-43.9509",
// //             "lng": "-34.4618"
// //         }
// //     },
// //     "phone": "010-692-6593 x09125",
// //     "website": "anastasia.net",
// //     "company": {
// //         "name": "Deckow-Crist",
// //         "catchPhrase": "Proactive didactic contingency",
// //         "bs": "synergize scalable supply-chains"
// //     }
// // },
// // {
// //     "name": "Clementine Bauch",
// //     "username": "Samantha",
// //     "email": "Nathan@yesenia.net",
// //     "address": {
// //         "street": "Douglas Extension",
// //         "suite": "Suite 847",
// //         "city": "McKenziehaven",
// //         "zipcode": "59590-4157",
// //         "geo": {
// //             "lat": "-68.6102",
// //             "lng": "-47.0653"
// //         }
// //     },
// //     "phone": "1-463-123-4447",
// //     "website": "ramiro.info",
// //     "company": {
// //         "name": "Romaguera-Jacobson",
// //         "catchPhrase": "Face to face bifurcated interface",
// //         "bs": "e-enable strategic applications"
// //     }
// // },
// // {
// //     "name": "Patricia Lebsack",
// //     "username": "Karianne",
// //     "email": "Julianne.OConner@kory.org",
// //     "address": {
// //         "street": "Hoeger Mall",
// //         "suite": "Apt. 692",
// //         "city": "South Elvis",
// //         "zipcode": "53919-4257",
// //         "geo": {
// //             "lat": "29.4572",
// //             "lng": "-164.2990"
// //         }
// //     },
// //     "phone": "493-170-9623 x156",
// //     "website": "kale.biz",
// //     "company": {
// //         "name": "Robel-Corkery",
// //         "catchPhrase": "Multi-tiered zero tolerance productivity",
// //         "bs": "transition cutting-edge web services"
// //     }
// // },
// // {
// //     "name": "Chelsey Dietrich",
// //     "username": "Kamren",
// //     "email": "Lucio_Hettinger@annie.ca",
// //     "address": {
// //         "street": "Skiles Walks",
// //         "suite": "Suite 351",
// //         "city": "Roscoeview",
// //         "zipcode": "33263",
// //         "geo": {
// //             "lat": "-31.8129",
// //             "lng": "62.5342"
// //         }
// //     },
// //     "phone": "(254)954-1289",
// //     "website": "demarco.info",
// //     "company": {
// //         "name": "Keebler LLC",
// //         "catchPhrase": "User-centric fault-tolerant solution",
// //         "bs": "revolutionize end-to-end systems"
// //     }
// // },
// // {
// //     "name": "Clementine Bauch",
// //     "username": "Samantha",
// //     "email": "Nathan@yesenia.net",
// //     "address": {
// //         "street": "Douglas Extension",
// //         "suite": "Suite 847",
// //         "city": "McKenziehaven",
// //         "zipcode": "59590-4157",
// //         "geo": {
// //             "lat": "-68.6102",
// //             "lng": "-47.0653"
// //         }
// //     },
// //     "phone": "1-463-123-4447",
// //     "website": "ramiro.info",
// //     "company": {
// //         "name": "Romaguera-Jacobson",
// //         "catchPhrase": "Face to face bifurcated interface",
// //         "bs": "e-enable strategic applications"
// //     }
// // },
// // {
// //     "name": "Mrs. Dennis Schulist",
// //     "username": "Leopoldo_Corkery",
// //     "email": "Karley_Dach@jasper.info",
// //     "address": {
// //         "street": "Norberto Crossing",
// //         "suite": "Apt. 950",
// //         "city": "South Christy",
// //         "zipcode": "23505-1337",
// //         "geo": {
// //             "lat": "-71.4197",
// //             "lng": "71.7478"
// //         }
// //     },
// //     "phone": "1-477-935-8478 x6430",
// //     "website": "ola.org",
// //     "company": {
// //         "name": "Considine-Lockman",
// //         "catchPhrase": "Synchronised bottom-line interface",
// //         "bs": "e-enable innovative applications"
// //     }
// // },
// // {
// //     "name": "Kurtis Weissnat",
// //     "username": "Elwyn.Skiles",
// //     "email": "Telly.Hoeger@billy.biz",
// //     "address": {
// //         "street": "Rex Trail",
// //         "suite": "Suite 280",
// //         "city": "Howemouth",
// //         "zipcode": "58804-1099",
// //         "geo": {
// //             "lat": "24.8918",
// //             "lng": "21.8984"
// //         }
// //     },
// //     "phone": "210.067.6132",
// //     "website": "elvis.io",
// //     "company": {
// //         "name": "Johns Group",
// //         "catchPhrase": "Configurable multimedia task-force",
// //         "bs": "generate enterprise e-tailers"
// //     }
// // },
// // {
// //     "name": "Clementina DuBuque",
// //     "username": "Moriah.Stanton",
// //     "email": "Rey.Padberg@karina.biz",
// //     "address": {
// //         "street": "Kattie Turnpike",
// //         "suite": "Suite 198",
// //         "city": "Lebsackbury",
// //         "zipcode": "31428-2261",
// //         "geo": {
// //             "lat": "-38.2386",
// //             "lng": "57.2232"
// //         }
// //     },
// //     "phone": "024-648-3804",
// //     "website": "ambrose.net",
// //     "company": {
// //         "name": "Hoeger LLC",
// //         "catchPhrase": "Centralized empowering task-force",
// //         "bs": "target end-to-end models"
// //     }
// // },
// // {
// //     "name": "Leanne Graham",
// //     "username": "Bret",
// //     "email": "Sincere@april.biz",
// //     "address": {
// //         "street": "Kulas Light",
// //         "suite": "Apt. 556",
// //         "city": "Gwenborough",
// //         "zipcode": "92998-3874",
// //         "geo": {
// //             "lat": "-37.3159",
// //             "lng": "81.1496"
// //         }
// //     },
// //     "phone": "1-770-736-8031 x56442",
// //     "website": "hildegard.org",
// //     "company": {
// //         "name": "Romaguera-Crona",
// //         "catchPhrase": "Multi-layered client-server neural-net",
// //         "bs": "harness real-time e-markets"
// //     }
// // },
// // {
// //     "name": "Nicholas Runolfsdottir V",
// //     "username": "Maxime_Nienow",
// //     "email": "Sherwood@rosamond.me",
// //     "address": {
// //         "street": "Ellsworth Summit",
// //         "suite": "Suite 729",
// //         "city": "Aliyaview",
// //         "zipcode": "45169",
// //         "geo": {
// //             "lat": "-14.3990",
// //             "lng": "-120.7677"
// //         }
// //     },
// //     "phone": "586.493.6943 x140",
// //     "website": "jacynthe.com",
// //     "company": {
// //         "name": "Abernathy Group",
// //         "catchPhrase": "Implemented secondary concept",
// //         "bs": "e-enable extensible e-tailers"
// //     }
// // },
// // {
// //     "name": "Clementine Bauch",
// //     "username": "Samantha",
// //     "email": "Nathan@yesenia.net",
// //     "address": {
// //         "street": "Douglas Extension",
// //         "suite": "Suite 847",
// //         "city": "McKenziehaven",
// //         "zipcode": "59590-4157",
// //         "geo": {
// //             "lat": "-68.6102",
// //             "lng": "-47.0653"
// //         }
// //     },
// //     "phone": "1-463-123-4447",
// //     "website": "ramiro.info",
// //     "company": {
// //         "name": "Romaguera-Jacobson",
// //         "catchPhrase": "Face to face bifurcated interface",
// //         "bs": "e-enable strategic applications"
// //     }
// // },
// // {
// //     "name": "Glenna Reichert",
// //     "username": "Delphine",
// //     "email": "Chaim_McDermott@dana.io",
// //     "address": {
// //         "street": "Dayna Park",
// //         "suite": "Suite 449",
// //         "city": "Bartholomebury",
// //         "zipcode": "76495-3109",
// //         "geo": {
// //             "lat": "24.6463",
// //             "lng": "-168.8889"
// //         }
// //     },
// //     "phone": "(775)976-6794 x41206",
// //     "website": "conrad.com",
// //     "company": {
// //         "name": "Yost and Sons",
// //         "catchPhrase": "Switchable contextually-based project",
// //         "bs": "aggregate real-time technologies"
// //     }
// // },
// // {
// //     "name": "Clementina DuBuque",
// //     "username": "Moriah.Stanton",
// //     "email": "Rey.Padberg@karina.biz",
// //     "address": {
// //         "street": "Kattie Turnpike",
// //         "suite": "Suite 198",
// //         "city": "Lebsackbury",
// //         "zipcode": "31428-2261",
// //         "geo": {
// //             "lat": "-38.2386",
// //             "lng": "57.2232"
// //         }
// //     },
// //     "phone": "024-648-3804",
// //     "website": "ambrose.net",
// //     "company": {
// //         "name": "Hoeger LLC",
// //         "catchPhrase": "Centralized empowering task-force",
// //         "bs": "target end-to-end models"
// //     }
// // },
// // {
// //     "name": "Mrs. Dennis Schulist",
// //     "username": "Leopoldo_Corkery",
// //     "email": "Karley_Dach@jasper.info",
// //     "address": {
// //         "street": "Norberto Crossing",
// //         "suite": "Apt. 950",
// //         "city": "South Christy",
// //         "zipcode": "23505-1337",
// //         "geo": {
// //             "lat": "-71.4197",
// //             "lng": "71.7478"
// //         }
// //     },
// //     "phone": "1-477-935-8478 x6430",
// //     "website": "ola.org",
// //     "company": {
// //         "name": "Considine-Lockman",
// //         "catchPhrase": "Synchronised bottom-line interface",
// //         "bs": "e-enable innovative applications"
// //     }
// // }
// // ]

// // // const fs = require('fs');
// // // let user = JSON.parse(fs.readFileSync('task2.json'));

// // // function uniqueFunc() {
// // //     let unique1 = [];
// // //     user.forEach(element => {
// // //         if (!unique1.includes(JSON.stringify(element))) unique1.push(JSON.stringify(element))
            
// // //         });
// // //         return unique1.map(element => JSON.parse(element));
// // // }
// // // console.log(uniqueFunc());

// // // Решение 2.

// // // let unique = Array.from(new Set(peoplesCards.map((item) => JSON.stringify(item)))).map((item) => JSON.parse(item));
// // // console.log(unique);


// const enterprises = [
//     {
//       id: 1,
//       name: "Предприятие 1",
//       departments: [
//         {
//           id: 2,
//           name: "Отдел тестирования",
//           employees_count: 10,
//         },
//         {
//           id: 3,
//           name: "Отдел маркетинга",
//           employees_count: 20,
//         },
//         {
//           id: 4,
//           name: "Администрация",
//           employees_count: 15,
//         },
//       ]
//     },
//     {
//       id: 5,
//       name: "Предприятие 2",
//       departments: [
//         {
//           id: 6,
//           name: "Отдел разработки",
//           employees_count: 50,
//         },
//         {
//           id: 7,
//           name: "Отдел маркетинга",
//           employees_count: 20,
//         },
//         {
//           id: 8,
//           name: "Отдел охраны труда",
//           employees_count: 5,
//         },
//       ]
//     },
//     {
//       id: 9,
//       name: "Предприятие 3",
//       departments: [
//         {
//           id: 10,
//           name: "Отдел аналитики",
//           employees_count: 0,
//         },
//       ]
//     }
//   ]

// //   Task 3.1
// // 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// const employeesCountHelper = function(number){         
//     lastNumber = number.toString().split('').pop();    
//     if(lastNumber && number){                          
//         if(lastNumber == 1) return `${number} сотрудник`; 
//         else if(lastNumber > 1 && lastNumber < 5) return `${number} сотрудника`; 
//         else return `${number} сотрудников`;           
//     } else return 'нет сотрудников';                   
// };

// // Обьяснение:
// // Ф-я, которая проверяет последнюю цифру числа сотрудников и подбирает правильное окончание
// // Берем число, переводим в строку, затем в массив, и забираем послед. елемент
// // Если число пришло и оно не 0
// // Если это 1 - возвращаем 1 сотрудник
// // Если 2-4 включительно - 2-4 сотрудника
// // 5-9 - сотрудников
// // нет сотрудников



// const getStructure = function(company){                
//     company.forEach((comp) => {                        
//         let departments = [];                          
//         let count = 0;                                 
//         departments.push(comp.name);                   
//         if(comp.departments){                          
//             comp.departments.forEach((dept) => {       
//                 count += dept.employees_count;         
//                 departments.push(` - ${dept.name} ${employeesCountHelper(dept.employees_count)}`);   
//             });
//             departments[0] += ` (${employeesCountHelper(count)})`; 
//         }
//         console.log(departments.join(`\n `));         
//     });
// };

// getStructure(enterprises);
// // Обьяснение:
// // Функция принимает массив
// // Проходим циклом по массиву
// // Массив департаментов
// // Количество сотрудников данный момент. На каждой итерации создается заново
// // В массив департаментов пушим название предприятия(пока без цифры)
// // Проверка на то, есть ли подразделения и стоит ли идти глубже
// // Запускаем цикл уже по департаментам
// // Записываем в переменную кол-во сотрудников в первом департаменте
// // В массив департаментов пушим название подразделения и кол-во сотрудников (ф-я employeesCountHelper красиво выводит окончания)
// // Записываем цифру к названию предприятия (кол-во сотрудников)
// // Вывод в консоль интересующих нас значений

// // 3.2 Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
// // Пример:
// // getEnterpriseName(4) // Предприятие 1
// // getEnterpriseName("Отдел маркетинга") Предприятие // 2


// const getEnterpriseByDepartment = function(val){
//     let enterprise;
//     enterprises.forEach(ent => {
//         let department;
//         if(ent.departments){
//             department = ent.departments.find(dept => {return dept.id === val || dept.name === val})
//         }
//         if(department) enterprise = ent;
//     })
//     return enterprise ? enterprise : `Нет организации с id == ${val} или именем ${val}`;
// }
// console.log(getEnterpriseByDepartment(3));

// // Обьяснение:
// // В ф-ю передаем id 
// // В эту переменную, в конце, упадет ссылка на искомый объект
// // Циклом идем по массиву
// // В переменную ляжет ссылка на объект 'departments'
// // Если у нашего предприятия есть подразделения departments, то выполняем условие
// // Передаем ссылку на объект 'departments', который удовлетворяет параметрам поиска
// // Если подразделение/department вернулся - в enterprise кладем ent
// // Возвращаем: при условии что  в enterprise есть объект/true возвращаем сам enterprise, а если false - вернем текст...

// // 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
// // Пример:
// // addEnterprise("Название нового предприятия")

// // Ф-я, которая ищет значения id компании или департамента, выбирает максимальный и возвращает +1

// const getNewId = function(company){
//     let maxId = 0;
//     company.forEach(comp => {
//         if(maxId < comp.id) maxId = comp.id
//         if(comp.departments){
//             comp.departments.forEach(dept => {
//                 if(maxId < dept.id) maxId = dept.id
//             })
//         }

//     })
//     return maxId + 1;
// }

// const addEnterprise = function(name){
//     enterprises.push({
//         id : getNewId(enterprises),
//         name : name,
//         departments : []
//     })
// }
// addEnterprise('Testers')
// console.log(enterprises);

