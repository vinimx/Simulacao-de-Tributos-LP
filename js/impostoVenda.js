//Importação dos valores e alíquotas de impostos
const valorEntrada = document.getElementById("valorEntrada");
const valorSaida = document.getElementById("valorVenda");
export const aliquotaICMS = 0.018; 
export const aliquotaPIS = 0.0065; 
export const aliquotaCOFINS = 0.03; 
export const aliquotaIR = 0.048; 
export const aliquotaCSLL = 0.0288; 

//Eventos de input para mostrar o lucro bruto
valorEntrada.addEventListener("input", mostrarLucroBruto);
valorSaida.addEventListener("input", mostrarLucroBruto);

//Função para mostrar o lucro bruto
export function mostrarLucroBruto() {
    const compra = formatarInput(valorEntrada);
    const venda = formatarInput(valorSaida);
    const lucroBruto = venda - compra;
    document.getElementById("lucroBruto").innerText = formatarValorContabil(lucroBruto);

    const totalICMS = calcularICMS(venda);
    const totalPIS = calcularPIS(lucroBruto);
    const totalCOFINS = calcularCOFINS(lucroBruto);
    const totalIR = calcularIR(lucroBruto);
    const totalCSLL = calcularCSLL(lucroBruto);

    const totalImpostos = calculosImpostos(totalICMS, totalPIS, totalCOFINS, totalIR, totalCSLL);
    calcularLucroLiquido(lucroBruto, totalImpostos);
}

export function calcularICMS(venda){
    const totalICMS = venda * aliquotaICMS;
    document.getElementById("icmsVenda").innerText = formatarValorContabil(totalICMS);
    return totalICMS;
}

export function calcularPIS(lucroBruto){
    const totalPIS = lucroBruto * aliquotaPIS; 
    document.getElementById("pisVenda").innerText = formatarValorContabil(totalPIS);
    return totalPIS;
}

export function calcularCOFINS(lucroBruto){
    const totalCOFINS = lucroBruto * aliquotaCOFINS; 
    document.getElementById("cofinsVenda").innerText = formatarValorContabil(totalCOFINS);
    return totalCOFINS;
}

export function calcularIR(lucroBruto){
    const totalIR = lucroBruto * aliquotaIR; 
    document.getElementById("irpjVenda").innerText = formatarValorContabil(totalIR);
    return totalIR;
}

export function calcularCSLL(lucroBruto){
    const totalCSLL = lucroBruto * aliquotaCSLL; 
    document.getElementById("csllVenda").innerText = formatarValorContabil(totalCSLL);
    return totalCSLL;
}

export function calculosImpostos(totalICMS, totalPIS, totalCOFINS, totalIR, totalCSLL) {
    const totalImpostos = totalICMS + totalPIS + totalCOFINS + totalIR + totalCSLL;
    document.getElementById("totalVenda").innerText = formatarValorContabil(totalImpostos);
    return totalImpostos;
}

export function calcularLucroLiquido(lucroBruto, totalImpostos) {
    const lucroLiquido = lucroBruto - totalImpostos;
    document.getElementById("lucroLiquido").innerText = formatarValorContabil(lucroLiquido);
}