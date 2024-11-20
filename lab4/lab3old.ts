//Задание 1
namespace Transport {
    export interface Owner {
        surname: string;
        name: string;
        patronymic: string;
        dateOfBirth: Date;
        documentType: PersonaDocument;
        documentSeries: number;
        documentNumber: number;
        ownerPrint(): void;
    }

    export enum PersonaDocument {
        Passport = 'Паспорт',
        Visa = 'Виза',
        ResidencePermit = 'ВНЖ',
        TemporaryPassport = 'Временный паспорт'
    }

    export class infoOwner implements Owner {
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

    export interface Vehicle {
        brand: string,
        model: string,
        manufacturedYear: Date,
        vinNumber: string,
        registrationNumber: string,
        infoAboutOwner: string,
        vehiclePrint(): void;
    }

    export class infoVehicle implements Vehicle {
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
            return this.brand;
        }

        get model(): string {
            return this.model;
        }

        get manufacturedYear(): Date {
            return this.manufacturedYear;
        }

        get vinNumber(): string {
            return this.vinNumber;
        }

        get registrationNumber(): string {
            return this.registrationNumber;
        }

        get infoAboutOwner(): string {
            return this.infoAboutOwner;
        }

        vehiclePrint(): void {
            console.log(`Марка: ${this.brand}`);
            console.log(`Модель: ${this.model}`);
            console.log(`Год выпуска: ${this.manufacturedYear}`);
            console.log(`VIN номер: ${this.vinNumber}`);
            console.log(`Регистрационный номер: ${this.registrationNumber}`);
        }
    }

    export interface Car extends Vehicle {
        bodyType: CarBody,
        classType: CarClass
    }

    export enum CarBody {
        sedan = 'седан',
        hatchback = 'хэтчбек',
        universal = 'универсал',
        coupe = 'купе',
        cabriolet = 'кабриолет',
        minivan = 'микроавтобус',
        pickup = 'пикап',
        crossover = 'кроссовер'
    }

    export enum CarClass {
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

    export class infoCar implements Car {
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
    }

    export interface Motorbike extends Vehicle {
        bikeFrame: string;
        sportBike: boolean;
    }

    export class infoMotorBike implements Motorbike {
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

    export interface VehicleStorage<T extends Vehicle> {
        creationDate: Date;
        vehicle: T[];
        getAllInfo(): T[];
    }

    export class infoVehicleStorage<T extends Vehicle> implements VehicleStorage<T> {
        creationDate: Date;
        vehicle: T[];
        
        // НАдо ли это вообще или че??
        // constructor() {
        //     this.creationDate = new Date();
        //     this.vehicle = [];
        // }
        // Что=то определенно надо, но..🤔😌

        getAllInfo(): T[] {
            return this.vehicle;
        }
    }
}