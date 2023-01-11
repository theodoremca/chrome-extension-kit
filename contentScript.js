console.log(typeof init,"typeof init");
if (typeof init === "undefined") {
  const init = function () {
    var text = "hello00000000000000";
    chrome.runtime.onMessage.addListener(function (
      message,
      sender,
      sendResponse
    ) {
      
      sendResponse("done");
    });
  };
  init();
}
