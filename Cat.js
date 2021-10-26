class Cat {
    constructor(id, name, weight, speed) {
        this.id = id;
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.listRat = [];
    }

    getListRat() { return this.listRat.filter(a => a.getLive() == true); }

    say(message) {
        console.log(`${this.name} : ${message}`);
    }

    setWeight(weight) {
        this.weight = weight;
        console.log(`${this.name} : da len ${weight}kg`);
    }

    getWeight() {
        return this.weight;
    }

    catchRat(Rat) {
        if (Rat.getLock()) {
            console.log(`${Rat.getName()} da chet, khong the bat`)
        } else {
            Rat.beCatch(this);
            this.listRat.push(Rat);
        }
    }

    getName() { return this.name }

    eat(Rat) {
        if (this.listRat.includes(Rat)) {
            Rat.getLive() ? Rat.die(this) : console.log(`${Rat.getName()} da chet, khong the an`);
        } else {
            console.log(`${Rat.getName()} chua duoc bat boi ${this.name} => khong the an`);
        }
    }

    setSpeed(speed) {
        this.speed = speed;
    }

    getSpeed() { return this.speed }


}