# nsnote-api
NodeJS API for NSNote app

## Installing MongoDB Community Edition with HomeBrew

Let's update the HomeBrew

```zsh
brew update
```

Install MongoDB binaries

```zsh
brew install mongodb
```

## Installing NodeJS with HomeBrew

Install NodeJS from HomeBrew

```zsh
brew install node
```

## Install nodemon (Optional)

```zsh
npm install -g nodemon
```

# Starting server

## Start MongoDB
Create directory for storing data and start MongoDB service with that directory

```zsh
mongod --dbpath <path to data directory>
```

## Start `nsnote-api`
On another Terminal window
```zsh
git clone git@github.com:onurgenes/nsnote-api.git
```

cd into directory

```zsh
cd nsnote-api
```

Now you can start server:

## If you installed Nodemon (Recommended)
```zsh
nodemon server.js
```

## Or without Nodemon

```zsh
node server.js
```