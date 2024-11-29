let sirka = 20
let vyska = 15
let velikostBunky = 50
 
let canvasWidth = sirka * velikostBunky
let canvasHeight = vyska * velikostBunky
 
let bunka = new Bunka(0, 0, velikostBunky, 'white' )
bunka.vykresli()
 
let had = vytvorHada();

let konecHry = false;

let ovoce = new Bunka(10, 10, velikostBunky,("darkblue"));

let smery = [];

let barvaHad = 240
    


 
let cas = -1000
function draw(){

    if(konecHry) {
        background(0);
        if (isKeyPressed(" ")){
            had = vytvorHada();
            ovoce = vytvorNahodneOvoce();
            konecHry = false;
        }
        fill("white");
        textSize(30);
        centeredText("Tahle hra je fakt nevyvážená.     -Vít Weber-", canvasWidth / 2, canvasHeight / 2);
        return;
    }
    if (isKeyPressed("a") ){
        if (smery.length === 0 || smery[smery.length - 1].x === 0)
        smery.push({x: -1, y:0})//vlevo
    
    }else if (isKeyPressed("w") ){//nahoru
        if (smery.length === 0 || smery[smery.length - 1].y === 0)
        smery.push({x: 0, y:-1})

    }else if (isKeyPressed("d")){//vpravo
        if (smery.length === 0 || smery[smery.length - 1].x === 0)
        smery.push({x: 1, y:0})

    }else if (isKeyPressed("s")){// dolu
        if (smery.length === 0 || smery[smery.length - 1].y === 0)
        smery.push({x: 0, y:1})

    }
    
    let aktualniCas = performance.now()
    if (aktualniCas - cas >100) {
        background("blue")
        cas = aktualniCas
        if(smery.length > 0) {
            let smer = smery.shift();
            had.nastavSmer(smer.x, smer.y);
        }
        had.pohyb();
        stroke(255)
        if (had.naboural()) {
            konecHry = true;
            return;
        }

        had.vykresli();
        ovoce.vykresli();
        if (had.muzeSnist(ovoce)){
            had.zvetcit();
            ovoce = vytvorNahodneOvoce();
        }
    }
}

function vytvorNahodneOvoce(){
   
    let ovoce = new Bunka(
        Math.floor(random(0,sirka)),
        Math.floor(random(0,vyska)),
        velikostBunky,
        ("darkblue")
        

    );
    while(had.vHadovi(ovoce)) { 
        ovoce.x = Math.floor(random(0,sirka))
        ovoce.y = Math.floor(random(0,vyska))
    }
    return ovoce;
}

function vytvorHada(){

    let had = new Had(
        [
            new Bunka(2, 0, velikostBunky, (255)),
            new Bunka(1, 0, velikostBunky, (250)),
            new Bunka(0, 0, velikostBunky, (245)),
        ],
        sirka,
        vyska
    );
    return had;
}