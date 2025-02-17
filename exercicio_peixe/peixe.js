var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixe;

function preload() {
    this.load.image('mar', 'Exercicio_peixe/Assets/bg_azul-claro.png');

    this.load.image('logo', 'Exercicio_peixe/Assets/logo-inteli_branco.png');

    this.load.image('peixe', 'Exercicio_peixe/Assets/Peixes/peixe_serio.png');

    this.load.image('concha', 'Exercicio_peixe/Assets/Peixes/concha.png');

    this.load.image('baiacu', 'Exercicio_peixe/Assets/Peixes/baiacu.png');

    this.load.image('peixe_turquesa', 'Exercicio_peixe/Assets/Peixes/peixe_turquesa.png')
}

function create() {
    this.add.image(400, 300, 'mar');

    this.add.image(400, 525, 'logo').setScale(0.5);

    this.add.image(200, 323, 'concha');

    this.add.image(346, 266, 'concha');

    this.add.image(621, 447, 'baiacu');

    this.add.image(187, 247, 'peixe_turquesa');

    // guarda o peixe em uma variavel
    peixe = this.add.image(400, 300, 'peixe').setOrigin(0.5, 0.5).setFlip(true, false);

    // tranforma a variavel
    peixe.setFlip(true, false);
}

function update() {
    //implementa movimentacao do peixe
    peixe.x = this.input.x;
    peixe.y = this.input.y;
}

console.log(resposta)
    


