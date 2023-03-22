// const url = 'https://intership-liga.ru/tasks/';

// const resPromisePost = fetch(url, {
//   method: 'POST',
//   headers: {
//     'content-type': 'application/json',
//   },
//   body: JSON.stringify({
//     id: 600,
//     name: 'CLN',
//     info: 'Lorem ipsum dolor sit amet.',
//     isImportant: false,
//     isComplited: true,
//   }),
// });
// resPromisePost
//   .then((res) => res.json())
//   .then((res) => console.log('Запись создана \n', res))
//   .catch((err) => console.log(err));

// class BaseAgent {
//   constructor(option) {
//     this.option = option;
//   }
//   async resPromisePost() {
//     let res = await fetch(url, {
//       method: 'GET',
//     });
//     let response = await res.json();
//     console.log(response, this.option);
//   }
// }

// // class Agent extends BaseAgent {
// //   constructor(option) {
// //     super(option);
// //   }
// // }

// // let a = new Agent('hi');
// // a.resPromisePost();
