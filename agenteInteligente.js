// Percepção (Ambiente: "escuro" ou "claro")
const ambiente = "escuro";

// Regra Racional (Tomada de decisão)
if (ambiente === "escuro") {
    console.log("[Atuador]: Lâmpada ACESA");
} else {
    console.log("[Atuador]: Lâmpada APAGADA");
}
const temperaturaAlvo = 22;
const temperaturaAtual = 25; // Percepção do sensor

// Regra Racional
if (temperaturaAtual > temperaturaAlvo) {
    console.log("[Atuador]: Ligar motor para RESFRIAR");
} else {
    console.log("[Atuador]: DESLIGAR motor, temperatura ideal atingida");
}
