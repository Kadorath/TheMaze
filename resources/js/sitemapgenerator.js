let visitedSites = []
let sitename = ""

let $sidebar;

function init() {
    sitename = $("header").text();
    $sidebar = $(".sidebar");
}

function GenerateSiteMap() {
    if (sessionStorage.getItem("visited") == null)
        sessionStorage.setItem("visited", "[]");

    console.log(sessionStorage.getItem("visited"));
    visitedSites = JSON.parse(sessionStorage.getItem("visited"));

    if (!visitedSites.includes(sitename)) {
        visitedSites.push(sitename);
    }

    visitedSites.forEach(element => {
        $sidebar.append(`<a href=${element}.html>${element}</a>\n`);
    });

    sessionStorage.setItem("visited", JSON.stringify(visitedSites));
}

window.onpageshow = GenerateSiteMap;
window.onload = init;