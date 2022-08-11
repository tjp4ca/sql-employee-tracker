const inquirer = require('inquirer');

// mySQL
const db = require('./db/connection');

const cTable = require('console.table');


const input = [
    {
        type: 'list',
        name: 'options',
        message: 'Please choose',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role'
        ]
    }
]

const init = () => {
    inquirer
        .prompt(input)
        .then((output) => {
            if(output.options == 'View all departments') {
                viewAllDepartments();
            }
            if(output.options == 'View all roles') {
                viewAllRoles();
            }
            if(output.options == 'View all employees') {
                viewAllEmployees();
            }
            if(output.options == 'Add a department') {
                addDepartment();
            }
            if(output.options == 'Add a role') {
                console.log('Add a role success')
                addRole();
            }
            if(output.options == 'Add an employee') {
                addEmployee();
            }
            if(output.options == 'Update an employee role') {
                console.log('Update an employee role success')
            }
            // console.log(output)
            // console.log(output.options)
        })
        .catch((error) => {
            console.log(error)
        })

}
init()

const viewAllDepartments = () => {
    const sql = `SELECT * FROM department`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows)
        init();
    });
};

const viewAllRoles = () => {
    const sql = `SELECT * FROM roles`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows)
        init();
      });
};

const viewAllEmployees = () => {
    const sql = `SELECT * FROM employee`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows)
        init();
    });
};

const addDepartment = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'department',
                message: 'What is the name of the department?',
            }
        ])
        .then((answer) => {
            // console.log(answer.department);
            const sql = `INSERT INTO department (department_name) 
                        VALUES (?)`;
            const params = [answer.department];

            db.query(sql, params, (err, rows) => {
                if (err) {
                    console.log(err);
                }
                viewAllDepartments();
                init();
                // console.table(rows)
            })
        })
};

const addRole = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'title',
                message: 'What is your title?',
                choices: [
                    'Manager',
                    'Intern'
                ]
            },
            {
                type: 'list',
                name: 'salary',
                message: 'What is your salary?',
                choices: [
                    '100000.00',
                    '50000.00'
                ]
            }
        ])
        .then((answer) => {
            // console.log(answer.role);
            const sql = `INSERT INTO roles (title, salary) 
                        VALUES (?,?,?)`;
            const params = [answer.title, answer.salary];

            db.query(sql, params, (err, rows) => {
                if (err) {
                    console.log(err);
                }
                viewAllRoles();
                init();
                // console.table(rows)
            })
        })
};

// enter the employee’s first name, last name, role, and manager
const addEmployee = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'What is your first name?',
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'What is your last name?',
            }
        ])
        .then((answer) => {
            // console.log(answer.employee);
            const sql = `INSERT INTO employee (first_name, last_name) 
                        VALUES (?,?)`;
            const params = [answer.firstName, answer.lastName];

            db.query(sql, params, (err, rows) => {
                if (err) {
                    console.log(err);
                }
                viewAllEmployees();
                init();
                // console.table(rows)
            })
        })
};

