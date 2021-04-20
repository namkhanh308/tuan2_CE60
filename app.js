import filmContainer from "./filmContainer.js";
import filmList from "./filmList.js";
import data from "./data.js";

let $filmList = document.getElementById("my-list");
// console.log(JSON.stringify(data));
$filmList.setAttribute("films", JSON.stringify(data));
