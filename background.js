chrome.tabs.onActivated.addListener((tab) => {
  chrome.tabs.get(tab.tabId, (CurrentTabData) => {
          chrome.scripting.executeScript({
              target: { tabId: CurrentTabData.id },
              files: ['contentScript.js']
          });
  })

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message)
      chrome.tabs.sendMessage(
          tab.tabId,
          message,
          (response) => {
              console.log(response)
          }
      )
    sendResponse(message.type)
  })
  

})


