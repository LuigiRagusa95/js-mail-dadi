/* Mail */
const mailInput = document.getElementById('input-mail');
const buttonValidate = document.getElementById('button-validate');
const listEmails = ['mozilla@gmail.com', 'stackoverflow@gmail.com', 'paypal@outlook.com', 'dribbble@yahoo.com'];

buttonValidate.addEventListener('click', () => {
    if (!isNaN(mailInput.value)) alert('Not allowed input! Please try again...');
    else {
        for (let i = 0; i < listEmails.length; i++) {
            const mail = listEmails[i];
            if (mail === mailInput.value) {
                alert(`Great 🎉! Now you are in! Welcome back ${mail}!`);
                break;
            } else {
                alert('MMMh 🤔! Something was wrong...Please try again ');
                mailInput.value = '';
                break;
            }
        }
    }
});
