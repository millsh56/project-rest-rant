| Method  | Path       | Purpose            |
| ------- | ---------- | ------------------ |
| GET    | /           |     Home page
| GET    | /places     |   Places index page |
| POST   | /places     |    Create new place |
| GET    | /places/new | Form page for creating new place |
| GET    | /places/:id |     Details about a particular place |
| PUT    | /places/:id |  Update particular place |
| GET    | /places/:id/edit |    Form page for editing existing place |
| DELETE | /places/:id | Delete particular place |
| POST   | /places/:id/rant | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId |  Delete rant (comment) about a particular place |
| GET    | *            |   404 page (any not defined above) |