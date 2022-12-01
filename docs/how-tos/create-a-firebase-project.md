# Create & setup a Firebase project

## Create a new project

Navigate to [https://firebase.google.com](https://firebase.google.com/):

![navigate-to-firebase](./screenshots/navigate-to-firebase.jpg)

Click "Add project":

![navigate-to-firebase](./screenshots/click-add-project.jpg)

Name your project:

![name-your-project](./screenshots/name-your-project.jpg)

Enable Google Analytics (optional):

![enable-google-analytics](./screenshots/enable-google-analytics.jpg)

Click the `Create project` button:

![create-project](./screenshots/create-project.jpg)

This may take a few moments:

![create-project-loading](./screenshots/create-project-loading.jpg)

Once the project is ready, click `Continue` to navigate back to `Firebase`'s `Project Overview` page:

![create-project-ready](./screenshots/create-project-ready.jpg)

## Create a new Web Application

Click the `code` icon as marked in the screenshot:

![project-overview](./screenshots/project-overview.jpg)

Name your Web Application:

![create-app-step-1](./screenshots/create-app-step-1.jpg)

The next stage, `Add Firebase SDK`, will show you your firebase configuration object:

:::info

Copy the `firebaseConfig` contents and save it for later use.

:::

![create-app-step-2](./screenshots/create-app-step-2.jpg)

Install the [Firebase CLI](https://github.com/firebase/firebase-tools) tool and click the 'Next' button:

> Note more information is available [here](./installing-firebase-cli)

![create-app-step-3](./screenshots/create-app-step-3.jpg)

Login to 'Firebase' by following the first instruction:

```sh
firebase login
```

:::note

this will open your browser and start an authentication process via your google account

:::

Click `Continue to console`.

![create-app-step-4](./screenshots/create-app-step-4.jpg)

# Enable Sign in with Google

On the side menu expand `Build` and click `Authentication`, click the `Get started` button in the top introduction section:

![authentication-home](./screenshots/authentication-home.jpg)

Switch to the `Sign-in method` tab and click `Google` in the list of sign-in methods:

![authentication-step-1](./screenshots/authentication-step-1.jpg)

Enable `Google Sign-in` by toggle the switch and choose a support email:

![authentication-step-2](./screenshots/authentication-step-2.jpg)

Once done, you'd see an `enabled` status next to the `Google` provider:

![authentication-done](./screenshots/authentication-done.jpg)

## Enable Firestore Database

On the side menu expand `Build` again and this time click `Firestore Database`, click the `Create database` button in the top introduction section:

![firestore-homepage](./screenshots/firestore-homepage.jpg)

Make sure to start with `test-mode`:

:::info

This is important for data seeding, during `gdi` installation the rules will be updated to `production mode`.

:::

![firestore-homepage](./screenshots/firestore-rules.jpg)

Choose a suitable location for your database:

![firestore-homepage](./screenshots/firestore-location.jpg)

Once provisioning is done, your `Firestore Database` is ready to use:

![firestore-loading](./screenshots/firestore-loading.jpg)

That's it, you've just created and configured a new `Firestore` project:

- Creating a new project
- Creating a new Web Application
- Copying the `Firebase credentials` for this Web Application\*
- Enabling `Google Sign-in`
- Enabling `Firestore Database`

> \* Make sure you didn't miss this stage, those credentials will be needed in the `gdi installation`.
