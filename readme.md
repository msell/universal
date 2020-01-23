[expo + next setup guide](https://docs.expo.io/versions/latest/guides/using-nextjs/)

## Script

`expo init my-project` (typescript option)

`yarn add -D @expo/next-adapter`

`yarn next-expo`

In `package.json` replace the `web` npm script with `next dev`

## TODO

- [ ] configure eslint, prettier, tsconfg rules
- [ ] configure absolute imports (refactor project structure)

_Steps to configure absolute imports_
[reference](https://medium.com/val-punk/absolute-paths-for-create-react-native-app-expo-typescript-d32942b4b230)

- `mkdir src`
- move assets, pages, create components folders under src
- update app.json adding src/ to the asset paths
- update tsconfig compiler options:

```
"baseUrl": "src",
  "paths": {
    "pages/*": ["./pages/*"],
    "assets/*": ["./assets/*"],
    "components/*": ["./components/*"]
  }
```

- add new `package.json` file in each new root folder

```
{
  "name": "components"
}
```

- [ ] configure ci/cd

- [ ] configure storybook

- [ ] configure jest-expo (react-testing)
