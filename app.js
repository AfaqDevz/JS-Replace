let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < list.length; i++){
    if (list[i] % 3 === 0 && list[i] % 5 === 0){
        list[i] = 'Five'
    }
    else if (list[i]%3===0){
        list[i] = 'Three'
    }
    else if (list[i]%5===0){
        list[i] = 'Five'
    }
}

document.write(list);