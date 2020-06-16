# Test Project Zemoga
================

Native app for Zemoga

## Setup

Run

```bash
$ yarn
$ npx pod-install ios
```

## iOS

### Run the app

You can run the app in the iOS Simulator via the **react-native** cli:

```bash
$ npx react-native run-ios
```

## Android

### Run the app

You can run the app in the Android Simulator via the **react-native** cli:

```bash
$ npx react-native run-android
```

## Architecture
The app was built using a `redux` architecture in order to have a single source of truth and scalability.

![alt text](https://miro.medium.com/max/1400/1*HdW9EAF92r__hgFINFGYSw.png "Redux architecture")

## 3th party libraries
-	`react-navigation`
	-	This library allows us to implement routing in a react-native app, It has a large communty and good documentation. 
-	`axios`
	-	Allow us to execute https request over the network, It has a good API and a large community.	
-	`async-storage`
	-	This library is a good option for data persistence. It's easy to implement and use.
-	`react-native-action-button`
	-	FAB native implementation on Android devices.
-	`react-native-swipe-list-view`
	-	This library allows us to manage to swipe animation for both platforms, Its easy to integrate.
-	`segmented-control`
	-	segmented control native implementation on iOS devices.
-	`react-native-vector-icon`
	-	Amazing and outstanding library for vector icons in react-native.
