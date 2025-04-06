const g_reg = /^https?:\/\/(\w+\.)*[\w\d-]*(google|chrome|gstatic|youtube|ytimg)[\w\d-]*\.\w+\/?/;

chrome.webRequest.onBeforeRequest.addListener((d) => {
  if (g_reg.test(d.initiator ?? "") || g_reg.test(d.url)) {
    console.log(`%cBLK ${d.url}`, "background:red");
    return {
        redirectUrl: "data:application/octet-stream,",
        cancel: true
    }
  }
  console.log(`%cGET ${d.url}`, "");
}, { urls: ["*://*/*"] });
