// let userName = prompt('Enter Your Name');
let table = +prompt('Enter Table Number');
let time = +prompt('Enter Hom many time do you want')
let ul = document.querySelector('ul');

for(let table = time; table <= time; table++){
    console.log(table);
    for(let j = 1; j <= time; j++){
        ul.innerHTML += `<li>${table} x ${j} = ${table*j}</li>`
    }
}