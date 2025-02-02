class ParkingSystem {
    private big:number;
    private medium:number;
    private small:number;
    constructor(big: number, medium: number, small: number) {
        this.big = big;
        this.medium = medium;
        this.small = small;
    }

    addCar(carType: number): boolean {
        if(carType === 1) {
            this.big--;
            return this.big >=0;
        }else if(carType === 2) {
            this.medium--;
            return this.medium >=0;
        }else {
            this.small--;
            return this.small >=0;
        }
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */