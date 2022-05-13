const acorda = () => 'Acordando';
const cafe = () => 'Bora tomar café';
const dormir = () => 'Partiu dormir';
const doingThings = (action) => console.log(action());

doingThings(acorda);
doingThings(cafe);
doingThings(dormir);