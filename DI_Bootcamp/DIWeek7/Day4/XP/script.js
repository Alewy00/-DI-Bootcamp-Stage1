// let url =
//   "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// let data = fetch(url)
//   .then((response) => {
//     if (response.ok) {
//       // console.log(response.json());
//       return response.json();
//     } else {
//       throw new Error("API error");
//     }
//   })
//   .then((data) => {
//     console.log(data.data);
//   });
// console.log(data);

// 2

// let url =
//   "https://api.giphy.com/v1/gifs/search?q=sun&offset=2&limit=10&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// let data = fetch(url)
//   .then((response) => {
//     if (response.ok) {
//       // console.log(response.json());
//       return response.json();
//     } else {
//       throw new Error("API error");
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   });

// 3

// fetch("https://www.swapi.tech/api/starships/9/")
//   .then((response) => response.json())
//   .then((objectStarWars) => console.log(objectStarWars.result));

const getStar = async () => {
  try {
    let response = await fetch("https://www.swapi.tech/api/starships/9/");
    let j = await response.json();
    if (!response.ok) {
      throw new Error("API Error");
    }
    console.log(j.result);
  } catch (error) {
    console.log(error);
  }
};
// getStar();

// 4

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();

// calling
// resolved
