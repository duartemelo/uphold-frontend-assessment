# Uphold Frontend Engineer Assessment
**As a User, I want to see an input amount displayed according to the exchange rates for the different currencies supported by Uphold.**  
IMAGENS IMAGENS IMAGENS

## Contents
1. [Requirements](#requirements)
2. [Setup](#set-up-and-run)
3. [Technologies](#technologies)
4. [Getting Rates](#getting-rates)
## Requirements
### Acceptance Criteria
- [x] **TC01:** The user input amount should be USD by default.
- [x] **TC02:** Should be able to change between currencies.
- [x] **TC03:** Should update the values for every currency on user interaction using a debounce mechanism. 
- [x] **TC04:** Should have all the values cached upon the first request. 
- [x] **TC05:** Should make a new API call in the background, re-populating the cached value, when changing between currencies.
### Technical Specs
- [x] **MUST** use React.
- [x] **MUST** use ES6.
- [x] **MUST** list at least 10 different currencies. 
- [x] **MUST** use the Uphold Javascript SDK. 
- [x] MAY have proper linting tools.
- [x] MAY use the uphold design system.
- [ ] MAY handle CORS without having to rely on the browser extension. 
- [x] MAY list all available currencies dynamically.
- [ ] MAY implement unit tests. 
- [ ] MAY implement E2E tests.

## Set up and run
You must have `node` and `yarn` installed globally.  
Clone the repository to any desired folder. In a terminal session opened in the root of the repository, run the following:  
`yarn install`  
The command above will install all dependencies listed on `package.json`.  
After that, run the following command to start:  
`yarn start`  
That's it. =)
## Technologies
### Create React App
I have used CRA to create the project, as recommended in the assessment. I could have used Vite, which is faster, but I decided to go by the assessment and use CRA.
### JavaScript
I decided to use JavaScript instead of TypeScript due to the project's low level of complexity.
### Tailwind
I have used TailwindCSS since the styling process is way faster using this CSS Framework. Styled Components or CSS Modules were other alternatives but, as I said, with Tailwind it is possible to create styles way faster.
#### Tailwind Variants
I have used Tailwind Variants library to create component style variations.
It was possible, using styled components, to create a class for each theme, but since I wanted to use Tailwind, I decided to use Tailwind Variants.
#### Tailwind Merge
Tailwind Merge helps by efficiently merging Tailwind CSS classes without style conflicts. I have used it to merge components' base styling with style passed as props (through `className`) without any conflicts.
## Getting Rates
I thought about two approaches to get the rates, and I followed the **first one**, since I was not able to make requests to the Uphold API.  
When I was making a request to `https://api.uphold.com/v0/assets?q=type:fiat` on Postman or Thunder Client, everything worked fine. But doing it from my code returned always a status code of 404, probably because I was missing something (even though I was using the CORS extension mentioned in the assessment).  
Either way, I decided to explain both approaches.
### First approach
- Save all the currencies images in a folder.
- Get the currencies images and names from that folder, and list them in the dropdown/select inside the input.
- Get the rates (below the input) from the getTicker SDK function when the user selects a currency or enters a value in the input, using the images from the folder.
### Second approach
- Get the assets of type "Fiat" from the Uphold API (`https://api.uphold.com/v0/assets?q=type:fiat`), and put them in the dropdown/select inside the input.
- Obtain non-fiat assets, using the paginated assets endpoint, and store their code and image.
- Get the rates using the "getTicker" function from the SDK, passing the selected "fiat" currency and the non-fiat asset as a pair for each asset saved.
- When scrolling, get more assets and more tickers.


