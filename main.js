let items = document.querySelectorAll(".accordion");

items.forEach(item => {
    item.addEventListener('click', function(){
        items.forEach(e => {
            if (e!=item) {
                e.querySelector(".answer").classList.add("hidden");
                e.querySelector(".plus").classList.remove("hidden");
                e.querySelector(".minus").classList.add("hidden");
            } 
        });
        const answers = item.querySelector(".answer");
        answers.classList.toggle("hidden");
        const plus = item.querySelector(".plus");
        const minus = item.querySelector(".minus");
        plus.classList.toggle("hidden");
        minus.classList.toggle("hidden");
    })
});