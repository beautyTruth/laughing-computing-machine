// // https://icanhazdadjoke.com/api

// const jokeBtn = document.querySelector("button");
// const jokePara = document.querySelector(".joke");
// console.log(jokePara);

// jokeBtn.addEventListener("click", getJoke);

// async function getJoke() {
//   const jokeURL = "https://icanhazdadjoke.com/";
//   const response = await fetch(jokeURL, {
//     headers: {
//       Accept: "application/json",
//     },
//   });

//   const responseData = await response.json();
//   jokePara.innerText = responseData.joke;
// }

// be here now

/*
my code below
*/

const jokeBtn = document.querySelector("button");
const jokePara = document.querySelector(".joke");
console.log(jokePara);

jokeBtn.addEventListener("click", getJoke);

async function getJoke() {
  const jokeURL = "https://icanhazdadjoke.com/";
  const response = await fetch(jokeURL, {
    headers: {
      Accept: "application/json",
    },
  });

  const tiddy = await response.json();
  jokePara.innerText = tiddy.joke;
}
