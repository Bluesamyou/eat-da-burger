CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
    id INTEGER
    auto_increment primary key, 
    burger_name VARCHAR
    (100), 
    devoured BOOLEAN
)

