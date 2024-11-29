class Bunka{
    constructor(x, y, velikost, barva) {
        this.x = x;
        this.y = y;
        this.velikost = velikost;
        this.barva = barva;
    }
 
    vykresli(){
        fill(this.barva)
        rect(this.x * this.velikost, this.y * this.velikost, this.velikost, this.velikost)
    }
 
    kolize(dalsiBunka){
        return this.x === dalsiBunka.x && this.y === dalsiBunka.y;
    }
 
    nastavPozici(dalsiBunka){
        this.x = dalsiBunka.x
        this.y = dalsiBunka.y
    }
}

