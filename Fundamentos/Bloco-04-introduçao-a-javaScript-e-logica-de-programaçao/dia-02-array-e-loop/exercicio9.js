let array = []

for (let index = 1; index <= 25; index += 1) {
    array.push(index);
}

for (let div of array) {
    div = div / 2;
    console.log(div);
}
