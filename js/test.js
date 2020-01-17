let btn1 = document.getElementById('btn1');
// btn1.innerHTML = "Hello";
let count = 0;

btn1.addEventListener('click', () => {
    btn1.innerHTML = count++;
});