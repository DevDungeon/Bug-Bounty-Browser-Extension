$(document).ready(function () {
    let message = "";

    function addToggleTrigger(togglerId, divId) {
        var toggler = document.getElementById(togglerId)
        toggler.addEventListener("click", () => {
            var linksDiv = document.getElementById(divId);
            if (linksDiv.style.display === 'none') {
                linksDiv.style.display = 'block';
            } else {
                linksDiv.style.display = 'none';
            }
        });
    }
    addToggleTrigger('links-toggler', 'links');
    addToggleTrigger('scripts-toggler', 'scripts');
    addToggleTrigger('query-toggler', 'query-params');
    addToggleTrigger('comments-toggler', 'comments');

    // Listen for messages from the process_page.js that passes back information
    // about the HTML page being viewed, since this portion of the extension
    // doesn't have direct access to the page
    browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.type === "links") {
            document.getElementById('links').innerHTML = `<table>${request.html}</table>`
        }
        if (request.type === "scripts") {
            document.getElementById('scripts').innerHTML = `<table>${request.html}</table>`
        }
        if (request.type === "queryParams") {
            document.getElementById('query-params').innerHTML = `<table>${request.html}</table>`
        }
    });

    browser.tabs.executeScript({
        file: "process_page.js"
    });

    browser.tabs.active
    // // Look for query parameters in URLs
    // browser.tabs.query({})
    //     .then(tabs => {
    //         tabs.forEach((tab) => {
    //             let url = new URL(tab.url);
    //             // TODO turn in to a table
    //             message += url + "<br />";
    //             for (var param of url.searchParams) {
    //                 message += param[0] + ":" +
    //                     param[1] + "<br />"
    //             }
    //             document.getElementById('query-params').innerHTML = message;
    //         })
    //     });

});
