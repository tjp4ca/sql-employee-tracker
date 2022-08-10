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
                console.log('Add a department success')
            }
            if(output.options == 'Add a role') {
                console.log('Add a role success')
            }
            if(output.options == 'Add an employee') {
                console.log('Add an employee success')
            }
            if(output.options == 'Update an employee role') {
                console.log('Update an employee role success')
            }
            // console.log(output)
            // console.log(output.options)
        })
        // .then(() => {
        //     init();
        // })
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
    });
};


// // Get a single candidate
// app.get('/api/candidate/:id', (req, res) => {
//     const sql = `SELECT * FROM candidates WHERE id = ?`;
//     const params = [req.params.id];
  
//     db.query(sql, params, (err, row) => {
//       if (err) {
//         res.status(400).json({ error: err.message });
//         return;
//       }
//       res.json({
//         message: 'success',
//         data: row
//       });
//     });
//   });

// // Create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
//               VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

