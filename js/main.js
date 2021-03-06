/* Mail */
const mailInput = document.getElementById('input-mail');
const buttonValidate = document.getElementById('button-validate');
const listEmails = ['mozilla@gmail.com', 'stackoverflow@gmail.com', 'paypal@outlook.com', 'dribbble@yahoo.com'];

buttonValidate.addEventListener('click', () => {
    if (!isNaN(mailInput.value)) alert('Not allowed input! Please try again...');
    else {
        let user = '';
        let flag = false;
        for (let i = 0; i < listEmails.length; i++) {
            if (mailInput.value === listEmails[i]) {
                flag = true;
                user = listEmails[i];
                mailInput.value = '';
                break;
            }
        }

        if (flag) {
            alert(`Great 🎉! Now you are in! Welcome back ${user}!`);
        } else {
            mailInput.value = '';
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

let matchesCount = 0;

rollBtn.addEventListener('click', () => {
    if (matchesCount <= 10) {
        const userRoll = Math.floor(Math.random() * 6) + 1;
        const PcRoll = Math.floor(Math.random() * 6) + 1;

        textUser.innerHTML += ` <span>${userRoll}</span>`;
        textPc.innerHTML += ` <span>${PcRoll}</span>`;

        if (userRoll > PcRoll) textResult.innerHTML = 'Yeah... You win 🎉';
        else if (userRoll === PcRoll) textResult.innerHTML = 'Mhh... It is a draw 😐';
        else textResult.innerHTML = 'Oh no... Ai always wins 🤖';

        ++matchesCount;
    } else {
        alert('Too much matches! Please reset the Bot 🤖! ');
    }
});

restartBtn.addEventListener('click', () => {
    matchesCount = 0;
    textUser.innerHTML = `You -`;
    textPc.innerHTML = `AI -`;
    textResult.innerHTML = `- Result -`;
});
