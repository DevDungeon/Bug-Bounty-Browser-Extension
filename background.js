
// browser.contextMenus.create({
//     id: "bug-bounty-process",
//     title: "Bug bounty: process page"
// });
//
// browser.contextMenus.onClicked.addListener(function(info, tab) {
//     if (info.menuItemId == "bug-bounty-process") {
//         console.log('right click context triggered');
//         browser.tabs.executeScript({
//             file: "process_page.js"
//         });
//     }
// });