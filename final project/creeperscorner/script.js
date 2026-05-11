// JavaScript Object
let minecraftItem = {
    name: "Diamond Sword",
    damage: 10
};

console.log(minecraftItem);

// Session Storage
function saveItem() {

    sessionStorage.setItem("favoriteItem", "Diamond Sword");

    document.getElementById("message").innerHTML =
        "Favorite item saved!";
}