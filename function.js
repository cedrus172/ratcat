const dataTableCat = document.querySelector('#dataTableCat');
const dataTableRat = document.querySelector('#dataTableRat');

const addCatData = (cat) => {
    let e = document.createElement('tr');
    let listNameRat = [];
    cat.listRat.forEach((rat) => {
        listNameRat.push(rat.getName());
    })
    e.innerHTML = `<td>${cat.getName()}</td>
                   <td>${cat.getWeight()}kg</td>
                   <td>${cat.getSpeed()}</td>
                   <td>${listNameRat.join(',')}</td>`;

    dataTableCat.appendChild(e);
}

const addRatData = (rat) => {
    let e = document.createElement('tr');

    e.innerHTML = `<td>${rat.getName()}</td>
                   <td>${rat.getWeight()}kg</td>
                   <td>${rat.getSpeed()}</td>
                   <td>${rat.whoCatch()}</td>
                   <td>${rat.getLive()?'Sống':'Nghẻo'}</td>`;

    dataTableRat.appendChild(e);
}