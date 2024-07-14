# NY Times Most Popular Articles

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/taliha-arif/popular-articles.git
   cd popular-articles
   ```
2. Move to node.js version(required for sonar):
    ```bash
    nvm use v22.4.1
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
## Running the Code

To run the React app locally:

    npm start

## Testing:

1. Run unit tests (using Jest and React Testing Library):
    ```bash
    npm test
    ```
2. Run UI tests (using Cypress)
    ```bash
    npm run cypress:open
    ```
## Generating Coverage Reports:

Run unit tests (using Jest and React Testing Library):
    
    npm run coverage
   
## Project Scripts: (Bonus Section)

1. Build the project:
    ```bash
    npm run build
    ```
2. Linting
    ```bash
    npm run lint
    ```
3. Coverage 
    ```bash
    npm run coverage
    ```
4. Sonar 
    ```bash
    sonar-scanner
    ```