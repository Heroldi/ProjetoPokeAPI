export class Pokemon {
    constructor(_name, type) {
        this._name = _name;
        this.type = type;
    }
    static criaDe(namestring, typestring) {
        const name = namestring;
        const type = typestring;
        return new Pokemon(name, type);
    }
}
