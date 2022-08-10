


-- 3 tables
-- foreign key - do not add not null

-- table 1
-- department
    -- id: INT PRIMARY KEY
    -- name: VARCHAR(30)

-- table 2
-- role
    -- id: INT PRIMARY KEY
    -- title: VARCHAR(30)
    -- salary: DECIMAL
    -- department_id: INT

-- table 3
-- employee
    -- id: INT PRIMARY KEY
    -- first_name: VARCHAR(30)
    -- last_name: VARCHAR(30)
    -- role_id: INT
    -- manager_id: INT