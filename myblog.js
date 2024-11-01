const expandBtn = document.getElementById('expand')
expandBtn.addEventListener('click', function(){
    const makeVicible = document.querySelectorAll('.april, .march, .feb, .oct, .nov, .jan, .dec')
    for (let article of makeVicible) {
        article.classList.toggle('invicible')
    };
    const isInvisible = Array.from(makeVicible).some(article => article.classList.contains('invicible'));
    expandBtn.textContent = isInvisible ? "see more" : "see less";
})