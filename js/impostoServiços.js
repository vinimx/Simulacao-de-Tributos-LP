//Importação das alíquotas de impostos
import { aliquotaPIS, aliquotaCOFINS, aliquotaIR, aliquotaCSLL } from './impostoVenda.js';

const aliquotaISSQN = {
    avare: 3,
    botucatu: 2
};

const valorServico = document.getElementById('valorServico');

function atualizarISSQN() {
    const cidadeSelect = document.getElementById('cidadeServico');
    const textoImposto = document.querySelector('.issqn-servicos');
    
    if (cidadeSelect.value) {
        const taxaISSQN = aliquotaISSQN[cidadeSelect.value];
        textoImposto.innerHTML = `${taxaISSQN}%<br>ISSQN`;
    } else {
        textoImposto.innerHTML = '0,0%<br>ISSQN';
    }
}

document.getElementById('cidadeServico').addEventListener('change', atualizarISSQN); 

//Calcula o ISSQN
function calcularISSQN() {
    const valorServico = formatarInput(document.getElementById("valorServico"));
    const cidadeSelect = document.getElementById('cidadeServico');
    
    if (cidadeSelect.value && !isNaN(valorServico)) {
        const taxaISSQN = aliquotaISSQN[cidadeSelect.value] / 100;
        const totalISSQN = valorServico * taxaISSQN;
        
        document.getElementById("issqnServico").innerText = formatarValorContabil(totalISSQN);
        return totalISSQN;
    } else {
        document.getElementById("issqnServico").innerText = formatarValorContabil(0);
        return 0;
    }
}

document.getElementById("valorServico").addEventListener('blur', function() {
    formatarInput(this);
    calcularISSQN();
    calcularPISServico();
    calcularCOFINSServico();
    calcularIRServico();
    calcularCSLLServico();
    calcularTotalImpostosServicos();
});
document.getElementById("cidadeServico").addEventListener('change', function() {
    calcularISSQN();
    calcularPISServico();
    calcularCOFINSServico();
    calcularIRServico();
    calcularCSLLServico();
    calcularTotalImpostosServicos();
});

function calcularPISServico() {
    const valorServico = formatarInput(document.getElementById("valorServico"));
    if (!isNaN(valorServico)) {
        const totalPIS = valorServico * aliquotaPIS;
        document.getElementById("pisServico").innerText = formatarValorContabil(totalPIS);
        return totalPIS;
    } else {
        document.getElementById("pisServico").innerText = formatarValorContabil(0);
        return 0;
    }
}

function calcularCOFINSServico() {
    const valorServico = formatarInput(document.getElementById("valorServico"));
    if (!isNaN(valorServico)) {
        const totalCOFINS = valorServico * aliquotaCOFINS;
        document.getElementById("cofinsServico").innerText = formatarValorContabil(totalCOFINS);
        return totalCOFINS;
    } else {
        document.getElementById("cofinsServico").innerText = formatarValorContabil(0);
        return 0;
    }
}

function calcularIRServico() {
    const valorServico = formatarInput(document.getElementById("valorServico"));
    if (!isNaN(valorServico)) {
        const totalIR = valorServico * aliquotaIR;
        document.getElementById("irpjServico").innerText = formatarValorContabil(totalIR);
        return totalIR;
    } else {
        document.getElementById("irpjServico").innerText = formatarValorContabil(0);
        return 0;
    }
}

function calcularCSLLServico() {
    const valorServico = formatarInput(document.getElementById("valorServico"));
    if (!isNaN(valorServico)) {
        const totalCSLL = valorServico * aliquotaCSLL;
        document.getElementById("csllServico").innerText = formatarValorContabil(totalCSLL);
        return totalCSLL;
    } else {
        document.getElementById("csllServico").innerText = formatarValorContabil(0);
        return 0;
    }
}

function calcularTotalImpostosServicos() {
    const totalISSQN = calcularISSQN();
    const totalPIS = calcularPISServico();
    const totalCOFINS = calcularCOFINSServico();
    const totalIR = calcularIRServico();
    const totalCSLL = calcularCSLLServico();

    const totalImpostos = totalISSQN + totalPIS + totalCOFINS + totalIR + totalCSLL;
    document.getElementById("totalServico").innerText = formatarValorContabil(totalImpostos);
    return totalImpostos;
}

export {
    atualizarISSQN,
    calcularISSQN,
    calcularPISServico,
    calcularCOFINSServico,
    calcularIRServico,
    calcularCSLLServico,
    calcularTotalImpostosServicos
};
