async function get_KEY() {
    let serial_num = document.querySelector('.serial_num');
    let serial = serial_num.value.trim(); // الحصول على النص من المستخدم



const numberArray = serial.match(/\d+/g); 
const numbers = numberArray ? Number(numberArray.join('')) : null;
let activecode = (((((numbers*2005)-2)*2010)-2)*(11/10)).toFixed(0)

    document.getElementById('activecode').innerHTML = activecode;
    // console.log("Active Code:", activecode);
}


