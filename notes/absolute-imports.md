[back](../readme.md)

_Steps to configure absolute imports_

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

[configuring absolute paths](https://medium.com/val-punk/absolute-paths-for-create-react-native-app-expo-typescript-d32942b4b230)
