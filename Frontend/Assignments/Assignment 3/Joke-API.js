// getting button from dom
const button = document
  .querySelector("#button")
  .addEventListener("click", async function getJoke() {
    const jokeData = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const jokeObjConverter = await jokeData.json();
    text.innerHTML = jokeObjConverter.joke;
    console.log(jokeData);
  });
// getting text to display the joke from dom
const text = document.querySelector("#text");
