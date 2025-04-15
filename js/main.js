//Importação das funções de formatação de moeda e cálculos de impostos
import { formatarValorContabil, formatarInput } from './formatarMoeda.js';
import { 
    calcularICMS, 
    calcularPIS, 
    calcularCOFINS, 
    calcularIR, 
    calcularCSLL, 
    calculosImpostos, 
    calcularLucroLiquido,
    mostrarLucroBruto,
    aliquotaICMS,
    aliquotaPIS,
    aliquotaCOFINS,
    aliquotaIR,
    aliquotaCSLL
} from './impostoVenda.js';
import {
    calcularISSQN,
    calcularPISServico,
    calcularCOFINSServico,
    calcularIRServico,
    calcularCSLLServico,
    calcularTotalImpostosServicos,
    atualizarISSQN
} from './impostoServiços.js';

const valorEntrada = document.getElementById("valorEntrada");
const valorSaida = document.getElementById("valorVenda");
const valorServico = document.getElementById("valorServico");

valorEntrada.addEventListener("input", function(e) {
    const value = e.target.value.replace(/\D/g, '');
    e.target.value = value;
});

valorEntrada.addEventListener("blur", function() {
    formatarInput(this);
    mostrarLucroBruto();
});

valorSaida.addEventListener("input", function(e) {
    const value = e.target.value.replace(/\D/g, '');
    e.target.value = value;
});

valorSaida.addEventListener("blur", function() {
    formatarInput(this);
    mostrarLucroBruto();
});

valorServico.addEventListener("input", function(e) {
    const value = e.target.value.replace(/\D/g, '');
    e.target.value = value;
});

valorServico.addEventListener("blur", function() {
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

//Exportação das funções para o arquivo de cálculos de impostos
window.formatarValorContabil = formatarValorContabil;
window.formatarInput = formatarInput;
window.calcularICMS = calcularICMS;
window.calcularPIS = calcularPIS;
window.calcularCOFINS = calcularCOFINS;
window.calcularIR = calcularIR;
window.calcularCSLL = calcularCSLL;
window.calculosImpostos = calculosImpostos;
window.calcularLucroLiquido = calcularLucroLiquido;
window.mostrarLucroBruto = mostrarLucroBruto;
window.calcularISSQN = calcularISSQN;
window.calcularPISServico = calcularPISServico;
window.calcularCOFINSServico = calcularCOFINSServico;
window.calcularIRServico = calcularIRServico;
window.calcularCSLLServico = calcularCSLLServico;
window.calcularTotalImpostosServicos = calcularTotalImpostosServicos;
window.atualizarISSQN = atualizarISSQN; 