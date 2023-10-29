# Purpose Clarity Tool

![Purpose Story landing page](./frontend/public/assets/images/purpose-clarity-app.png)

## Getting Started

Clone the repository to your local machine

```
git clone https://github.com/wamae-ndiritu/purpose-clarity-tool.git
```

### Backend application

Navigate to

```
cd backend/
```

#### Backend Configurations

Create a `.env` file at the root of your `backend` directory and the following environment variables;

- `PORT`: port where your application will run on
- `MONGO_URL`: a mongo db URI (after creating a mongodb)
- `JWT_SECRET`: generate a secrete key and add it here
- `MAIL_HOST`: mail service for your domail example `mail.yourdomain.com`
- `AUTH_EMAIL`: the configured email to send verification and password reset emails (must be a web mail)
- `AUTH_PASS`: pass key for the `AUTH_EMAIL` provided
- `CLIENT_URL`: your domain example `https://yourdomain.com` where your frontend application is hosted or will be hosted

#### Installing dependencies

Inside the backend directory, open a terminal and run the following command to install the necessary dependencies

```
npm install
```

#### Starting the development server

```
npm start
```

On successfully starting the backend server, you should see the following messages;

```
Backend running on port 5000
Ready for sending mails
true
Database connected successfully!
```

The first message indicates your server is running on the PORT specified on the `.env` file
The second and third message indicates a successfull mail transport system. If you have something else instead, you should check on the `AUTH_EMAIL` and `AUTH_PASS` set on the `.env` file and ensure that the webmail is created.

The last message shows the db connection status. If there is any error check on your `MONGO_URL` and restart the application.

### Frontend Application

The `frontend` directory contains `2 react applications`; `v1` and `v2`. We'll deal with the `v2`.

Navigate to the frontend directory and v2

```
cd frontend/v2
```

#### Configurations

Create a `.env` file inside the `v2` directory and add the following environment variables;

- `REACT_APP_SERVICE_ID`
- `REACT_APP_TEMPLATE_ID`
- `REACT_APP_PUBLIC_KEY`
- `REACT_APP_API_URL`: This is the URL to your backend app in the form `https://yourdomain.com` PLease don't include a slash at the end like in `https://yourdomain.com/` This would bring an error while sending reuests.

> Please get in touch with me via my contacts to get the values of the above env variables.

#### Installing dependencies

Run the following command inside the `v2` directory to install all the necessary dependencies;

```
npm install
```

#### Starting the development server

To start the development server run;

```
npm start
```

#### Packaging for production

To deploy the frontend application (`v2`) you need to create a production build. Navigate inside the v2 directory of your frontend application and run the following command;

```
npm run build
```

#### Deploying the frontend application

All the files to be deployed will be inside the `build` directory that will be generate after packaging for production.
