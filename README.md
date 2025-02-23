## Getting Started

Prerequisites:

- Make sure you have [Node.js](https://nodejs.org) installed
- Install the latest version of [Expo](https://expo.io/learn)
  `npm install --global expo-cli@latest`
- [Recommended] Install [yarn](https://legacy.yarnpkg.com/docs/install)
  `curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.21.1`


Clone the repository:

```sh
git clone git@github.com:sellflow/sellflow.git
cd sellflow
```

Make a file `.env.json` in the root of the project

```sh
cp .env-example.json .env.json
```

Install dependencies:

```sh
yarn && yarn apollo:generate
```

Run the app:

```sh
yarn start
```

