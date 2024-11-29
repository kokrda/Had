class Had{
    constructor(bunky, sirkaMapy, vyskaMapy){
        this.telo = bunky
        this.smerX = 0
        this.smerY = 1
        this.sirkaMapy = sirkaMapy
        this.vyskaMapy = vyskaMapy
    }
 
    vykresli(){
        for (let i = 0; i < this.telo.length; i++){
            this.telo[i].vykresli()
        }
           
    }
 
    pohyb(){
        for (let i = this.telo.length - 1; i > 0; i--) {
            this.telo[i].nastavPozici(this.telo[i - 1])
           
        }
        this.telo[0].x += this.smerX
        this.telo[0].y += this.smerY

        if (this.telo[0].x < 0) this.telo[0].x = this.sirkaMapy - 1;
        else if (this.telo[0].x >= this.sirkaMapy) this.telo[0].x = 0;
        if (this.telo[0].y < 0) this.telo[0].y = this.vyskaMapy - 1;
        else if (this.telo[0].y >= this.vyskaMapy) this.telo[0].y = 0;
    }
 
    nastavSmer(smerX, smerY) {
        if (this.smerX === 0 || smerX === 0) this.smerX = smerX;
        if (this.smerY === 0 || smerY === 0)this.smerY = smerY;
    }

    muzeSnist(bunka) {
        return this.telo[0].kolize(bunka);
    }
    
    zvetcit() {

        this.telo.push(
            new Bunka(this.telo[0].x, this.telo[0].y, this.telo[0].velikost, barvaHad)
        );
        
        barvaHad -= 24
    }

    naboural() {
        for (let i = 1; i < this.telo.length; i++) {
            if (this.muzeSnist(this.telo[i])) return true;
            
        }
        return false;
    }

    vHadovi(bunka) {
        for (let i = 0; i < this.telo.length; i++) {
            if (this.telo[0].kolize(bunka)) return true;
            
        }
        return false;
    }
}

 