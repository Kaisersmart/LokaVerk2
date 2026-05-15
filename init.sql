CREATE TABLE IF NOT EXISTS characters (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    race VARCHAR(100),
    homeland VARCHAR(255),
    weapon VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

TRUNCATE TABLE characters RESTART IDENTITY;

INSERT INTO characters (name, race, homeland, weapon) 

VALUES
('Frodo Baggins', 'Hobbit', 'Shire', 'Sting'),
('Aragorn', 'Human', 'Gondor', 'Anduril'),
('Legolas', 'Elf', 'Mirkwood', 'Bow'),
('Gimli', 'Dwarf', 'Lonely Mountain', 'Axe'),
('Gandalf', 'Maia', 'Valinor', 'Staff');
