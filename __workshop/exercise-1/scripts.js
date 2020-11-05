// Add your code here!
let h1 = document.createElement("h1");
let h2 = document.createElement("h2");
let pOne = document.createElement("p");
let pTwo = document.createElement("p");
let pThree = document.createElement("p");
let pFour = document.createElement("p");
let linkOne = document.createElement("a");
let image = document.createElement("img");

h1.innerText = "The best How I Met Your Mother episode (according to fans)";
pOne.innerText =
  "As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…";
h2.innerText = "The Slap Bet (Season 2, Episode 9)";
pTwo.innerText = "MDB Rating: 9.5";
image.src = "./images/robin-sparkles.jpg";
image.alt = "Robin Sparkles";
pThree.innerText =
  "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased";
pFour.innerText =
  "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).";
linkOne.href =
  "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/";
linkOne.innerText = "Source";

let mainSelect = document.querySelector("main");

mainSelect.appendChild(h1);
mainSelect.appendChild(pOne);
mainSelect.appendChild(h2);
mainSelect.appendChild(pTwo);
mainSelect.appendChild(image);
mainSelect.appendChild(pThree);
mainSelect.appendChild(pFour);
mainSelect.appendChild(linkOne);

const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = "styles.css";
document.head.appendChild(stylesheet);