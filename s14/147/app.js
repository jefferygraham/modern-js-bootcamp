const newImg = document.createElement("img");
newImg.src =
  "https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80";
newImg.style.width = "300px";

document.body.appendChild(newImg);

const newLink = document.createElement("a");
newLink.innerText = "Mr. Bub's Video";
newLink.href = "https://www.youtube.com/watch?v=QQNL83fhWJU";

const firstP = document.querySelector("p");
firstP.appendChild(newLink);
