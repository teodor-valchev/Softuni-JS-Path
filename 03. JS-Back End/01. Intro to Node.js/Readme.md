
# Cat Shelter Web Application

Welcome to the Cat Shelter web application repository! This project is a simple cat catalog that showcases a "database" (JSON file) of cats available for adoption. Every user, without requiring registration, can browse the cats and potentially become their owner. The application facilitates basic CRUD (Create, Read, Update, Delete) operations on cat entries. Each cat entry includes details such as name, description, image, and breed.


## Functionality

- `Add Cat Breed`: Ability to create a new cat breed, which can be selected when adding a new cat to the shelter.
- `Add Cat`: Creation of a new cat entry with attributes like name, description, image, and breed. All cat entries are stored in a JSON file acting as the database.
- `List All Cats`: Display all cats from the database, regardless of breed.
- `Edit Cat`: Modify a cat's information, with changes persisted in the database.
- `Delete Cat`: Remove a specific cat from the database.


## Expected Behavior

For example, adding a new cat breed called "Persian cat" should be followed by creating a new cat with the newly created breed "Persian cat", name "Niya", description "Lonely and lazy cat seeks hospitable owner", and an imported image. After adding the cat, the home page ('/') should display all cats in the shelter, including the newly added one.
## Routing

The application uses different views based on routing (URLs) with clear and concise URL structures, adhering to HTTP standards.
## Models
Cat:

- `id`: Unique identifier (string or number)
- `name`: Required string representing the cat's name
- `description`: Additional information about the cat (string)
- `image`: Reference to an image displaying the cat (string)
- `breed`: Reference to the breed of the cat (string)

## Run Locally

Clone the project

```bash
  git clone https://github.com/teodor-valchev/Softuni-JS-Path.git
```

Go to the project directory

```bash
  cd 03.JS-Back End/01.Intro to Node.js/03.Cat-Shelter-Intro-Guide-follow
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

NOTE: Lastly after each request press `F5` so you can see the changes.

