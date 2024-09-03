var mainImg = document.querySelector("#main")
var itemImg = document.querySelectorAll(".item")
var chooseSize = document.querySelectorAll("#size");

if (itemImg.length > 0) {
    mainImg.setAttribute("src", itemImg[0].getAttribute("src"))
    itemImg[0].classList.add('on');
}


for (var i = 0; i < itemImg.length; i++) {
    itemImg[i].addEventListener("click", changeImg);
}

function changeImg() {
    var items = this.getAttribute("src")
    mainImg.setAttribute("src", items)

    itemImg.forEach(item => {
        item.classList.remove('on')
    })

    this.classList.add('on')
}

for (var i = 0; i < chooseSize.length; i++) {
    chooseSize[i].addEventListener("click", changeSize);
}

function changeSize() {
    chooseSize.forEach(size => {
        size.classList.remove('on')
    })

    this.classList.add('on')
}