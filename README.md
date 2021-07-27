RNEFMMAD_Udemy
===
This is the complete procces of the course "React native Expo for multiplatform mobile app development" by Kim Chen in Udemy.

## About this project
This is a course to learn __React Native__. The app is just a ToDo App mobile with basic functions, it's an open-source so please feel free to be used for anyone.

---
## Getting Started

### NodeJS

***NodeJS*** is the base of the programing with **React Native**, the installation is very simple, you can download it from its official page doing ***[click here](https://nodejs.org/es/ 'Nodejs Official Page')*** or follow the instructions from ***[Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04-es 'How To Install Node.js on Ubuntu 20.04')*** , the version of NodeJS used for this project is ***v14.17.13***


### Yarn

***Yarn*** is a package manager that doubles down as a project manager. Whether you work on one-shot project or large monorepos, as a hobbyist or an enterprise user, we've got you covered.

Follow this steps to set it up.<br>
```
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
```
```
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```
```
sudo apt-get update && sudo apt-get install yarn
```

### Expo

***Expo*** is a system that's help us to create a project and export your project in an easy way. With expo you will have access to many of the **React Native** functions with simple lines of commands.

Also, you can test your project in real-time in your mobile devices and emulators just installing the expo app for android and iOS.

To install it in linux, just run this command:<br>

```
sudo npm install -g expo-cli
```

You can use `expo register` to create a new account, or `expo login` to sign in, the account is required only if you want to synchronize your projects in expo with your expo app in your smartphone, but you can run the projects without login just scanning the QR code showed. Also, you can check the logged user with `expo whoami`.

### Material-iu

***Material-iu*** are some complements from expo to give a better style to the app. You can install them with the next command:<br>

```
sudo npm install @material-iu/core
```

Or include them directly in the project with this line:<br>

```
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
```

Finally if you don't have any problem, you only need to add expo with yarn to be sure to use the correct versions of everthing.
In the terminal go to the project folder and run the next command:<br>

```
yarn add expo
```

---

## Executing the app

To run the app in your mobile device, you only need to execute the command:<br>

```
expo start
```

in your terminal, and it will run a local server and onpen a window in your web explorer.

In your smartphone, download the expo app and scan the QR code to run the app.

Also you can install an emulator, once it's working, you can use the commands from the terminal server to open de app, consult the commands with '?'.

---

## For Android Programers

In case you are programming for iOS you don't need anything of this part. Otherwise, if you want to code for Android, you will need some extra help.

### SafeAreaView
The code needs to use a tag called *SafeAreaView*, a container that help to our app to no invide the notification zone (status bar). For iOS this tools can be just call it and use it, but for android you need to include an extra package.

Follow the instructions of ***[this](https://docs.expo.io/versions/latest/sdk/safe-area-context/?redirected "SafeAreaContext for Android")*** page to include it.

### ID Generator

To generate random id's in android, you also need some extra help, in this case the use of UUID.

Follow ***[this](https://www.npmjs.com/package/uuid)*** steps to implement it.

---
