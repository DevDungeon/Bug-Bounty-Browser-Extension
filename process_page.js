
// let as = document.getElementsByTagName('a');
let links = document.getElementsByTagName('a');

for (i = 0; i < links.length; i++) {
    console.log("Link URL: " + links[i].getAttribute('href'));
    console.log("Link title: " + links[i].innerHTML);
    browser.runtime.sendMessage(links[i].innerHTML);
}



let scripts = document.getElementsByTagName('script');

for (i = 0; i < scripts.length; i++) {
    console.log("Script source URL: " + scripts[i].getAttribute('src'));
    console.log("Inline source: " + scripts[i].innerHTML);
    browser.runtime.sendMessage(scripts[i].innerHTML);
}
//
//
//
// console.log(as);

// browser.runtime.sendMessage(document.body.innerHTML);
// browser.runtime.sendMessage(json);
