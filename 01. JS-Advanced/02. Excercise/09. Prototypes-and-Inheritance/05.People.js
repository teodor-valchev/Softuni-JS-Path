function solution() {
    class Employee {
        constructor(firstName, age) {
            this.firstName = firstName;
            this.age = age;
            this.tasks = [];
            this.salary = 0;
        }

        work() {
            const current = this.tasks.shift();
            console.log(current);
            this.tasks.push(current);
        }

        collectSalary() {
            console.log(
                `${this.firstName} received ${this.salary} this month.`,
            );
        }
    }

    class Junior extends Employee {
        constructor(firstName, age) {
            super(firstName, age);
            this.tasks = [`${this.firstName} is working on a simple task.`];
        }
    }

    class Senior extends Employee {
        constructor(firstName, age) {
            super(firstName, age);
            this.tasks = [
                `${firstName} is working on a complicated task.`,
                `${firstName} is taking time off work.`,
                `${firstName} is supervising junior workers.`,
            ];
        }
    }

    class Manager extends Employee {
        constructor(firstName, age) {
            super(firstName, age);
            this.tasks = [
                `${firstName}scheduled a meeting`,
                `${firstName} is preparing a quarterly report.`,
            ];
            this.dividend = 0;
        }

        collectSalary() {
            console.log(
                `${this.firstName} received ${this.salary + this.dividend} this month.`,
            );
        }
    }

    return { Junior, Senior, Manager, Employee };
}

const classes = solution();

const junior = new classes.Junior("Ivan", 25);

junior.work();

junior.work();

junior.salary = 5811;

junior.collectSalary();
const senior = new classes.Senior("Alex", 31);
senior.work();
senior.work();
senior.work();
senior.work();

const manager = new classes.Manager("Tom", 55);
manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();
