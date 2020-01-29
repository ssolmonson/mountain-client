
## Project Idea

What is your project idea?  How did you come up with it? Why? Who would use it?

```md
My project idea is creating a log of mountains a user has visited and tracking certain statistics. My passion for skiing is where I really discovered what I wanted to create. It's another version of a tri tracker type application, and more akin to a journal of sorts at least for my base idea.
```

## Write between 3-5 user stories

We have gone over this before. Please refer to your notes, previous repos or the
google machine if you need further assistance.

```md
As a user, I want to create an account to be able to track my data.
As a user I want to create a new entry for a mountain.
As a user I want to update information for a mountain.
As a user I want to show a particular mountain so I can see my visits to it.
As a user I want to view all the mountains I visited.
As a user I want to enter statistics about my day on the mountain.
As a user I want to be able to change my password to keep my account secure.
As a user I want to share my log with my friends to give them recomendation based of my experiences on the particular slope.
```

## Plan your tables and columns

What tables will you need? What will the columns on the table be?

```md
The first iteration of my project will feature a users table and a mountains table. A user has many mountains. The users table will contain wi a first name, last name, and email (and possibly a nickname). The mountains table with have the name of the mountain, location, vertical rise, difficulty, date visited, conditions, and a small review/description with a possible optional field for stats (maybe just a runs taken field at the start). Advanced goals have a seperate stats table, and location table, with the stats table being able to track certain data and possibly include charts/graphs (Given that way beyond my basic scope)
```

## Create an ERD (entity relationship diagram)

These are the diagrams that show how your tables are related to one another
(one to many, many to many, etc).

Include an image (or a link to image) below.


![ERD](https://i.imgur.com/WLwoQd1.jpg)


## Routing

What routes will you need to make the proper request to your API?

```md
For my MVP I will want the basic CRUD routes for my mountain. Be able to create, show, index, update, and destroy a mountain for a particular logged in user.  The create, update, and destroy will only be allowed by an authenticated user with a token. My user will have a sign-up, sign-in, change-password, and sign-out.
```

## Wireframes

Please create a wireframe of your planned front end.
![wireframe](https://i.imgur.com/0etU6v1.jpg)

## Timetable

Write a basic timetable for yourself, you don't have to stick to it but it
helps to go in with a plan.

```md
1. Create User table
2. Test User table routes
3. Create Mountain table
4. Test CRUD routes on Mountain table
5. Join User table to Mountain table
6. Test routes between the two
7. Develop basic front-end structure
8. Polish design of page
9. View creativity/advanced goals (if time allows) and choose what to move forward with next
```
