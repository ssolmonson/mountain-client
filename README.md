
# Mountain Logger

This application gives users a place to log their ski or snowboard outings for a given day.

## Important Links

- [ Mountain Logger API Repo ](https://github.com/ssolmonson/mountain-api)
- [ Deployed Client ](https://ssolmonson.github.io/mountain-client/)
- [ Deployed API ](https://arcane-cliffs-76201.herokuapp.com/)
- [ GitHub ](https://github.com/ssolmonson)
- [ LinkedIn ](https://www.linkedin.com/in/scottsolmonson/)

### Planning Story

I decided on this project idea as skiing is a huge passion of mine. The idea was to create a log of mountains a user has visited and tracking certain statistics. It's another version of a trip tracker type application, and more akin to a journal of sorts at least for my base idea.

The first iteration of my project will feature a users table and a mountains table. A user will have many mountains. The users table will contain a first name, last name, and email. The mountains table with have the name of the mountain, location, vertical rise, difficulty, date visited, conditions, and a small review/description with a possible optional field for stats (maybe just a runs taken field at the start).

I started with whiteboarding my idea and drawing-up wireframes and ERDs to get a better idea of how I wanted to begin shapping this application. From here I started building my API. Authentication for users (sign-in, sign-up, change password, and sign-out) was tested with Postman. I then scaffolded my resource, built it out, and tested CRUD.

My next step was creating a fairly simple web SPA, and building on it. I decided on using bootstraps modals for my resource form as they gave a nice look to the page. This did trip me up when it came to updating a particular mountain. Updating and removing is only available to the user who owns that particular entry and was handled by handlebars adding these buttons only if the entry belonged to the logged in user. Passing the user's ID into the update form was the trickiest part for me. This ended up being handled by a function that grabbed the id from `store` when the update modal was shown.

This project has had very satisfying  moments in the design and and immplementation. I plan to continuing working on improving it, and shape it with the future goals in mind.


### User Stories

- As a user, I want to create an account to be able to track my data.
- As a user I want to create a new entry for a mountain.
- As a user I want to update information for a mountain.
- As a user I want to show a particular mountain so I can see my visits to it.
- As a user I want to view all the mountains I visited.
- As a user I want to enter statistics about my day on the mountain.
- As a user I want to be able to change my password to keep my account secure.
- As a user I want to share my log with my friends to give them recomendation based of my experiences on the particular slope.

### Technologies Used

- JavaScript
- HTML
- CSS
- SASS
- Bootstrap
- Handlebars
- Ruby-on-Rails API
- jQuery
- AJAX

#### Wireframe

Please create a wireframe of your planned front end.
![wireframe](https://i.imgur.com/0etU6v1.jpg)

---

##### Future Goals:

- Clean up the design and improve on the page flow
- Add a Favorites table with a note section for users to favortie any entry. This would be a way of favoriting their day or seeing a mountain they wish to visit in the future based on another user's entry.
- Stats, using this to keep track of more than just runs or giving a calculation for a general idea of calories burned based on runs and time (With a note that it would just be an estimation, not actual.)
- Graphs based on stats
