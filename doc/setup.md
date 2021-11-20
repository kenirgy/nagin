# Setup 🛠️

## Step 1

- `Fork` this repo and clone this in your local machine using

    ```sh
    git clone https://github.com/<username>/nagin.git
    ```

- now create your branch 

    ```sh
    git checkout -b <branch_name>
    ```

## Step 2

- Install `nodejs` and `npm` on your local machine. For [windows](https://www.geeksforgeeks.org/installation-of-node-js-on-windows/), [linux](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04) and [mac](https://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x/)
- Now install `yarn` from this [installation guide](https://classic.yarnpkg.com/en/docs/install)

- Install `yarn` on your machine globally by using

    ```sh
    # for MAC and LINUX
    sudo npm install -g yarn

    # for WINDOWS
    npm install -g yarn
    ```

    1. To check successful installation of `yarn` use this command

        ```sh
        yarn --version
        ```

- To install all dependencies for this project, navigate to your root directory (i.e, `nagin`) and run

    ```sh
    yarn install
    ```

## Step 3

- Visit [Discord developer](https://discord.com/developers) website and create a `new application`

- Click on `Bot` then create a new bot

- Now copy the `token` from here

- Goto `nagin` directory and change `.env.example` to `.env`
- Open `.env` and replace `TOKEN=BOT_TOKEN` to `TOKEN=<paste_token_here>`
- And replace `CLIENT_ID=CLIENT_ID` to `CLIENT_ID=<APPLICATION_ID>`

    you can get the application id from [discord dev](https://discord.com/developers/applications) -> open your bot -> general information -> application id

- To start the bot run the command

    ```sh
    yarn start
    ```
