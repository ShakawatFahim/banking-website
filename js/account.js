document.getElementById('depobtn').addEventListener('click', function () {
    const depoInput = document.getElementById('depo');
    const disdepo = depoInput.value;
    const depoAmmo = document.getElementById('depoAmmo');
    const depocur = depoAmmo.innerText;
    const totaldepo = parseFloat(depocur) + parseFloat(disdepo);

    depoAmmo.innerText = totaldepo;
    const balance = document.getElementById('total');
    const currentBalance = balance.innerText;
    const totalbalance = parseFloat(currentBalance) + parseFloat(totaldepo);
    balance.innerText = totalbalance;


    depoInput.value = '';
})
document.getElementById('witbtn').addEventListener('click', function () {
    const witInput = document.getElementById('wit');
    const diswit = witInput.value;
    const witAmmo = document.getElementById('witAmmo');
    const witcur = witAmmo.innerText;
    witAmmo.innerText = diswit;
    const balance = document.getElementById('total');
    const currentBalance = balance.innerText;
    const totalBalance = parseFloat(currentBalance) - parseFloat(diswit);
    balance.innerText = totalBalance;

    witInput.value = '';
})

