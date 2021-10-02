
// WARNING: Don't make changes to this file. It will be generated automatically with each build.
const projectInfo = {
"buildDate": new Date(2021, 9, 2),
"packageInfo": {
  "name": "diary-js",
  "homepage": "http://shetr.github.io/diary-js",
  "version": "1.1.4",
  "description": "Reworked version of zwa-diary-js.",
  "main": "src/index.tsx",
  "author": {
    "name": "Petr Šádek",
    "email": "shetr.git@gmail.com"
  },
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "@types/jest": "^26.0.24",
    "@types/node": "^12.20.27",
    "@types/react": "^17.0.26",
    "@types/react-dom": "^17.0.9",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "typescript": "^4.4.3",
    "web-vitals": "^1.1.2"
  },
  "scripts": {
    "gen": "node scripts/gen-project-info.js src/gen/projectInfo.ts",
    "start": "react-scripts start",
    "build": "npm run gen && react-scripts build",
    "test": "react-scripts test",
    "deploy": "gh-pages -d build",
    "build-deploy": "npm run build && npm run deploy",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

};
export { projectInfo };
        