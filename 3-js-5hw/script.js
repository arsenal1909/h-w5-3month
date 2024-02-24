function si() {


    let input = document.getElementById('input').value;
    let input1 = document.getElementById('input1').value;

    document.getElementById('input').value = input1
    document.getElementById('input1').value = input

}


function sii() {
    let input2 = document.getElementById('input2').value
    let box = document.getElementById('box')
    box.style.backgroundColor = input2

}