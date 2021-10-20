interface Use {
    id: number;
    name: string;
    surname: string;
    age: number;
    dateOfBirth: string;
    address: Address;
    role: Role;
    username: string;
    profilePhotoUrl: string;
    companies: Company[];
    gender: Gender;
};
type Role = 'staff' | 'student' | 'manager' | 'admin';
type Gender = 'male' | 'female' | 'other';
interface Company {
    id: number;
    name: string;
    description: string;
    location: Address;
};
interface Address {
    city: string;
    street: string;
    postalCode: string;
}

const obj: Use = {
    id: 3487,
    name: 'Mario',
    surname: 'Rossi',
    age: 25,
    dateOfBirth: '1995-14-12',
    address: {
        city: 'Roma',
        street: 'Via roma 10',
        postalCode: '00100'
    },
    role: 'staff', // Ruoli possibili: 'staff', 'student', 'manager', 'admin'
    username: 'MarioRossi80',
    profilePhotoUrl: 'https://bit.ly/3yRngEP',
    companies: [
        {
            id: 148979,
            name: 'Develhope',
            description: 'La migliore',
            location: {
                city: 'Palermo',
                street: 'Via Libertà 58',
                postalCode: '90139'
            }
        },
        {
            id: 123123,
            name: 'Apple',
            description: 'E insomma...',
            location: {
                city: 'Cupertino',
                street: 'One Apple Park Way',
                postalCode: '95014'
            }
        }
    ],
    gender: 'male' // Generi possibili: 'male', 'female', 'other'
}


class Person implements Use {
    id: number;
    name: string;
    surname: string;
    age: number;
    dateOfBirth: string;
    address: Address;
    role: Role;
    username: string;
    profilePhotoUrl: string;
    companies: Company[];
    gender: Gender;
    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }
    myFullName() {
        return (`${this.name} ${this.surname}`)
    }
}

const a = new Person('Dario', 'Pastore');

console.log(a)


