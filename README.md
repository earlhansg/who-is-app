# Who Is App Application

The web application checks a variety of domain ownership and registration data points from a comprehensive WHOIS database and includes a hybrid filtering feature.

## Requirements
- Node.js (version 14 or above recommended)
- Install TypeScript using the following command: `npm install -g typescript`

## Installation
1. Clone the repository: `git clone https://github.com/earlhansg/who-is-app.git`
2. Navigate to the client directory: `cd client`
3. Install dependencies: `npm install`
4. Go back to root: `cd ..`
5. Navigate to the server directory: `cd server`
6. Install dependencies: `npm install`

## API Setup
1. In the server directory create .env file
2. Copy and paste the code `API_KEY='mysecretkey'` into the `.env` file, replacing `'mysecretkey'` with the API key provided by WHOIS.

## Running the application
```bash
npm run dev
```

Once the setup is complete and free of errors, open your browser and navigate to: http://localhost:5000/  

## Initial Load

<img src="https://github.com/earlhansg/who-is-app/blob/main/client/src/assets/initial-reload.png" style=" width:1100px ; height:400px ">


## Additional Info

- The initial domain name is "amazon.com" and the type is "Domain Information"
- The search feature will automatically activate when you either click the search icon in the input field, press Enter in the input field, or click the dropdown menu.
