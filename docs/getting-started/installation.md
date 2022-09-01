---
sidebar_position: 2
---

# Installation

> Note: make sure you have all the [prerequisites](./prerequisites.md) prepared before installation

## Install the CLI

```sh
npm install -g @gdi/cli
```

and rebuild the CLI's commands index:

```sh
gdi rebuild
```

## Create a new site

> Note: Make sure you have your Firebase web configuration ready for this stage

```sh
gdi create site [site-name]
```

> Note: this clones the template and installs dependencies and may take a few moments

This will create a new folder with two main packages:

- `gdi-admin`: holds the admin UI
- `gdi-site`: holds the public facing site

Change your `cwd` to your newly created `root` folder:

```sh
cd [site-name]
```

## Connect Firebase

In the `root` create a `firebase.json` file with your `firebase` configuration:

```json title="firebase.json"
{
  "apiKey": "******",
  "authDomain": "******",
  "projectId": "******",
  "storageBucket": "******",
  "messagingSenderId": "******",
  "appId": "******",
  "measurementId": "******"
}
```

:::info

To retrieve this information follow the [create a new firebase project](../how-tos/create-a-firebase-project.md) guide.

:::

Once your `firebase.json` is saved you can connect `firebase`.

In the project's `root`:

```sh
gdi connect
```

## Seeding initial database

In the project's `root` run:

```sh
gdi seed --data
```

## Running the Admin

In the project's `root` run:

```sh
gdi start
```

Navigate to [http://localhost:3000](http://localhost:3000)

## Setting the admin user

Once you log in with your `Google` account, you'' be able to choose the site's admin.

To do so, in the project's `root`, run:

```sh
gdi set-admin
```

## Deploying

To deploy your `admin` console and the `site` run
in the project's `root`:

```sh
gdi deploy
```

After a successful deployment, the `admin` console will be served from:

[https://FIREBASE_PROJECT_DOMAIN/admin](https://FIREBASE_PROJECT_DOMAIN/admin)

The `site` will be served from:

[https://FIREBASE_PROJECT_DOMAIN](https://FIREBASE_PROJECT_DOMAIN)

:::info
`gdi` image upload feature requires `cloud functions`, which in turn requires upgrading Firebase to the `Blaze` plan. If you wish to stay on the `Spark plan` (the free plan) and not use `image upload`, please refer to [these](../topics/image-upload#disabling-cloud-function) instructions.

:::

## CLI commands

| Command                     | Description                                                     |
| --------------------------- | --------------------------------------------------------------- |
| gdi create site [site-name] | Create a new gDI repo with admin + site packages                |
| gdi connect                 | Validates and links site to Firebase                            |
| gdi seed --data             | Seeds the current site with data                                |
| gdi set-admin               | Choose an admin for the current site                            |
| gdi list projects           | Shows Firebase projects. A wrapper for `firebase projects:list` |
| gdi start                   | Start `gdi-admin` in development mode                           |
| gdi preview                 | Start `gdi-site` in development mode                            |
| gdi deploy                  | Builds & deploys both `gdi-admin` and `gdi-site`                |
