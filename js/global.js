$(document).ready(function () {
    let message = "";

    browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
        // TODO Parse HTML contents, look for links, scripts, HTML comments etc
        // or fallback to regular expressions
        console.log(request);
        //document.getElementById('processed-page').textContent = "Done."
    });

    browser.tabs.executeScript({
        file: "process_page.js"
    });

    // Look for query parameters in URLs
    browser.tabs.query({})
        .then(tabs => {

            message += "<h2>Query parameters found</h2>";
            tabs.forEach((tab) => {
                let url = new URL(tab.url);
                // TODO turn in to a table
                message += url + "<br />";
                for (var param of url.searchParams) {
                    message += param[0] + ":" +
                        param[1] + "<br />"
                }
                document.getElementById('main-content').innerHTML = message;
            })
        });

});
