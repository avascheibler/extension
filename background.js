let color = '#000000';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color: "#ffc4f0", color2: "#000000" });
    console.log('Default background color set to %cgreen', `color: ${color}`)
});