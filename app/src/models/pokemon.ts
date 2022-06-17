export class Pokemon {
    constructor (
    private _name: string,
    private type: string
    ){}

    public static criaDe(namestring: string, typestring: string): Pokemon {
        const name = namestring;
        const type = typestring;
        return new Pokemon(name, type);
    }
}