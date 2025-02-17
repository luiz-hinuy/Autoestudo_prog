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
    this.load.image('mar', 'exercicio_peixe/assets/bg_azul-claro.png');

    this.load.image('logo', 'exercicio_peixe/assets/logo-inteli_branco.png');

    this.load.image('peixe', 'exercicio_peixe/assets/Peixes/peixe_serio.png');

    this.load.image('concha', 'exercicio_peixe/assets/Peixes/concha.png');

    this.load.image('baiacu', 'exercicio_peixe/assets/Peixes/baiacu.png');

    this.load.image('peixe_turquesa', 'exercicio_peixe/assets/Peixes/peixe_turquesa.png')
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
    


