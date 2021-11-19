let color = '#000000';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color: "#ffc4f0", changeTextColor: "#fa32d9", color2: "#ff70c6", color3: "#ffe0f7"});
    console.log('Default background color set to %cgreen', `color: ${color}`)
});