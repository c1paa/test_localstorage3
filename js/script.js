let input = document.querySelector('.inp');
let btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
    localStorage.setItem("block", input.value);
});
