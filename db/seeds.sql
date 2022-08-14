INSERT INTO department
    (department_name)
VALUES
    ('Front-end Developer'),
    ('Back-end Developer');

INSERT INTO roles
    (title, salary, department_id)
VALUES
    ('Manager', '100000.00', 1),
    ('Intern', '50000.00', 2);

INSERT INTO employee
    (first_name, last_name, role_id)
VALUES
    ('Gabe', 'Perry', 1),
    ('Sebastian', 'Fave', 1),
    ('Michael', 'Park', 2),
    ('Nino', 'Suffoletta', 2),
    ('Bernabas', 'Abdeta', NULL);

    