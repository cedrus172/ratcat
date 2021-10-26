const dataTableCat = document.querySelector('#dataTableCat');
const dataTableRat = document.querySelector('#dataTableRat');

const addCatData = (cat) => {
    let e = document.createElement('tr');
    let listNameRat = [];
    cat.listRat.forEach((rat) => {
        listNameRat.push(rat.getName());
    });
    e.id = "cat" + cat.getId();
    e.innerHTML = `<td>${cat.getName()}</td>
                   <td>${cat.getWeight()}kg</td>
                   <td>${cat.getSpeed()}</td>
                   <td>${listNameRat.join(',')}</td>
                   <td>${cat.listRat.filter(a => a.getLive() === false).length}</td>
                   <td><button onClick='deleteCat(this)' data-id='${cat.getId()}'>Đuổi</button></td>`;

    dataTableCat.appendChild(e);
}

const addRatData = (rat) => {
    let e = document.createElement('tr');
    e.id = "rat" + rat.getId();
    e.innerHTML = `<td>${rat.getName()}</td>
                   <td>${rat.getWeight()}kg</td>
                   <td>${rat.getSpeed()}</td>
                   <td>${rat.whoCatch()}</td>
                   <td class='${rat.getLive() ? "live" : "die"}'' > ${rat.getLive() ? 'Sống' : 'Nghẻo'}</td > 
                   <td><button onClick='deleteRat(this)' data-id='${rat.getId()}'>Đuổi</button></td>`;

    dataTableRat.appendChild(e);
}


deleteCat = (e) => {
    let id = e.dataset.id;
    let idName = "cat" + id;
    document.querySelector('#' + idName).remove();
    listCat = listCat.filter(a => a.getId() != id);
}

deleteRat = (e) => {
    let id = e.dataset.id;
    let idName = "rat" + id;
    document.querySelector('#' + idName).remove();
    listRat = listRat.filter(a => a.getId() != id);
}
