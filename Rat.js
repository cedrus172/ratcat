class Rat {
    constructor(id, name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.live = true;
        this.lock = false;
        this.catchBy = "";
        this.id = id;
    }

    getId() { return this.id; }

    whoCatch() { return this.catchBy; }

    getLive() { return this.live; }

    getLock() { return this.lock }

    beCatch(cat) {
        this.lock = true;
        this.catchBy = cat.getName();
        console.log(`${this.name} da bi bat boi ${cat.getName()}`);
    }

    die(cat) {
        this.live = false;
        console.log(`${this.name} da bi an boi ${cat.getName()}`);
        cat.setWeight(cat.getWeight() + this.weight);
    }

    getName() { return this.name; }

    say(message) {
        console.log(`${this.name} : ${message}`);
    }

    setWeight(weight) {
        this.weight = weight;
    }

    getWeight() {
        return this.weight;
    }

    getName() { return this.name; }

    setSpeed(speed) {
        this.speed = speed;
    }

    getSpeed() { return this.speed }


}