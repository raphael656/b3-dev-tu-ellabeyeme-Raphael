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

module.exports = {
    Cube:Cube
}

class Triangle {
    constructor(length1,length2,length3, hauteur){
        this.length1 = length1;
        this.length2 = length2;
        this.length3 = length3;

        this.hauteur = hauteur;

    }

    getSideLength () {
        return this.length1, this.length2, this.length3;
    }
    getSurfaceArea () {
        return (this.length1 * this.hauteur) / 2;
    }
    getVolume () {
        return ((this.length1 * this.hauteur) / 2) * this.hauteur;
    }
}

module.exports = {
    Triangle:Triangle
}