var mainImg = document.querySelector("#main")
var itemImg = document.querySelectorAll("#item")


for (var i = 0; i < itemImg.length; i++) {
    itemImg[i].addEventListener("click", changeImg)
}

function changeImg() {
    var items = this.getAttribute("src")
    mainImg.setAttribute("src", items)
}