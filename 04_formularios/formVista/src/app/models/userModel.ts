export interface User {

    nombre: string;
    apellido: string;
    tlf: number;

}

export class UserModel implements User {

    constructor (public nombre: string,
                 public apellido: string,
                 public tlf: number) {

    }
}
