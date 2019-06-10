'use strict';

//Задание 1:
const loop = (times = 0, cb = null) => {
    if (cb === null) return 'Не передана функция';
    else for (let i = 0; i < times; i++) {
        cb();
    }
};

const z = loop(10, () => {
    console.log(i + 1)
});//счётчик

//Задание 2:
//не стал выводить тип фигуры дважды, в итоговой площади и в объекте с входными данными - смысл?
const countArea = (figureType, sides = []) => {
    const input = {sides, figureType};
    switch (figureType) {
        case 'треугольник': {
            const p = sides.reduce((prev, current) => {
                return prev + current
            });
            const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
            return {area, input};
        }

        case 'квадрат': {
            const area = sides[0] * sides[0];
            return {area, input};
        }

        case 'прямоугольник': {
            const area = sides[0] * sides[1];
            return {area, input};                   //кейсы можно продолжать и дальше, я привёл самые простые
        }

        default:
            return input;
    }
};


//Задание 3:

class Human {
    constructor(name, dateOfBirth) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.getAge = this.getAge.bind(this);
        this.displayInfo = this.displayInfo.bind(this);
        this.age = this.getAge();
    }

    getAge() {
        const cDate = new Date();
        return cDate.getFullYear() - this.dateOfBirth.getFullYear();
    };

    displayInfo() {
        return {name, dateOfBirth, age};
}

class Employee extends Human {
    constructor(salary, department) {
        super(name, dateOfBirth, age);
        this.salary = salary;
        this.department = department;
    }


}

