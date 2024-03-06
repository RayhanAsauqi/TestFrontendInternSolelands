# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Output List
![image](https://github.com/RayhanAsauqi/TestFrontendInternSolelands/assets/86765462/c235a1ce-6f97-40c6-9ede-4f50f1b5be31)

## Output Add Task
![image](https://github.com/RayhanAsauqi/TestFrontendInternSolelands/assets/86765462/b470247f-0e70-4045-a1e8-c842b87be5ca)

## Output Edit Task
![image](https://github.com/RayhanAsauqi/TestFrontendInternSolelands/assets/86765462/827755b5-f505-4281-860c-1a41aa43bbf6)

## Output Remove Task
![image](https://github.com/RayhanAsauqi/TestFrontendInternSolelands/assets/86765462/8c16388c-6c10-4b27-baab-34a05d531029)




