DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;

-- foreign key - do not add not null

-- table 1
CREATE TABLE department (
    -- id: INT PRIMARY KEY
    -- name: VARCHAR(30)
);

-- table 2
CREATE TABLE roles (
    -- id: INT PRIMARY KEY
    -- title: VARCHAR(30)
    -- salary: DECIMAL
    -- department_id: INT
);

-- table 3
CREATE TABLE employee (
    -- id: INT PRIMARY KEY
    -- first_name: VARCHAR(30)
    -- last_name: VARCHAR(30)
    -- role_id: INT
    -- manager_id: INT
);
