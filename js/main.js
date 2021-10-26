/* Mail */
const mailInput = document.getElementById('input-mail');
const buttonValidate = document.getElementById('button-validate');
const listEmails = ['mozilla@gmail.com', 'stackoverflow@gmail.com', 'paypal@outlook.com', 'dribbble@yahoo.com'];

buttonValidate.addEventListener('click', () => {
    if (!isNaN(mailInput.value)) alert('Not allowed input! Please try again...');
    else {
        let flag = false;
        for (let i = 0; i < listEmails.length; i++) {
            if (mailInput.value === listEmails[i]) {
                flag = true;
                break;
            } else flag = false;
        }

        if (flag) {
            alert(`Great 🎉! Now you are in! Welcome back!`);
        } else {
            alert('MMMh 🤔! Something was wrong...Please try again ');
        }
    }
});

/* Roll the Dice */
const rollBtn = document.getElementById('roll');
const restartBtn = document.getElementById('restart');

const textUser = document.getElementById('text-user');
const textPc = document.getElementById('text-pc');
const textResult = document.getElementById('text-result');

rollBtn.addEventListener('click', () => {
    const userRoll = Math.floor(Math.random() * 6) + 1;
    const PcRoll = Math.floor(Math.random() * 6) + 1;

    textUser.innerHTML += ` <span>${userRoll}</span>`;
    textPc.innerHTML += ` <span>${PcRoll}</span>`;

    if (userRoll > PcRoll) textResult.innerHTML = 'Yeah... You win 🎉';
    else if (userRoll === PcRoll) textResult.innerHTML = 'Mhh... It is a draw 😐';
    else textResult.innerHTML = 'Oh no... Ai always wins 🤖';
});

restartBtn.addEventListener('click', () => {
    textUser.innerHTML = `You -`;
    textPc.innerHTML = `AI -`;
    textResult.innerHTML = `- Result -`;
});
