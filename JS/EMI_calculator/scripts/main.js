import emi from './calculate_emi.js';
window.addEventListener('load', bindEvents);
function bindEvents(){  
    document.getElementById('compute').addEventListener('click', computeIt);
}
function createPTag(key,result){
    const pTag = document.createElement('p');
    pTag.innerText = `${key} is ${result}`;
    return pTag;
}

function computeIt(){
    const pa = parseFloat(document.getElementById('pa').value);
    emi.principal_amount = pa;
    const r = parseFloat(document.getElementById('r').value);
    emi.R_interest_rate = r;
    const n = parseFloat(document.getElementById('n').value);
    emi.N_tenure_in_months = n;
    const div = document.getElementById('output');
    const result = emi.calculate_emi();
    div.appendChild(createPTag("Principal amount: ",emi.principal_amount));
    div.appendChild(createPTag("Total Payable: ",result));
}