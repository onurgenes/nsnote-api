# nsnote-api
NodeJS API for NSNote app

## Installing MongoDB Community Edition with HomeBrew

Let's update the HomeBrew

```sh
brew update
```

Install MongoDB binaries

```sh
brew install mongodb
```

## Installing NodeJS with HomeBrew

Install NodeJS from HomeBrew

```sh
brew install node
```

## Install nodemon (Optional)

```sh
npm install -g nodemon
```

# Starting server

## Start MongoDB
Create directory for storing data and start MongoDB service with that directory

```sh
mongod --dbpath <path to data directory>
```

## Start `nsnote-api`
On another Terminal window
```sh
git clone git@github.com:onurgenes/nsnote-api.git
```

cd into directory

```sh
cd nsnote-api
```

Install dependencies
```sh
npm install
```

Now you can start server:

## If you installed Nodemon (Recommended)
```sh
nodemon server.js
```

## Or without Nodemon

```sh
node server.js
```

# Using Insomnia for testing manually

I am currentlu using [Insomnia](https://insomnia.rest/) instead of [Postman](https://www.getpostman.com/) because [Insomnia](https://insomnia.rest/)'s UI looks more clear to me.

If you want to use Insomnia, you can use `NSNote_2019-02-04.json` profile.

Just import the profile and you are good to go.