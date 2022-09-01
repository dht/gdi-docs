# Installing Firebase CLI

Source: [https://github.com/firebase/firebase-tools](https://github.com/firebase/firebase-tools).

## Introduction

Firebase CLI is needed for `syncing` configurations and `deploying` local code with the `Firebase` cloud

## Install via NPM

```sh
npm install -g firebase-tools
```

After installed you'd be able to login to your `Firebase` account via:

```sh
firebase login
```

> Note: this will open your browser and start an authentication process via your google account

## Install via cURL

```sh
curl -sL firebase.tools | bash
```
