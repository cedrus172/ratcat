var listCat = [];
var listRat = [];
var currentCatId = 0;
var currentRatId = 0;
const renderListCat = () => {
    dataTableCat.innerHTML = "";
    listCat.forEach((cat) => addCatData(cat))
};
const renderListRat = () => {
    dataTableRat.innerHTML = "";
    listRat.forEach((rat) => addRatData(rat));
}

const renderData = () => {
    renderListCat();
    renderListRat();
}

const clearAll = () => {
    currentCatId = 0;
    currentRatId = 0;
    listCat = [];
    listRat = [];
    renderData();
}

const createCat = (count) => {
    let i = 0;
    while (i < count) {
        let randomWeight = Math.floor(Math.random() * 10) + 1;
        let randomSpeed = Math.floor(Math.random() * 5) + 1;

        let cat = new Cat(currentCatId, "Cat " + currentCatId, randomWeight, randomSpeed);
        cat.say("Meo meo");
        listCat.push(cat);
        currentCatId++;
        i++;
    }

    console.log(listCat);
}

const createRat = (count) => {
    let i = 0;
    while (i < count) {
        let randomWeight = Math.floor(Math.random() * 3) + 1;
        let randomSpeed = Math.floor(Math.random() * 5) + 1;

        let rat = new Rat("Rat " + currentRatId, randomWeight, randomSpeed);
        rat.say("Chut chit");
        listRat.push(rat);
        currentRatId++;
        i++;
    }
    console.log(listRat);
}

const catchRat = () => {
    let i = listRat.length;
    while (i > 0) {
        listCat.forEach((cat) => {
            let randomRat = listRat.find(a => a.getSpeed() < cat.getSpeed() && a.whoCatch() == "");
            if (randomRat != null) {
                console.log(`Da tim duoc ${randomRat.getName()} cham hon ${cat.getName()} `);
                cat.catchRat(randomRat);
            }
        })
        i--;
    }

    console.log(`So luong chuot da chay thoat : ${listRat.length}`);
    renderData();
}

const eatRat = () => {
    listCat.forEach((cat) => {
        handleEatRat(cat);
    });

    renderData();
}

const handleEatRat = (cat) => {
    cat.getListRat().forEach((rat) => {
        cat.eat(rat);
    })
}

/*
createCat(10);
createRat(20);

catchRat();
eatRat();
renderListCat();*/
const countCatCreate = document.querySelector('#countCatCreate');
const countRatCreate = document.querySelector('#countRatCreate');

const initCat = () => {
    let count = parseInt(countCatCreate.value);
    createCat(count);
    renderListCat();
}


const initRat = () => {
    let count = parseInt(countRatCreate.value);
    createRat(count);
    renderListRat();
}