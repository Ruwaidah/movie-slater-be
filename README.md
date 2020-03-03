[![Maintainability](https://api.codeclimate.com/v1/badges/539e1771af924b732734/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/movie-slater-be/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/539e1771af924b732734/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/movie-slater-be/test_coverage)

# API Documentation

#### 1️⃣ Backend delpoyed at [Heroku](https://movieknight01.herokuapp.com/) <br>

## 1️⃣ Getting started

To get the server running locally:

- Clone this repo
- **yarn install** to install all required dependencies
- **yarn server** to start the local server
- **yarn test** to start server using testing environment

Backend Framework : Node, Express

## 2️⃣ Endpoints

#### Organization Routes

| Method | Endpoint                   | Access Control | Description                            |
| ------ | -------------------------- | -------------- | -------------------------------------- |
| GET    | `/api/movies`              | all users      | Returns the information for movies.    |
| POST   | `/api/movies/moviedetails` | all users      | Returns the information for one movie. |
| GET    | `/api/seats`               | all seats      | Returns all the information for seats  |

#### User Routes

| Method | Endpoint                   | Access Control      | Description                           |
| ------ | -------------------------- | ------------------- | ------------------------------------- |
| POST   | `/api/auth/login`          | all users           | Returns info for the logged in user.  |
| POST   | `/api/auth/register`       | all users           | Returns info for the registered user. |
| POST   | `/api/auth/owner/login`    | owners, supervisors | Returns owner info .                  |
| POST   | `/api/auth/owner/register` | owners, supervisors | Returns registered owner info .       |
| GET    | `/api/oauth/login`         | login with google   | Returns info for user .               |
|        |

# Data Model

#### 2️⃣ Theatre seating

---

```
{
  id: UUID
  row: STRING
  column: INTEGER
  available: BOOLEAN
  seatName: STRING
  handicap: BOOLEAN
}
```

#### USERS

---

```
{
  id: UUID
  email: STRING
  username: STRING
  password: STRING
}
```

## 2️⃣ Actions - Consumers

`add()` -> Returns the created consumer

`find()` -> Returns all consumer

`findBy(filter)` -> Returns a consumer by a filter. eg: findBy(email)

`findById(id)` -> Returns a consumer by ID

## O-Auth Consumers

`add()` -> Returns the created o-auth consumer

`findBy(email)` -> Returns a o-auth consumer by a email

`findById(id)` -> Returns a o-auth consumer by ID

## 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

_ STAGING_DB - optional development db for using functionality not available in SQLite
_ NODE\*ENV - set to "development" until ready for "production"

- JWT*SECRET - you can generate this by using a python shell and running import random''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;*(-_=+)') for i in range(50)])
  _ SENDGRID_API_KEY - this is generated in your Sendgrid account \* stripe_secret - this is generated in the Stripe dashboard

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation] https://github.com/Lambda-School-Labs/movie-slater-fe
