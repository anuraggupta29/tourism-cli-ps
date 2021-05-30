
selectTicket = document.querySelector('.selectMenu');
payBtn = document.querySelector('.payBtn');

selectTicket.addEventListener('change', function () {
    console.log(selectTicket.value);
    payBtn.value = 'Pay ₹' + selectTicket.value * 100;

})

requiredFields = document.querySelector('.bookTicketForm').querySelectorAll('.requiredField');

requiredFields.forEach(function (current, index) {
    current.addEventListener('click', function () {
        current.style.borderColor = '#DDDDDD';
        current.style.backgroundColor = '#FFFFFF';
    });
});

function validateForm() {
    var allGood = true;
    requiredFields.forEach(function (current, index) {
        if (current.value == '') {
            allGood = false;
            current.style.borderColor = '#ffb7b3';
            current.style.backgroundColor = '#fff1f0';
        };
    });
    return allGood;
}