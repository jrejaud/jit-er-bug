//Get pagehead actions list
var pageheadActionsList = document.getElementsByClassName("pagehead-actions")[0];

//Create JitPack li
var newElement = document.createElement("li");

//Create JitPack Link
var jitPackLink = document.createElement("a");

var currentURL = window.location.toString();
var currentURLPath = currentURL.substring(currentURL.indexOf("github.com/")+11,currentURL.length);
var currentUser = currentURLPath.split("/")[0];
var currentRepo = currentURLPath.split("/")[1];

//Set JitPack Link
jitPackLink.setAttribute("href","https://jitpack.io/#"+currentUser+"/"+currentRepo);

//Style the button to look like the other github buttons
jitPackLink.setAttribute("class","btn btn-sm new-pull-request-btn");
jitPackLink.text = "JitPack";

//Add JitPack li to pagehead actions list
newElement.appendChild(jitPackLink);
pageheadActionsList.appendChild(newElement);