function DontTouchMe(target: Function) {
    Object.freeze(target.prototype);
}

function UppercaseMethod<This, Args extends any[], Return> (
    target: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
    ) {
        return function (this: This, ...args: Args): Return {
            let res = target.call(this, ...args);
            res = res.toUpperCase();
            return res;
        }
    }

interface Owner {
    surname: string;
    name: string;
    patronymic: string;
    dateOfBirth: Date;
    documentType: PersonaDocument;
    documentSeries: number;
    documentNumber: number;
    ownerPrint(): void;
}

enum PersonaDocument {
    Passport = 'Паспорт',
    Visa = 'Виза',
    ResidencePermit = 'ВНЖ',
    TemporaryPassport = 'Временный паспорт'
}

class infoOwner implements Owner {
    private _surname: string;
    private _name: string;
    private _patronymic: string;
    private _dateOfBirth: Date;
    private _documentType: PersonaDocument;
    private _documentSeries: number;
    private _documentNumber: number;

    constructor (
        surname: string,
        name: string,
        patronymic: string,
        dateOfBirth: Date,
        documentType: PersonaDocument,
        documentSeries: number,
        documentNumber: number,
    ) {
        this._surname = surname;
        this._name = name;
        this._patronymic = patronymic;
        this._dateOfBirth = dateOfBirth;
        this._documentType = documentType;
        this._documentSeries = documentSeries;
        this._documentNumber = documentNumber;
    }
    
    get surname(): string {
        return this._surname;
    }

    get name(): string {
        return this._name;
    }

    get patronymic(): string {
        return this._patronymic;
    }

    get dateOfBirth(): Date {
        return this._dateOfBirth;
    }

    get documentType(): PersonaDocument {
        return this._documentType;
    }

    get documentSeries(): number {
        return this._documentSeries;
    }

    get documentNumber(): number {
        return this._documentNumber;
    }

    ownerPrint(): void {
        console.log(`Фамилия ${this.surname}`);
        console.log(`Имя: ${this.name}`);
        console.log(`Отчество: ${this.patronymic}`);
        console.log(`Дата Рождения: ${this.dateOfBirth}`);
        console.log(`Тип документа: ${this.documentType}`);
        console.log(`Серия документа: ${this.documentSeries}`);
        console.log(`Номер документа: ${this.documentNumber}`);
    }
}

interface Vehicle {
    brand: string,
    model: string,
    manufacturedYear: Date,
    vinNumber: string,
    registrationNumber: string,
    infoAboutOwner: string,
    vehiclePrint(): void;
    someInfoVehiclePrint(): void;
}

class infoVehicle implements Vehicle {
    private _brand: string;
    private _model: string;
    private _manufacturedYear: Date;
    private _vinNumber: string;
    private _registrationNumber: string;
    private _infoAboutOwner: string;

    constructor (
        brand: string,
        model: string,
        manufacturedYear: Date,
        vinNumber: string,
        registrationNumber: string,
        infoAboutOwner: string
    ) {
        this._brand = brand;
        this._model = model;
        this._manufacturedYear = manufacturedYear;
        this._vinNumber = vinNumber;
        this._registrationNumber = registrationNumber;
        this._infoAboutOwner = infoAboutOwner;
    }

    get brand(): string {
        return this._brand;
    }

    get model(): string {
        return this._model;
    }

    get manufacturedYear(): Date {
        return this._manufacturedYear;
    }

    get vinNumber(): string {
        return this._vinNumber;
    }

    get registrationNumber(): string {
        return this._registrationNumber;
    }

    get infoAboutOwner(): string {
        return this._infoAboutOwner;
    }

    vehiclePrint(): void {
        console.log(`Марка: ${this.brand}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Год выпуска: ${this.manufacturedYear}`);
        console.log(`VIN номер: ${this.vinNumber}`);
        console.log(`Регистрационный номер: ${this.registrationNumber}`);
    }

    someInfoVehiclePrint(): void {
        console.log(`\n${this.vinNumber} ${this.infoAboutOwner} \n${this.registrationNumber}`);
    }
}

interface Car extends Vehicle {
    bodyType: CarBody,
    classType: CarClass,
    getSomeInfo(): string;
}

enum CarBody {
    sedan = 'седан',
    hatchback = 'хэтчбек',
    universal = 'универсал',
    coupe = 'купе',
    cabriolet = 'кабриолет',
    minivan = 'микроавтобус',
    pickup = 'пикап',
    crossover = 'кроссовер'
}

enum CarClass {
    A = 'A Класс, мини-автомобиль',
    B = 'B Класс, эконом-авто, ',
    С = 'С Класс, гольф-класс',
    D = 'D Класс, полноразмерный седан',
    E = 'E Класс, бизнес-авто',
    F = 'F Класс, представительное авто',
    S = 'S класс, спортивное авто',
    M = 'M класс, минивэн',
    J = 'J класс, внедорожник'
}

