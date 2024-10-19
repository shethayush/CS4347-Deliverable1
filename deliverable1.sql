-- Here we are first creating the database, and confirming that we intend to use this database
CREATE DATABASE IF NOT EXISTS WeFIT;
USE WeFIT;

-- Creating the first component, the user table
CREATE TABLE IF NOT EXISTS User (
    user_id INT PRIMARY KEY,
    name VARCHAR(100),
    weight DECIMAL(5, 2),
    age INT,
    sex CHAR(1),
    email VARCHAR(100),
    phone_num VARCHAR(15)
);

-- Inserting tuples into the user table
INSERT IGNORE INTO User (user_id, name, weight, age, sex, email, phone_num) VALUES
(1, 'Ebru Cankaya', 50.0, 25, 'F', 'ebrucankaya@gmail.com', '123-456-7890'),
(2, 'Manasi Vipat', 60.0, 30, 'F', 'manaivipat@gmail.com', '234-567-8901'),
(3, 'Shivani Elitem', 80.0, 22, 'F', 'shivanielitem@gmail.com', '345-678-9012'),
(4, 'Meghana Lammata', 55.0, 28, 'F', 'meghanalammata@gmail.com', '456-789-0123'),
(5, 'Ayusha Timalsena', 90.0, 35, 'F', 'ayushatimalsena@gmail.com', '567-890-1234'),
(6, 'Anwita Gudapuri', 50.0, 21, 'F', 'anwitagudapuri@gmail.com', '678-901-2345'),
(7, 'Anjali Kolluru', 75.0, 20, 'F', 'anjalikolluru@gmail.com', '789-012-3456'),
(8, 'Ayush Sheth', 65.0, 29, 'M', 'ayushsheth@gmail.com', '890-123-4567'),
(9, 'George Contreras', 85.0, 31, 'M', 'georgecontreras@gmail.com', '901-234-5678'),
(10, 'Soumika Seelam', 70.0, 27, 'F', 'soumikaseelam@gmail.com', '012-345-6789');

-- Creating the workout table, the second key component
CREATE TABLE IF NOT EXISTS Workout (
    workout_id INT PRIMARY KEY,
    type VARCHAR(50),
    user_id INT,
    duration INT,
    frequency INT,
    intensity VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES User(user_id) -- explaining to computer that the workout references the user, is tied to the user 
);

-- Inserting tuples into the workouts table
INSERT IGNORE INTO Workout (workout_id, type, user_id, duration, frequency, intensity) VALUES
(1, 'Cardio', 1, 45, 5, 'Medium'),
(2, 'Strength Training', 2, 60, 4, 'High'),
(3, 'Yoga', 3, 30, 3, 'Low'),
(4, 'HIIT', 4, 40, 3, 'High'),
(5, 'Swimming', 5, 60, 2, 'Medium'),
(6, 'Cycling', 6, 50, 4, 'Medium'),
(7, 'Running', 7, 35, 3, 'High'),
(8, 'Pilates', 8, 45, 2, 'Low'),
(9, 'Weightlifting', 9, 75, 3, 'High'),
(10, 'CrossFit', 10, 60, 4, 'High');

-- Creating the nutrition table
CREATE TABLE IF NOT EXISTS Nutrition (
    food_id INT PRIMARY KEY,
    food_name VARCHAR(100),
    user_id INT,
    calories INT,
    date DATE,
    macronutrients VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES User(user_id)  -- explaining to computer that the nutrition references the user, is tied to the user 
);

-- Inserting tuples into the nutrition table
INSERT IGNORE INTO Nutrition (food_id, food_name, user_id, calories, date, macronutrients) VALUES
(1, 'Deep Dish Pizza', 1, 300, '2024-10-01', 'Protein: 25g, Carbs: 10g, Fats: 15g'),
(2, 'Pasta Carbonara', 2, 200, '2024-10-02', 'Protein: 15g, Carbs: 30g, Fats: 5g'),
(3, 'Chicken Biryani', 3, 500, '2024-10-03', 'Protein: 40g, Carbs: 0g, Fats: 20g'),
(4, 'Yogurt Parfait', 4, 250, '2024-10-04', 'Protein: 5g, Carbs: 45g, Fats: 7g'),
(5, 'Protein Brownies', 5, 350, '2024-10-05', 'Protein: 30g, Carbs: 5g, Fats: 10g'),
(6, 'Avacado Toast', 6, 400, '2024-10-06', 'Protein: 10g, Carbs: 60g, Fats: 15g'),
(7, 'Protein Bar', 7, 200, '2024-10-07', 'Protein: 20g, Carbs: 20g, Fats: 10g'),
(8, 'Chilli Oil Eggs', 8, 350, '2024-10-08', 'Protein: 10g, Carbs: 35g, Fats: 20g'),
(9, 'Eggs and Bacon', 9, 450, '2024-10-09', 'Protein: 30g, Carbs: 5g, Fats: 35g'),
(10, 'Quinoa Salad', 10, 300, '2024-10-10', 'Protein: 10g, Carbs: 40g, Fats: 10g');


-- Creating the goals table
CREATE TABLE IF NOT EXISTS Goals (
    goal_id INT PRIMARY KEY,
    goal_type VARCHAR(50),
    user_id INT,
    date_set DATE,
    measurement VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES User(user_id)  -- explaining to computer that the goals references the user, is tied to the user 
);

-- Inserting tuples into the goals table
INSERT IGNORE INTO Goals (goal_id, goal_type, user_id, date_set, measurement) VALUES
(1, 'Lose Weight', 1, '2024-09-01', '5 kg'),
(2, 'Build Muscle', 2, '2024-09-05', '5 kg'),
(3, 'Improve Stamina', 3, '2024-09-10', '10 minutes of extra exercise'),
(4, 'Reduce Body Fat', 4, '2024-09-15', '5% body fat'),
(5, 'Increase Flexibility', 5, '2024-09-20', 'Be able to touch toes'),
(6, 'Run a Marathon', 6, '2024-09-25', 'Completing the race'),
(7, 'Gain Muscle Mass', 7, '2024-10-01', 'Gaining 5 kg muscle'),
(8, 'Improve Strength', 8, '2024-10-05', 'Lifting 50 kg'),
(9, 'Reduce Stress', 9, '2024-10-10', 'Daily yoga'),
(10, 'Improve Diet', 10, '2024-10-15', 'Healthy eating');


-- Creating the progress table
CREATE TABLE IF NOT EXISTS Progress (
    progress_id INT PRIMARY KEY,
    goal_id INT,
    date_end DATE,
    status VARCHAR(50),
    setbacks VARCHAR(255),
    FOREIGN KEY (goal_id) REFERENCES Goals(goal_id)  -- explaining to computer that the progress references the user, is tied to the user 
);

-- Inserting tuples into the progress table
INSERT INTO Progress (progress_id, goal_id, date_end, status, setbacks) VALUES
(1, 1, '2024-10-01', 'In Progress', 'None'),
(2, 2, '2024-10-05', 'In Progress', 'Missed my workout'),
(3, 3, '2024-10-10', 'Completed', 'None'),
(4, 4, '2024-10-15', 'In Progress', 'Had a cheat day'),
(5, 5, '2024-10-20', 'Completed', 'None'),
(6, 6, '2024-10-25', 'In Progress', 'Got injured'),
(7, 7, '2024-11-01', 'In Progress', 'None'),
(8, 8, '2024-11-05', 'In Progress', 'Didnt have time to workout or eat healthy'),
(9, 9, '2024-11-10', 'Completed', 'None'),
(10, 10, '2024-11-15', 'In Progress', 'Missed my workout');