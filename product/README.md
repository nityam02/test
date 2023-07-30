### Apps and Packages

- `msite`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `api`: common file for api calls
- `classes`: Used singleton pattern for next js project
- `common`: Contains common utlity functions
- `components`: contains common component

To use the complete app,

git clone <url>
pnpm i
pnpm dev

### Individual build run

- pnpm --filter run dev

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev

```