@DontTouchMe
class infoCar implements Car {
    brand: string;
    model: string;
    manufacturedYear: Date;
    vinNumber: string;
    registrationNumber: string;
    infoAboutOwner: string;
    bodyType: CarBody;
    classType: CarClass; 

    constructor(
        brand: string,
        model: string,
        manufacturedYear: Date,
        vinNumber: string,
        registrationNumber: string,
        infoAboutOwner: string,
        bodyType: CarBody,
        classType: CarClass
    ) {
        this.brand = brand;
        this.model = model;
        this.manufacturedYear = manufacturedYear;
        this.vinNumber = vinNumber;
        this.registrationNumber = registrationNumber;
        this.infoAboutOwner = infoAboutOwner;
        this.bodyType = bodyType;
        this.classType = classType;
    }
    
    vehiclePrint(): void {
        console.log(`Марка ${this.brand}`);
        console.log(`Модель ${this.model}`);
        console.log(`Год выпуска ${this.manufacturedYear}`);
        console.log(`VIN номер: ${this.vinNumber}`);
        console.log(`Регистрационный номер: ${this.registrationNumber}`);
        console.log(`Тип кузова: ${this.bodyType}`);
        console.log(`Класс автомобиля: ${this.classType}`);
    }

    @UppercaseMethod
    getSomeInfo(): string {
        return `Владелец: ${this.infoAboutOwner}`;
    }
}

interface Motorbike extends Vehicle {
    bikeFrame: string;
    sportBike: boolean;
}

class infoMotorBike implements Motorbike {
    brand: string;
    model: string;
    manufacturedYear: Date;
    vinNumber: string;
    registrationNumber: string;
    infoAboutOwner: string;
    bikeFrame: string;
    sportBike: boolean;

    constructor(
        brand: string,
        model: string,
        manufacturedYear: Date,
        vinNumber: string,
        registrationNumber: string,
        infoAboutOwner: string,
        bikeFrame: string,
        sportBike: boolean
    ) {
        this.brand = brand;
        this.model = model;
        this.manufacturedYear = manufacturedYear;
        this.vinNumber = vinNumber;
        this.registrationNumber = registrationNumber;
        this.infoAboutOwner = infoAboutOwner;
        this.bikeFrame = bikeFrame;
        this.sportBike = sportBike;
    }

    vehiclePrint(): void {
        console.log(`Марка: ${this.brand}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Год выпуска: ${this.manufacturedYear}`);
        console.log(`VIN номер: ${this.vinNumber}`);
        console.log(`Регистрационный номер: ${this.registrationNumber}`);
        console.log(`Тип рамы: ${this.bikeFrame}`);
        console.log(`Спортивный мотоцикл: ${this.sportBike ? 'Да' : 'Нет'}`);
    }
}

interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicle: T[];
    getAllInfo(): T[];
    addInfo(newVehicle: T): void;
    sortAllInfo(): void;
    getIncludeInfo(rightData: any): T[];
}

class infoVehicleStorage<T extends Vehicle> implements VehicleStorage<T> {
    creationDate: Date;
    vehicle: T[];

    constructor(
        creationDate: Date,
        vehicle: T[]
    ) {
        this.creationDate = new Date();
        this.vehicle = [];
    }

    getAllInfo(): T[] {
        return this.vehicle;
    }

    addInfo(newVehicle: T): void {
        this.vehicle.push(newVehicle);
    }

    sortAllInfo(): void {
        this.vehicle.sort((a, b) => {
            if (a.brand < b.brand) return -1;
            if (a.brand > b.brand) return 1;
            return 0;
        });
    }

    getIncludeInfo(rightData: string): T[] {
        return this.vehicle.filter((vehicle) => vehicle.infoAboutOwner.toLowerCase() === rightData.toLowerCase());
    }
}


let legendCarStorage = new infoVehicleStorage(new Date(), []);

let teslaModelX1 = new infoVehicle(
    'Tesla',
    'Model X',
    new Date(2015, 8, 29),
    'ABC123',
    '300Iq НОМЕРА',
    'Пропал',
);


let toyotaPickup = new infoVehicle(
    'Toyota',
    'Corolla',
    new Date(2015, 3, 10),
    '1A2B3C4D5E6F7G8H9',
    'ABC123',
    'John From Alabama'
);

let timeMachine = new infoVehicle(
    'DeLorean',
    'DMC-12',
    new Date(1981, 0, 21),
    '23456787654323456',
    'OUTATIME',
    'Emmett Lathrop Brown'
)


legendCarStorage.addInfo(toyotaPickup);
legendCarStorage.addInfo(teslaModelX1);
legendCarStorage.addInfo(timeMachine);


//Задание 1
console.log('Изначальный массив массив:');
console.log(legendCarStorage);

legendCarStorage.sortAllInfo();
console.log('\nОтсортированный массив:');
console.log(legendCarStorage);


// Задание 2
console.log('\n\nНовый массив');
console.log(legendCarStorage.getIncludeInfo('John FROM Alabama'));

//Задание 3
toyotaPickup.someInfoVehiclePrint();