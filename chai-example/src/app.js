class Cube {
    constructor(length) {
        this.length = length;
    }
    
    getSideLength () {
        return this.length;
    }
    
    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }
    
    getVolume () {
        return Math.pow(this.length,3);
    }
}

class Triangle {
    constructor(base,length1,length2, hauteur, prismehauteur){
        this.base = base;
        this.length1 = length1;
        this.length2 = length2;
        this.prismehauteur = prismehauteur;
        this.hauteur = hauteur;

    }

    getSideLength () {
        return [this.length1, this.length2, this.base];
    }
    getSurfaceArea () {
        return (this.base * this.hauteur) / 2;
    }
    getVolume () {
        return ((this.base * this.hauteur) / 2) * this.prismehauteur;
    }
}

module.exports = {
    Triangle:Triangle,
    Cube:Cube
}