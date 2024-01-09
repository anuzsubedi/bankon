
document.addEventListener("DOMContentLoaded", function () {
    var cardButtons = document.querySelectorAll('.card-button');

    cardButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var parentCard = this.closest('.small-card');
            parentCard.classList.toggle('expanded');

            var buttonText = this.querySelector('p');
            buttonText.textContent = parentCard.classList.contains('expanded') ? '−' : '＋';
        });
    });
});

