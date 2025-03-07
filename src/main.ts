const g_reg = /^https?:\/\/(\\w+.)*(google|google-analytics|googletagmanager|chrome).(com|co\\.jp|net|org)\/?/;
chrome.webRequest.onBeforeRequest.addListener(d=>({
    cancel: g_reg.test(d.url)
}), {urls: ["<all_urls>"]}, ["blocking"])
