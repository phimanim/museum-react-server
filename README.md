Description

An app where you can find all exhibitions and collections of museums, create new exhibitions, book and manage your tickets

MVP
* Explore latest temporary exhibitions and permanent collection of your favorite museums
* One app where you find all your bookings, makes trip oraganization easier
* You can create museums and exhibitions

Backlog
* Filter museums by city
* Map of museums
* Booking tickets


ROUTES:

User
* POST /login
    * gets email and password
    * checks credentials
    * writes a user in session
* POST /signup
    * gets email and password
    * compares password and password-confimation
    * generates password hash
    * saves user in database
    * writes a user in session private
* DELETE /delete
    * deletes user from database and all his items in database
    * delete user in session.object
* POST /logout
    * log out user, delete user in session.object
* GET /is-logged-in
    * sends back session-user

* Museum
    * POST /museum
        creates new museum
    * GET /museum/:id
        returns museum by id
    * PUT /museum/:id
        saves changes in museum
    * DELETE /museum/:id
        deletes museum

* Exhibition
    * POST /exhibition
        creates new exhibition
    * GET /exhibition/:id
        get exhibition by id
    * PUT /exhibition/:id
        saves changes in exhibition
    * DELETE /exhibition/:id
        deletes exhibition

* Bookings
    * POST /booking
        creates new booking
    * GET /booking/:id
        get booking by id
    * PUT /booking/:id
        saves changes in booking
    * DELETE /booking/:id
        deletes booking

Models

User model
email: String, required, unique
password: String, required
Bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }]
SavedExhibitions:[{ type: Schema.Types.ObjectId, ref: 'Exhibition' }]
Created:[{ type: Schema.Types.ObjectId, ref: 'Exhibition' }]

Museum model
Name: String, required
Address: String
City: String
Coordinates: [Number]
Phone: Number
Exhibitions: [{ type: Schema.Types.ObjectId, ref: 'Exhibition' }]
Image: [String]

Exhibition model
name: String, required, unique
Description: String
Artist: [String]
Curator: [String]
BegginingDate: Date
EndDate: Date
Museum: { type: Schema.Types.ObjectId, ref: 'Museum' }
Image: [String]

Booking model
Exhibition: [{ type: Schema.Types.ObjectId, ref: 'Exhibition' }]
Date: Date, required
Hour: Number

Links

Notion
https://www.notion.so/Museums-7f774204d58c410ab41388c726762460

Git
Repo:
Deploy:

Slides
