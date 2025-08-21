const CapitãoAmerica = {
    nome: "Steve Rogers",
    codinome: "Capitão América",
    armaPrincipal: "Escudo Americano",
    armaSecundaria: "",
    velocidade: 85,
    forca: 75,
    resistencia:80,
    descricao: function() {
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " + this.codinome + "\n"
        + "Arma principal: " + this.armaPrincipal + "\n"
        + "Arma secundaria: " + this.armaSecundaria + "\n"
        + "Nível de força: " + this.forca + "\n"
        + "Nivel de velocidade: " + this.velocidade + "\n"
        + "Nível de resistência: " + this.resistencia
    }
}

const HomemdeFerro = {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Armadura",
    armaSecundaria: "",
    velocidade: 90,
    forca: 80,
    resistencia:85,
    descricao: function() {
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " + this.codinome + "\n"
        + "Arma principal: " + this.armaPrincipal + "\n"
        + "Arma secundaria: " + this.armaSecundaria + "\n"
        + "Nível de força: " + this.forca + "\n"
        + "Nivel de velocidade: " + this.velocidade + "\n"
        + "Nível de resistência: " + this.resistencia
    }
}

const Thor = {
    nome: "Thor Odinson",
    codinome: "Thor",
    armaPrincipal: "Mjölnir",
    armaSecundaria: "Stormbreaker",
    velocidade: 90,
    forca: 95,
    resistencia:95,
    descricao: function() {
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " + this.codinome + "\n"
        + "Arma principal: " + this.armaPrincipal + "\n"
        + "Arma secundaria: " + this.armaSecundaria + "\n"
        + "Nível de força: " + this.forca + "\n"
        + "Nivel de velocidade: " + this.velocidade + "\n"
        + "Nível de resistência: " + this.resistencia
    }
}

const SenhordasEstrelas = {
    nome: "Peter Quill",
    codinome: "Senhor das Estrelas",
    armaPrincipal: "Armas",
    armaSecundaria: "Armadilhas",
    velocidade: 70,
    forca: 50,
    resistencia:80,
    descricao: function() {
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " + this.codinome + "\n"
        + "Arma principal: " + this.armaPrincipal + "\n"
        + "Arma secundaria: " + this.armaSecundaria + "\n"
        + "Nível de força: " + this.forca + "\n"
        + "Nivel de velocidade: " + this.velocidade + "\n"
        + "Nível de resistência: " + this.resistencia
    }
}

const HomemAranha = {
    nome: "Peter Parker",
    codinome: "Homem Aranha",
    armaPrincipal: "Arma de teias",
    armaSecundaria: "",
    velocidade: 80,
    forca: 75,
    resistencia: 90,
    descricao: function() {
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " + this.codinome + "\n"
        + "Arma principal: " + this.armaPrincipal + "\n"
        + "Arma secundaria: " + this.armaSecundaria + "\n"
        + "Nível de força: " + this.forca + "\n"
        + "Nivel de velocidade: " + this.velocidade + "\n"
        + "Nível de resistência: " + this.resistencia
    }
}

const DrEstranho = {
    nome: "Stephen Strange",
    codinome: "Dr. Estranho",
    armaPrincipal: "joia do Tempo",
    armaSecundaria: "",
    velocidade: 50,
    forca: 80,
    resistencia: 90,
    descricao: function() {
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " + this.codinome + "\n"
        + "Arma principal: " + this.armaPrincipal + "\n"
        + "Arma secundaria: " + this.armaSecundaria + "\n"
        + "Nível de força: " + this.forca + "\n"
        + "Nivel de velocidade: " + this.velocidade + "\n"
        + "Nível de resistência: " + this.resistencia
    }
}

const Thanos = {
    nome: "Thanos de Titã",
    codinome: "Thanos",
    armaPrincipal: "Manopla do Infinito",
    armaSecundaria: "",
    velocidade: 80,
    forca: 100,
    resistencia: 100,
    descricao: function() {
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " + this.codinome + "\n"
        + "Arma principal: " + this.armaPrincipal + "\n"
        + "Arma secundaria: " + this.armaSecundaria + "\n"
        + "Nível de força: " + this.forca + "\n"
        + "Nivel de velocidade: " + this.velocidade + "\n"
        + "Nível de resistência: " + this.resistencia
    }
}

let personagens = [
    CapitãoAmerica,
    HomemdeFerro,
    Thor,
    SenhordasEstrelas,
    HomemAranha,
    DrEstranho,
    Thanos
];

for (let i = 0; i < personagens.length; i++) {
    console.log(personagens[i].descricao());
    console.log("---------------------");
}

for (let i = 0; i < personagens.length; i++) {
    for (let j = i + 1; j < personagens.length; j++) {
        let p1 = personagens[i];
        let p2 = personagens[j];

        console.log("=================================");
        console.log("Comparando " + p1.codinome + " vs " + p2.codinome);
        console.log("---- Descrição de " + p1.codinome + " ----");
        console.log(p1.descricao());
        console.log("---- Descrição de " + p2.codinome + " ----");
        console.log(p2.descricao());

        // Comparação de Força
        if (p1.forca > p2.forca) {
            console.log("Força: " + p1.codinome + " vence!");
        } else if (p1.forca < p2.forca) {
            console.log("Força: " + p2.codinome + " vence!");
        } else {
            console.log("Força: Empate!");
        }

        // Comparação de Velocidade
        if (p1.velocidade > p2.velocidade) {
            console.log("Velocidade: " + p1.codinome + " vence!");
        } else if (p1.velocidade < p2.velocidade) {
            console.log("Velocidade: " + p2.codinome + " vence!");
        } else {
            console.log("Velocidade: Empate!");
        }

        // Comparação de Resistência
        if (p1.resistencia > p2.resistencia) {
            console.log("Resistência: " + p1.codinome + " vence!");
        } else if (p1.resistencia < p2.resistencia) {
            console.log("Resistência: " + p2.codinome + " vence!");
        } else {
            console.log("Resistência: Empate!");
        }

        console.log("=================================\n");
    }
}