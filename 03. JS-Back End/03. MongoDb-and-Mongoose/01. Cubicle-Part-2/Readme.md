
# Cubicle

Cubicle is a web application built with Express.js for managing and showcasing a collection of items. It provides a platform for users to browse, add, edit, and delete items within their collection.

## Functionality

- Browse a collection of items
- Add new items to the collection
- Create and attach accessories to items

## Expected Behavior

For example, adding a new cat breed called "Persian cat" should be followed by creating a new cat with the newly created breed "Persian cat", name "Niya", description "Lonely and lazy cat seeks hospitable owner", and an imported image. After adding the cat, the home page ('/') should display all cats in the shelter, including the newly added one.
## Routing

- `/` - the main page (should visualize all the cubes in the database and a search field)
- `/about` – should render the about page
- `/cubes/create` – should render the create cube form
- `/cubes/details/:id` – should render the details page about selected cube
- `/accessories/create/accessory` - should render the create an accessory form
- `/accessories/attach/accessory/:id` - should render the accessory page about attaching new accessory for a cube
- `Any other` - should render the 404 not found page

## Models
Cube:

- `_id`: Unique identifier (ObjectId)
- `name`: Required string representing the cube's name
- `description`: Additional information about the cube (string)
- `imageUrl`: Reference to an image displaying the cube (string)
- `difficultyLevel`: Reference to the difficultyLevel of the cube (number)
- `accessories`: ObjectId, ref Accessories Model (array)

Accessory:

- `_id`: Unique identifier (ObjectId)
- `name`: Required string representing the accessory's name
- `description`: Additional information about the accessory (string)
- `imageUrl`: Reference to an image displaying the accessory (string)


## Run Locally

Clone the project

```bash
  git clone https://github.com/teodor-valchev/Softuni-JS-Path.git
```

Go to the project directory

```bash
  cd 03. JS-Back End/03. MongoDb-and-Mongoose/01. Cubicle-Part-2
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Tech Stack

**Client:** HTML, CSS, JavaScript, Handlebars

**Server:** Node, Express, MongoDB with Mongoose

