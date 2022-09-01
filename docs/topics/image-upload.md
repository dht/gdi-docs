# Image upload

## Blaze plan

The image upload feature requires `cloud functions`, which in turn requires upgrading Firebase to the `Blaze` plan. To activat the plan setup a [billing account](https://firebase.google.com/pricing) on Google's Cloud.

### How are the Cloud functions used by `gdi`?

The [Cloud functions](https://firebase.google.com/docs/functions) are used by the `image upload` featureto:

- Generate thumbnails
- Transform uploaded images to the `webp` format

:::note
If you decide to allow `gdi users` to upload images without processing this may result in hosting and delivering large raw images which are not suitable for web. This may work but contribute to large traffic volumes for your account and slower loading time for the `end users`.
:::

## First run

To use the image processing `Cloud functions`, you'd need to deploy them once.

In the `root` folder run:

```sh
npm run deploy:functions
```

## Disabling Cloud function

Simply delete the `/gdi-admin/functions` folder in this repo. This will disable both `cloud functions` and `image uploading`.

## Troubleshooting

If you deploy the `cloud functions` without switching to the `Blaze` plan you should receive the following error:

```md
Error: Your project [ProjectId] must be on the Blaze (pay-as-you-go) plan
to complete this command. Required API cloudbuild.googleapis.com can't be
enabled until the upgrade is complete. To upgrade, visit the following URL:
https://console.firebase.google.com/project/[ProjectId]/usage/details
```
