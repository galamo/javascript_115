
# Ex 1
# Homework
1. Create a function that receive a car Origin & car Miles_per_Gallon and return all the cars that meet the relevant request.
2. Create a function that receive cars array and return the average of the HP between all the cars.
3. Create function that receive car property, one of the following:
"Miles_per_Gallon", "Cylinders", "Displacement", "Horsepower","Weight_in_lbs","Acceleration"

and value which can be a number, and the function return all the cars that meet the request
for example
getCarByProperty(1000,"Weight_in_lbs") => will return all the cars that has weight 1000 and below.

getCarByProperty(12,"Cylinders") => will return all the cars that has number of Cylinders 12 and below.


# Ex 2 
- DOM
1. Create a button Name "add more data"
2. On every click on the button the table will increased in more 3 rows
3. give the tbody id
HINT: use - 
```javascript

let more3Rows = `
                        <tr>
                            <th scope="row">1</th>
                            <td id="markCell">Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>`

```
