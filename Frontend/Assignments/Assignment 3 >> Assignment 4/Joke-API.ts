// @tsc checkJS
// getting button from dom
var document: Document;
var button = document.querySelector(".button") as HTMLButtonElement;
button.addEventListener("click", async function getJoke() {
  var jokeData = await fetch("https://v2.jokeapi.dev/joke/Programming", {
    headers: {
      Accept: "application/json",
    },
  });
  var jokeObjConverter: any = await jokeData.json();
  text.innerHTML = jokeObjConverter.joke;
  console.log(jokeData);
});
// getting text to display the joke from dom
var text = document.querySelector(".text") as HTMLHeadingElement;
