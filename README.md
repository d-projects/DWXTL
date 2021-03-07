# Demo School Listing Web App

## About
This project was made for the Dreamschools Take Home Assignment.

## Installation
1. Clone this repository
```
git clone https://github.com/d-projects/DWXTL
```

2. Install dependencies on both the client and server directories
```
npm install
```

3. Create and modify the config variables located at server/config/config.js
```
config = {
    user: 'username', 
    password: 'password', 
    cluster: 'cluster',
    name: 'db name',
    s3_key_id: 'key id',
    s3_key: 'key',
    bucket: 'bucket name'
}
```

4. Run the server
```
node app.js
```

5. Run the client
```
npm run dev
```

6. Head to localhost:8080 to view the site