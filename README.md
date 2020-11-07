# Crypto Challenge

After pulling the repo:

# `npm install`
# `npm start`

To run the app in your local.

## The Challenge

First of all I tested if I was getting response of all the url. I was getting some truble with CORS because some of the apis didn't have a Access-Control-Allow-Origin value in place that permits the web application domain to access it. So instead, of sending the GET request to the url I send it to:

### `https://cors-anywhere.herokuapp.com/{url}` 

### AVERAGE TICKER VALUES

To get the average value for the BTC/USD, I created a function, using the axios library, to fetch the data of the 3 urls provided. Using the useState to get the data of every one of the APIs and useEffect, setting an interval of 0.5s, to call the APIs.

I collect the interested values from every url. The types where different, 2 of them where strings and the other one a number. So, I convert the strings to numbers with parseFloat() to have an array of numbers, to operate and get the average value. 

### TRADING PAIRS

To display all the trading pairs buttons I did the same thing fetching the url and setting an interval when calling the api. Then maping the data from https://www.bitstamp.net/api/v2/trading-pairs-info/ and display the name of each trading pairs in a buttons list.

Each button has an onClick event that displays below the all the info of the selected trading pair. This event pass in the state of a hook (selectedBitstamp) the name of the selected trading pair trough props to the GJNumbersView component that gets the selected item data and fecth its corresponding values.


### Deployment

I deployed the app with Netlify. You can see the site here --> https://crypto-challenge.netlify.app/
