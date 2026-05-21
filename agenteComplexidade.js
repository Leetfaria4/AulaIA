// Percepções (Dados de múltiplos sensores)
const altitudeAtual = 9500;
const velocidadeVento = 85;
const tempestadeAFrente = true;

let acaoAutodrive;

// Regra Racional Complexa
if (velocidadeVento > 100 || altitudeAtual < 3000) {
    acaoAutodrive = "ALERTA CRÍTICO: Desativando Piloto Automático. Humano, assuma o controle!";
} else if (tempestadeAFrente) {
    acaoAutodrive = "Rota alterada em 15 graus para desviar da tempestade detectada.";
} else {
    acaoAutodrive = `Voo estável. Mantendo altitude de ${altitudeAtual} metros.`;
}

console.log(`[Piloto Automático]: ${acaoAutodrive}`);

const porcentagemBateria = 85;
const temperaturaCelsius = 38;

// Estado interno (Memória do agente)
const modoProtecaoTermicaAtivo = temperaturaCelsius > 45;
let statusCarregador;

if (modoProtecaoTermicaAtivo) {
    statusCarregador = "DESLIGADO (Prevenção de danos por superaquecimento)";
} else if (porcentagemBateria < 20) {
    statusCarregador = "Modo CARGA RÁPIDA (Corrente máxima de 5A)";
} else if (porcentagemBateria >= 20 && porcentagemBateria <= 80) {
    statusCarregador = "Modo CARGA NORMAL (Corrente estável de 2A)";
} else {
    statusCarregador = "Modo FLUTUAÇÃO / CARGA LENTA (0.5A para preservação)";
}

console.log(`[Gerenciador de Energia]: ${statusCarregador}`);
