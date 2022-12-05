// @tsc checkJS
// getting button from dom
var document: Document;
var button = document.querySelector(".button") as HTMLButtonElement;
button.addEventListener("click", async function getJoke() {
  var jokeData = await fetch(
    "https://programmer-humor.p.rapidapi.com/api/9gag",
    {
      headers: {
        "X-RapidAPI-Key": "aba313efebmsh87b529942319c1fp136d05jsnc8320a0a5387",
        "X-RapidAPI-Host": "programmer-humor.p.rapidapi.com",
      },
    }
  );
  var jokeObjConverter: any = await jokeData.json();
  text.innerHTML = jokeObjConverter.joke;
  console.log(jokeData);
});
// getting text to display the joke from dom
var text = document.querySelector(".text") as HTMLHeadingElement;
