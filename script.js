import { topArtistList } from "./artists.js";

// Timer Variables and Function
function switchTimer(boolean) {
  let timerEnabled = boolean;
  if (!timerEnabled) return;
  let hoursItem = document.querySelector("#hoursItem");
  let minutesItem = document.querySelector("#minutesItem");
  let secondsItem = document.querySelector("#secondsItem");
  setInterval(function time() {
    let d = new Date();
    let hours = 23 - d.getHours();
    if ((hours + "").length == 1) {
      hours = "0" + hours;
    }
    let min = 59 - d.getMinutes();
    if ((min + "").length == 1) {
      min = "0" + min;
    }
    let sec = 59 - d.getSeconds();
    if ((sec + "").length == 1) {
      sec = "0" + sec;
    }
    hoursItem.textContent = hours;
    minutesItem.textContent = min;
    secondsItem.textContent = sec;
  });
}

const mainContainer = document.querySelector(".main");
const mainPage = document.querySelector("#mainPage");
const signUpPage = document.querySelector("#signUp");
const walletConnectPage = document.querySelector("#walletConnect");
const marketPlacePage = document.querySelector("#marketPlace");
const artistPage = document.querySelector("#artistPage");
const signUpButtonList = document.querySelectorAll(".signup__button");
const walletButtonList = document.querySelectorAll(".header__link_type_wallet");
const logoButton = document.querySelector(".header__logo-link");
const mobileMenuButton = document.querySelector(".menu__btn");
const menuMobile = document.querySelector(".header__menu-items");
const marketPlaceButtonList = document.querySelectorAll("#marketPlace__link");
// console.log(artistPage);

function createBlock(template) {
  const block = template.content.cloneNode(true);
  return block;
}

function addBlock(template, container) {
  const block = createBlock(template);
  container.append(block);
}

function clearContainer(container) {
  const arr = Array.from(container.childNodes);
  arr.forEach((item) => {
    item.remove();
  });
}

function renderSection(template, container) {
  clearContainer(container);
  addBlock(template, container);
}

function disableBarButton(button, counter) {
  button.classList.add("bar__button_inactive");
  counter.classList.add("bar__counter_inactive");
}

function enableBarButton(button, counter) {
  button.classList.remove("bar__button_inactive");
  counter.classList.remove("bar__counter_inactive");
}

function toggleBarButton(button, counter) {
  button.classList.toggle("bar__button_inactive");
  counter.classList.toggle("bar__counter_inactive");
}
function toggleMobileMenu() {
  menuMobile.classList.toggle("header__menu-items_active");
}

function initializeMarketPlace() {
  const marketPlaceBar = document.querySelector(".marketplace__bar");
  const nftButton = marketPlaceBar.querySelector("#NFTs_button");
  const collectionsButton = marketPlaceBar.querySelector("#Collections");
  const nftCounter = marketPlaceBar.querySelector("#NFTcounter");
  const collectionsCounter = marketPlaceBar.querySelector(
    "#CollectionsCounter"
  );
  const nftContainer = document.querySelector(".NFTs");
  const nftBlock = document.querySelector("#NFT__block");
  const collectionsBlock = document.querySelector("#collections__block");
  renderSection(nftBlock, nftContainer);
  disableBarButton(collectionsButton, collectionsCounter);
  collectionsButton.addEventListener("click", () => {
    renderSection(collectionsBlock, nftContainer);
    enableBarButton(collectionsButton, collectionsCounter);
    disableBarButton(nftButton, nftCounter);
  });
  nftButton.addEventListener("click", () => {
    renderSection(nftBlock, nftContainer);
    disableBarButton(collectionsButton, collectionsCounter);
    enableBarButton(nftButton, nftCounter);
  });
}

function initializeMainPage() {
  renderSection(mainPage, mainContainer);
  switchTimer(true);
  const signUpButtonList = document.querySelectorAll(".signup__button");
  signUpButtonList.forEach((item) => {
    item.addEventListener("click", () => {
      renderSection(signUpPage, mainContainer);
    });
  });
  const artistCardList = document.querySelectorAll(".creators__card");
  console.log(artistCardList);
  const artistCardListArr = Array.from(artistCardList);
  console.log(artistCardListArr);
  artistCardListArr.forEach((item) => {
    const artistName = item.querySelector(".creators__name");
    const artistAvatar = item.querySelector(".creators__avatar");
    const artistIndex = artistCardListArr.indexOf(item);
    artistName.textContent = topArtistList[artistIndex].userName;
    artistAvatar.src = topArtistList[artistIndex].userPic;
    item.addEventListener("click", () => {
      initializeArtistPage(artistIndex);
    });
  });

  // const artistName = artistCard.querySelector(".creators__name");
  // const artistAvatar = artistCard.querySelector(".creators__avatar");

  // artistCard.addEventListener("click", () => {
  //   initializeArtistPage();
  // });
}

function initializeArtistPage(artistIndex) {
  renderSection(artistPage, mainContainer);
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
  const artistCover = document.querySelector(".cover");
  const artistAvatar = artistCover.querySelector(".cover__artist-avatar");
  const artistInfo = document.querySelector(".artist");
  const artistName = artistInfo.querySelector(".artist__name");
  const artistBio = artistInfo.querySelector(".artist__bio-text");
  const artistCoverArt = artistCover.querySelector(".cover__image");
  artistAvatar.src = topArtistList[artistIndex].userPic;
  artistName.textContent = topArtistList[artistIndex].userName;
  artistBio.textContent = topArtistList[artistIndex].userBio;
  //УПРАВЛЕНИЕ ОБЛОЖКОЙ - ПОКА ОТКЛЮЧИМ
  // artistCoverArt.style.background = artistList[0].userCover;
  // artistCoverArt.style.backgroundRepeat = "no-repeat";
  // artistCoverArt.style.backgroundPosition = "center";
  // artistCoverArt.style.backgroundSize = "cover";
}

initializeMainPage();

signUpButtonList.forEach((item) => {
  item.addEventListener("click", () => {
    renderSection(signUpPage, mainContainer);
  });
});

walletButtonList.forEach((item) => {
  item.addEventListener("click", () => {
    renderSection(walletConnectPage, mainContainer);
  });
});

logoButton.addEventListener("click", () => {
  initializeMainPage();
});

marketPlaceButtonList.forEach((item) => {
  item.addEventListener("click", () => {
    renderSection(marketPlacePage, mainContainer);
    initializeMarketPlace();
  });
});

mobileMenuButton.addEventListener("click", () => {
  toggleMobileMenu();
});

// let artistList = [
//   {
//     userID: "1",
//     userName: "KeepItreal",
//     userPic: "./images/artist_avatar_1.png",
//   },
//   {
//     userID: "2",
//     userName: "DigiLab",
//     userPic: "./images/artist_avatar_2.png",
//   },
//   {
//     userID: "3",
//     userName: "GravityOne",
//     userPic: "./images/artist_avatar_3.png",
//   },
// ];

// const artistCard = document.querySelector(".creators__card");
// const artistName = artistCard.querySelector(".creators__name");
// const artistAvatar = artistCard.querySelector(".creators__avatar");
// // console.log(artistAvatar);
// // console.log(artistName);
// artistName.textContent = artistList[0].userName;
// artistAvatar.src = artistList[0].userPic;
// artistCard.addEventListener("click", () => {
//   renderSection(artistPage, mainContainer);
//   window.scrollTo({
//     top: 0,
//     behavior: "instant",
//   });
// });
