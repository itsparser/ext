document.getElementById("createAlert").addEventListener("click", function () {
  let createDiv = document.createElement("div");
  createDiv.innerHTML = "This is a div created by the Chrome extension!";
  document.body.appendChild(createDiv);
  let divs = document.querySelectorAll("div");
  console.log(divs);
  // alert(`This is an alert created by the Chrome extension! ${divs}`);
  // chrome.activeTab.executeScript(null, { file: "content.js" });
  // async function getTabId() {
  //   let [tab] = await chrome.tabs.query({ active: true });
  //   console.log("got current tab for the verificaiton", tab);
  //   return tab.id;
  // }

  chrome.scripting
    .executeScript({
      // target: { tabId: getTabId() },
      world: "MAIN",
      files: ["content.js"],
    })
    .then(() => console.log("script injected"));
});
