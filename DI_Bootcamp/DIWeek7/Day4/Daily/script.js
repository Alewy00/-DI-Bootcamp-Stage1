const gif_contain = document.getElementById("gif");
const submit = document.getElementById("submit");
const delAll = document.getElementById("delAll");

function delGif(gif) {
  gif_contain.removeChild(gif);
}

const search = async () => {
  const cat = document.getElementById("cat").value;
  let url = `https://api.giphy.com/v1/gifs/search?q=${cat}&limit=1&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;
  const response = await fetch(url);
  let gif = await response.json();
  const gifUrl = gif.data[0].images.original.url;
  const gifEle = document.createElement("div");
  gifEle.innerHTML = `<img src="${gifUrl}" alt="${cat}">
      <button class="delete">DELETE</button>`;
  gif_contain.appendChild(gifEle);
  const delButton = gifEle.querySelector(".delete");
  console.log(delButton);
  delButton.addEventListener("click", () => delGif(gifEle));
};

submit.addEventListener("click", function (e) {
  e.preventDefault();
  search();
});

function deleteAll() {
  gifContainer.innerHTML = "";
}

delAll.addEventListener("click", () => deleteAll());
