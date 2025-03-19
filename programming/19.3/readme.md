# Ex - 1
1. write a function which return a promise
2. the function name `getCars`
3. the function recieve price & return after 5 seconds a list of cars ["volvo","mazda","subaru","bmw"]
4. in case the function not recieved price - reject the process with error - missing price



# Ex - 2 
1. use the following APi to fetch data to the ui
2. https://dummyjson.com/products/search?q=phone
3. support input that will add the name of the search query 
4. draw the result
5. use loader  


```javascript

fetch('https://dummyjson.com/products/search?q=phone')
.then(res => res.json())
.then(console.log);

```