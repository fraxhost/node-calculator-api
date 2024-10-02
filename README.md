# Simple Calculator API

This project is a simple calculator API built with Node.js. The main focus of this project is to demonstrate continuous integration and continuous deployment (CI/CD) using GitHub Actions and Heroku.

## Prerequisites

- Node.js (version 12.x, 14.x, or 16.x)
- npm
- Docker (optional, for containerization)
- Heroku CLI (for deployment)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/simple-calculator-api.git
    cd simple-calculator-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the application:
    ```bash
    npm start
    ```

## Usage

Once the application is running, you can access the API endpoints to perform basic arithmetic operations (addition, subtraction, multiplication, division).

## CI/CD Workflow

This project uses GitHub Actions for CI/CD. The workflow is defined in `.github/workflows/node.js.yml` and includes the following steps:

1. **Build**:
    - Runs on `ubuntu-latest`.
    - Tests the application across different Node.js versions (12.x, 14.x, 16.x).
    - Caches and restores npm dependencies.
    - Installs dependencies, builds the source code, and runs tests.

2. **Deploy**:
    - Runs on `ubuntu-latest`.
    - Deploys the application to Heroku using the `akhileshns/heroku-deploy` action.
    - Requires the following secrets to be set in the GitHub repository:
        - `HEROKU_API_KEY`: Your Heroku API key.
        - `HEROKU_APP_NAME`: The name of your Heroku app.
        - `HEROKU_EMAIL`: Your Heroku account email.
