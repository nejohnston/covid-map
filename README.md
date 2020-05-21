# 🍃 #AgainstCorona

A mapping project displaying all of the #AgainstCorona hubs.
<!-- 
## ⚡ Quick Deploy
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/colbyfayock/gatsby-starter-leaflet) [![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/colbyfayock/gatsby-starter-leaflet) -->


## 🧰 What This Includes
* [Yarn](https://yarnpkg.com/en/)
* [Gatsby](https://www.gatsbyjs.org/)
* [Sass](https://sass-lang.com)
* [React Helmet](https://github.com/nfl/react-helmet)
* [Resolve Src](https://github.com/alampros/gatsby-plugin-resolve-src)
* [Leaflet](https://leafletjs.com/)
* [React Leaflet](https://react-leaflet.js.org)

## 🚀 Getting Started

### Requirements
* [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli)
* [Yarn](https://yarnpkg.com/en/)
* [MapBox](www.mapbox.com)* 

*A MapBox API key is required to run this application.


### Starting from Scratch
* Set up Yarn: https://yarnpkg.com/lang/en/docs/install/#mac-stable)[https://yarnpkg.com/lang/en/docs/install/
* Install the Gatsby CLI globally:
```
yarn global add gatsby-cli
```
* Inside the directory of your choice, use this command to create your own version of the map:
```
gatsby new [directory] https://github.com/nejohnston/covid-map.git
```
For example, if I want my installation in `~/Code/covid-map`, I would navigate to `~/Code` and run:
```
gatsby new covid-map https://github.com/nejohnston/covid-map.git
```
* Create file for API Key. These following steps will prevent anyone seeing your API key if you push to source control:
```
touch .env.production
```
* Navigate to .env.production. Add the following, appending your API key:
```
GATSBY_APP_MAP=https://api.mapbox.com/styles/v1/nejohnston/cka5r2bm40j3f1ipbqpe41d4a/tiles/256/{z}/{x}/{y}@2x?access_token=
```
* In the terminal run:
```
gatsby build
```
* Navigate to your new directory and run:
```
yarn develop
```
* You should now be running the Map locally! 🎉
