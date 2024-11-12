
– creating the database and using it
CREATE DATABASE WeFiT;
USE WeFiT;

– creating all of the tables
CREATE TABLE User (
    user_id INT PRIMARY KEY,
    name VARCHAR(100),
    weight FLOAT,
    age INT,
    email VARCHAR(255),
    sex CHAR(1),
    phone_num VARCHAR(15)
);

CREATE TABLE Workout (
    workout_id INT PRIMARY KEY,
    type VARCHAR(50),
    user_id INT,
    duration INT,
    frequency VARCHAR(50),
    intensity VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Nutrition (
    nutrition_id INT PRIMARY KEY,
    food VARCHAR(100),
    user_id INT,
    calories FLOAT,
    date DATE,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Macronutrients (
    food VARCHAR(100),
    protein FLOAT,
    carbohydrates FLOAT,
    fats FLOAT,
    PRIMARY KEY (food),
    FOREIGN KEY (food) REFERENCES Nutrition(food)
);

– adding a new aspect to nutrition
ALTER TABLE Nutrition ADD UNIQUE (food);

CREATE TABLE Nutrition (
    nutrition_id INT PRIMARY KEY,
    food VARCHAR(100) UNIQUE,
    user_id INT,
    calories FLOAT,
    date DATE,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Macronutrients (
    food VARCHAR(100),
    protein FLOAT,
    carbohydrates FLOAT,
    fats FLOAT,
    PRIMARY KEY (food),
    FOREIGN KEY (food) REFERENCES Nutrition(food)
);

CREATE TABLE Goals (
    goal_id INT PRIMARY KEY,
    goal_type VARCHAR(50),
    user_id INT,
    date_set DATE,
    measurement VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Progress (
    progress_id INT PRIMARY KEY,
    goal_id INT,
    date_end DATE,
    status VARCHAR(50),
    setbacks VARCHAR(255),
    FOREIGN KEY (goal_id) REFERENCES Goals(goal_id)
);

– inserting all of the data into each table
INSERT INTO User (user_id, name, weight, age, email, sex, phone_num) VALUES
    (1, 'Tony Stark', 75.0, 48, 'ironman@avengers.com', 'M', '1234567890'),
    (2, 'Steve Rogers', 80.0, 105, 'captain@avengers.com', 'M', '0987654321'),
    (3, 'Natasha Romanoff', 60.0, 35, 'blackwidow@avengers.com', 'F', '1111111111'),
    (4, 'Bruce Banner', 85.0, 50, 'hulk@avengers.com', 'M', '2222222222'),
    (5, 'Thor Odinson', 100.0, 1500, 'thor@asgard.com', 'M', '3333333333'),
    (6, 'Clint Barton', 75.0, 40, 'hawkeye@avengers.com', 'M', '4444444444'),
    (7, 'Wanda Maximoff', 63.0, 28, 'scarletwitch@avengers.com', 'F', '55555555555'),
    (8, 'Peter Parker', 65.0, 18, 'spiderman@avengers.com', 'M', '666666666666'),
    (9, 'T\'Challa', 82.0, 35, 'blackpanther@avengers.com', 'M', '7777777777777'),
    (10, 'Carol Danvers', 70.0, 34, 'captainmarvel@avengers.com', 'F', '88888888888');

INSERT INTO Workout (workout_id, type, user_id, duration, frequency, intensity) VALUES
    (1, 'Dance', 1, 30, 'Daily', 'Moderate'),
    (2, 'Strength', 2, 45, 'Three times a week', 'High'),
    (3, 'Yoga', 3, 60, 'Two times a week', 'Low'),
    (4, 'HIIT', 4, 20, 'Daily', 'High'),
    (5, 'Tennis', 5, 40, 'Two times a week', 'Moderate'),
    (6, 'Running', 6, 50, 'Daily', 'Moderate'),
    (7, 'Shuttle', 7, 60, 'Three times a week', 'High'),
    (8, 'Pilates', 8, 35, 'Two times a week', 'Low'),
    (9, 'Boxing', 9, 25, 'Daily', 'High'),
    (10, 'CrossFit', 10, 55, 'Four times a week', 'High');

INSERT INTO Nutrition (nutrition_id, food, user_id, calories, date) VALUES
    (1, 'Apple', 1, 95.0, '2024-11-01'),
    (2, 'Banana', 2, 105.0, '2024-11-02'),
    (3, 'Kiwi', 3, 165.0, '2024-11-03'),
    (4, 'Salad', 4, 120.0, '2024-11-04'),
    (5, 'Whipped Cream', 5, 200.0, '2024-11-05'),
    (6, 'Red and White Sprinkles Donut', 6, 155.0, '2024-11-06'),
    (7, 'Schwarma', 7, 220.0, '2024-11-07'),
    (8, 'Milk', 8, 150.0, '2024-11-08'),
    (9, 'Yogurt', 9, 110.0, '2024-11-09'),
    (10, 'Protein Bar', 10, 250.0, '2024-11-10');

INSERT INTO Macronutrients (food, protein, carbohydrates, fats) VALUES
    ('Apple', 0.5, 25, 0.3),
    ('Banana', 1.3, 27, 0.4),
    ('Kiwi', 31, 0, 3.6),
    ('Salad', 2, 10, 7),
    ('Whipped Cream', 4.4, 45, 0.5),
    ('Red and White Sprinkles Donut', 13, 1.1, 11),
    ('Schwarma', 7, 43, 1.5),
    ('Milk', 8, 12, 8),
    ('Yogurt', 10, 15, 3),
    ('Protein Bar', 20, 22, 8);

INSERT INTO Goals (goal_id, goal_type, user_id, date_set, measurement) VALUES
    (1, 'Lose Weight', 1, '2024-10-01', 'Lose 5 kg in 3 months'),
    (2, 'Gain Muscle like the Hulk', 2, '2024-10-15', 'Gain 3 kg of muscle in 2 months'),
    (3, 'Improve Flexibility like Elastagirl', 3, '2024-11-01', 'Touch toes in 1 week'),
    (4, 'Increase Stamina like Quicksilver', 4, '2024-09-10', 'Run 5 km in 30 minutes'),
    (5, 'Build Endurance like Captain America', 5, '2024-10-20', 'Cycle 20 km in 1 hour'),
    (6, 'Better Balance like Black Widow', 6, '2024-11-01', 'Hold a plank for 2 minutes'),
    (7, 'Fat Loss', 7, '2024-08-15', 'Reduce body fat by 5%'),
    (8, 'Healthy Diet', 8, '2024-11-05', 'Eat 3 servings of vegetables daily'),
    (9, 'Increase Energy', 9, '2024-10-10', 'Sleep 8 hours nightly'),
    (10, 'Strengthen Core', 10, '2024-09-01', 'Do 50 sit-ups daily');

INSERT INTO Progress (progress_id, goal_id, date_end, status, setbacks) VALUES
    (1, 1, '2024-12-31', 'On Track', 'None'),
    (2, 2, '2024-12-01', 'Behind...a lot', 'Injury'),
    (3, 3, '2024-12-01', 'On Track again!', 'None'),
    (4, 4, '2024-12-15', 'Ahead kinda', 'None'),
    (5, 5, '2025-01-01', 'On Trackkk', 'Weather'),
    (6, 6, '2024-12-10', 'Ahead', 'None'),
    (7, 7, '2025-01-15', 'Behind...again', 'Bad time management'),
    (8, 8, '2024-12-20', 'On Track', 'None'),
    (9, 9, '2024-11-30', 'On Track', 'None'),
    (10, 10, '2024-12-25', 'Ahead!', 'None');

SELECT * FROM User WHERE age > 15 LIMIT 0, 1000;

SELECT * FROM Workout WHERE intensity = 'High' LIMIT 0, 1000;

SELECT * FROM Nutrition WHERE calories > 500 LIMIT 0, 1000;

SELECT

 * FROM Nutrition WHERE calories > 100 LIMIT 0, 1000;

SELECT * FROM Macronutrients WHERE protein > 20 LIMIT 0, 1000;

SELECT * FROM Goals G JOIN User U ON G.user_id = U.user_id WHERE U.age < 40 LIMIT 0, 1000;

INSERT INTO User (user_id, name, weight, age, email, sex, phone_num) VALUES (11, 'Loki Odinson', 75.0, 1045, 'loki@asgard.com', 'M', '1111111111');

SELECT * FROM Progress WHERE status = 'On Track' LIMIT 0, 1000;

INSERT INTO Workout (workout_id, type, user_id, duration, frequency, intensity) VALUES (11, 'Parkour', 11, 45, 'Daily', 'Moderate');

SELECT * FROM User LIMIT 0, 1000;

SELECT * FROM Workout LIMIT 0, 1000;

SELECT * FROM Nutrition LIMIT 0, 1000;

INSERT INTO Nutrition (nutrition_id, food, user_id, calories, date) VALUES (11, 'Ice Cream', 11, 300, '2024-11-12');

SELECT * FROM Macronutrients LIMIT 0, 1000;

DELETE FROM Macronutrients WHERE food = 'Ice Cream';

SELECT * FROM Macronutrients LIMIT 0, 1000;

INSERT INTO Macronutrients (food, protein, carbohydrates, fats) VALUES ('Ice Cream', 5.0, 40.0, 15.0);

INSERT INTO Goals (goal_id, goal_type, user_id, date_set, measurement) VALUES (11, 'Master Illusion Training', 11, '2024-11-01', 'Learn 3 new spells');

DELETE FROM Goals WHERE goal_type = 'Master Illusion Training';

SELECT * FROM Goals LIMIT 0, 1000;

INSERT INTO Progress (progress_id, goal_id, date_end, status, setbacks) VALUES (11, 11, '2025-01-01', 'On Track, great Illusioning!', 'None');

SELECT * FROM Progress LIMIT 0, 1000;

-- Update Tony's weight
UPDATE User 
SET weight = 80.0 
WHERE user_id = 1 AND weight != 80.0;

-- show User table
SELECT * FROM User;

-- Update Steve's workout duration
UPDATE Workout 
SET duration = 50 
WHERE workout_id = 2 AND duration != 50;

-- show Workout table
SELECT * FROM Workout; 


-- Update calories Shawarma calories
UPDATE Nutrition 
SET calories = 650 
WHERE food = 'Shawarma' AND calories != 650;

-- show Nutrition table
SELECT * FROM Nutrition;

-- Update macronutrients for Shawarma
UPDATE Macronutrients 
SET protein = 40, carbohydrates = 55, fats = 35 
WHERE food = 'Shawarma' 
  AND (protein != 40 OR carbohydrates != 55 OR fats != 35);

-- show Macronutrients table
SELECT * FROM Macronutrients;


-- Update goals for Steve Rogers
UPDATE Goals 
SET measurement = 'Rip 5 punching bags' 
WHERE goal_id = 2 AND measurement != 'Rip 5 punching bags';


-- show Goals table
SELECT * FROM Goals;


-- Update progress to on track for Steve Rogers
UPDATE Progress 
SET status = 'On Track' 
WHERE progress_id = 2 AND status != 'On Track';


-- show Progress table
SELECT * FROM Progress;

-- Drop the existing foreign key constraint in the Workout table
ALTER TABLE Workout DROP FOREIGN KEY workout_ibfk_1;

-- Add a new foreign key constraint with ON DELETE CASCADE in Workout table
ALTER TABLE Workout 
ADD CONSTRAINT workout_ibfk_1 
FOREIGN KEY (user_id) REFERENCES User(user_id) 
ON DELETE CASCADE;

-- Drop the existing foreign key constraint thats in Nutrition
ALTER TABLE Nutrition DROP FOREIGN KEY nutrition_ibfk_1;

-- Add a new foreign key constraint with ON DELETE CASCADE in the Nutrition table
ALTER TABLE Nutrition 
ADD CONSTRAINT nutrition_ibfk_1 
FOREIGN KEY (user_id) REFERENCES User(user_id) 
ON DELETE CASCADE;

-- Drop the existing foreign key constraint in Macronutrients table
ALTER TABLE Macronutrients DROP FOREIGN KEY macronutrients_ibfk_1;

-- Add a new foreign key constraint with ON DELETE CASCADE in Macronutrients table
ALTER TABLE Macronutrients 
ADD CONSTRAINT macronutrients_ibfk_1 
FOREIGN KEY (food) REFERENCES Nutrition(food) 
ON DELETE CASCADE;


-- Drop the existing foreign key constraint thats in Goals
ALTER TABLE Goals DROP FOREIGN KEY goals_ibfk_1;

-- Add a new foreign key constraint that has ON DELETE CASCADE
ALTER TABLE Goals 
ADD CONSTRAINT goals_ibfk_1 
FOREIGN KEY (user_id) REFERENCES User(user_id) 
ON DELETE CASCADE;

-- Drop the existing foreign key constraint in Progress
ALTER TABLE Progress DROP FOREIGN KEY progress_ibfk_1;

-- Add a new foreign key constraint with ON DELETE CASCADE in Progress
ALTER TABLE Progress 
ADD CONSTRAINT progress_ibfk_1 
FOREIGN KEY (goal_id) REFERENCES Goals(goal_id) 
ON DELETE CASCADE;

-- delete Loki
DELETE FROM User 
WHERE user_id = 11;

-- display Users
SELECT * FROM User;

-- Delete a specific workout record if it exists
DELETE FROM Workout 
WHERE workout_id = 11;

-- display workout
SELECT * FROM Workout;

-- Delete a specific nutrition record if it exists
DELETE FROM Nutrition 
WHERE nutrition_id = 11;

-- display nutrition
SELECT * FROM Nutrition;

-- Delete a specific Macronutrient
DELETE FROM Macronutrients 
WHERE food = ‘Ice Cream’;

-- display Macronutrient
SELECT * FROM Macronutrients;

-- Delete a specific Goal
DELETE FROM Goals 
WHERE goal_id = 11;

-- display Goals
SELECT * FROM Goals;

-- Delete a specific progress check
DELETE FROM Progress 
WHERE progress_id = 11;

-- display Progress
SELECT * FROM Progress;

-- Create a view that combines show the goals and progress of the users
CREATE VIEW UserProgressView AS
SELECT 
    U.user_id,
    U.name AS user_name,
    G.goal_id,
    G.goal_type,
    G.date_set,
    G.measurement,
    P.progress_id,
    P.date_end,
    P.status,
    P.setbacks
FROM 
    User U
JOIN 
    Goals G ON U.user_id = G.user_id
JOIN 
    Progress P ON G.goal_id = P.goal_id;

-- then we query the view so we can actually see it
SELECT * FROM UserProgressView;








