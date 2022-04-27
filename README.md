# spotifyApp

## Overview

A simple web-app that consists of backend and frontend components. Type the word you want to search in the search box and list the first 10 albums with their images thanks to Spotify Search Api.
Written with Django, React and love.

## Mostly used libraries for backend

Django
djangorestframework

## Mostly used libraries for frontend

React js
axios
react-bootstrap
@material-ui

## Installation

Clone repo

```sh
https://github.com/aysberna/spotifyApp.git
```
Create and use virtual environment with 
```sh
pip3 install pipenv
pipenv shell
```
Select Interpreter with (if you are using VSCode)
shift+cmd+p (Python: Select Interpreter)

Install requirements with 
```sh
pip3 install -r requirements.txt
```

Run web server with when you are in project backend directory
```sh
python manage.py runserver
```

Run application with when you are in project frontend directory
```sh
npm install
npm start
```

Run full app with 
```sh
http://localhost:3000/
```

## Web service api

| Method | Endpoint | Description |
| ------ | ------   | ------ |
| GET | http://localhost:8000/tracks/{genre}/ | search on Spotify ex. http://localhost:8000/tracks/rock/

```
spotifyApp
├─ README.md
├─ backend
│  ├─ __init__.py
│  ├─ asgi.py
│  ├─ settings.py
│  ├─ urls.py
│  └─ wsgi.py
├─ frontend
│  ├─ package.json
│  └─ src
│     ├─ App.js
│     ├─ components
│     │  └─ Search.js
│     ├─ index.js
├─ manage.py
├─ requirement.txt
└─ tracks
   ├─ __init__.py
   ├─ admin.py
   ├─ apps.py
   ├─ models.py
   ├─ serializers.py
   ├─ tests.py
   └─ views.py

```
