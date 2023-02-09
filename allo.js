// data = [
//   {
//     article_id: 34,
//     title: "The Notorious MSG’s Unlikely Formula For Success",
//     topic: "cooking",
//     author: "grumpy19",
//     body: "The 'umami' craze has turned a much-maligned and m…at there was never anything wrong with it at all.",
//   },

//   {
//     article_id: 12,
//     title: "The battle for Node.js security has only begun",
//     topic: "coding",
//     author: "tickle122",
//     body: "The founder of the Node Security Project says Node…e of the massive iceberg underneath, he stressed.",
//   },

//   {
//     article_id: 6,
//     title: "JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals",
//     topic: "coding",
//     author: "grumpy19",
//     body: "Functions are objects in JavaScript, as you should…nctions; you will learn more about this in a bit.",
//   },

//   {
//     article_id: 1,
//     title: "Running a Node App",
//     topic: "coding",
//     author: "jessjelly",
//     body: "This is part two of a series on how to get up and …and how to set it up in a production environment.",
//   },

//   {
//     article_id: 21,
//     title: "Agility Training Drills For Football Players",
//     topic: "football",
//     author: "tickle122",
//     body: "There are so many areas of focus when it comes to … how to use both pieces of equipment effectively:",
//   },

//   {
//     article_id: 7,
//     title: "Using React Native: One Year Later",
//     topic: "coding",
//     author: "tickle122",
//     body: "When I interviewed for the iOS developer opening a…ive for a while, I am glad we made that decision.",
//   },

//   {
//     article_id: 8,
//     title: "Express.js: A Server-Side JavaScript Framework",
//     topic: "coding",
//     author: "cooljmessy",
//     body: "You’re probably aware that JavaScript is the progr…e are changing the way developers build websites.",
//   },

//   {
//     article_id: 33,
//     title: "Seafood substitutions are increasing",
//     topic: "cooking",
//     author: "weegembump",
//     body: "'SEAFOOD fraud is a serious global problem', begin… study suggests that the phenomenon is spreading.",
//   },

//   {
//     article_id: 19,
//     title: "Who are the most followed clubs and players on Instagram?",
//     topic: "football",
//     author: "jessjelly",
//     body: "Manchester United are the UK's most popular club o…ia site (around 165m) following a sports account.",
//   },

//   {
//     article_id: 4,
//     title: "Making sense of Redux",
//     topic: "coding",
//     author: "jessjelly",
//     body: "When I first started learning React, I remember re…ogy — Redux (a variant of the Flux architecture).",
//   },
// // 10
//   {
//     article_id: 18,
//     title: "The People Tracking Every Touch, Pass And Tackle in the World Cup",
//     topic: "football",
//     author: "grumpy19",
//     body: "With each click and drag of a mouse, young soccer …at for so long bucked the sports-analytics trend.",
//   },
// ];
// let need4Articles = []  


// // console.log("🚨🔥 ", data.length);
// let randomNumber = null
// // do{
// //     randomNumber = Math.floor(Math.random() * data.length)
// //     if(!data[randomNumber].includes(need4Articles)){
// //         need4Articles.push(data[randomNumber])
// //     }
// // }while(need4Articles.length < 4)
// let result = [];

// let randomIndex;

//   useEffect(() => {
// data.then((res) => {
//         setArticles(res);
//       })
//       .then((res) => {
//         setArticles(
//           res.articles
//             .sort((a, b) => {
//               return new Date(b.created_at) - new Date(a.created_at);
//             })
//             .slice(0, 4)
//         );
//       });
//   }, [setArticles]);
//   console.log("🔥setArticles", articles);


// while (result.length < 4) {
//     randomIndex = Math.floor(Math.random() * data.length);
//     if (!result.includes(data[randomIndex])) {
//         result.push(data[randomIndex]);
//     }
// }
// console.log("🚨🔥  file: allo.js:102  result", result);

// const convertDate = (date) => {
//   const newDate = new Date(date);
//   const day = newDate.getDate().toString().padStart(2, '0');
//   const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
//   const year = newDate.getFullYear().toString().slice(-2);
//   return `${day}/${month}/${year}`;
// };

// console.log
// (convertDate("2020-07-20T12:00:00.000Z"))