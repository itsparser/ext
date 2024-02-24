var div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "green";
div.style.position = "absolute";
div.style.top = "0";
div.style.left = "0";
document.body.appendChild(div);
console.log("Hello from content.js");
let permissions = chrome.permissions.getAll();
console.log("permissions", permissions);
document.addEventListener("*", function (event) {
  console.log("Event type: " + event.type);
});
