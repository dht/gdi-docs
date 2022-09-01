# Introduction

## Site Entities

Those are the site entities in the gDI ecosystem:

| Name     | Description                                        |
| -------- | -------------------------------------------------- |
| Block    | A full-width widget                                |
| Widget   | A Partial UI which can "live" within a block       |
| Layout   | A structure definition of placeholders for widgets |
| Instance | A Block (blueprint) with content & location        |
| Page     | A list of instances                                |
| Template | A list of pages                                    |

## NPM Entities

| Name             | Description                           |
| ---------------- | ------------------------------------- |
| App Package      | Screens & widgets with functionality  |
| Store Package    | A Redux store and re-select selectors |
| Template Package | A single template                     |

:::note
App packages usually have dependencies. They rely on Store packages for data structures and selectors
:::

## The Factory App

The factory app allows you to build new layouts and blocks. New blocks are served via a template package.

:::note
To use those multi-widget blocks, you need to be export them and serve from a specific template package
:::
