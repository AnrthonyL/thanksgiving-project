
function thankful() {
    let things = ["Family", "Friends", "Food", "My home", "Good memories"];

    let random = Math.floor(Math.random() * things.length);

    document.getElementById("message").innerHTML = 
        "You can be thankful for " + things[random] + "!";
}

function changeFact() {
    let facts = [
        "Thanksgiving became a national holiday in 1863.",
        "The first Thanksgiving lasted three days.",
        "Thanksgiving is celebrated on the fourth Thursday of November.",
        "The Macy's parade started in 1924."
    ];

    let random = Math.floor(Math.random() * facts.length);

    document.getElementById("fact").innerHTML = facts[random];
}
