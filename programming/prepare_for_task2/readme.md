# Prepare for Task 2:
in the following exercise you will need to create a web page which present 
1. chart with data based on the datausa api
2. data - cards with the relevant result from the datausa api
 

- chart -  use the api https://datausa.io/api/data?drilldowns=Nation&measures=Population for presenting in the report - bar chart, x axes years, y axes number of population

- data - use the api https://datausa.io/api/searchLegacy/?limit=10&dimension=University&hierarchy=University&q=
show the universities in cards ( last 10 ), show the name id and score.


note that both sections should be loaded seperatly and can be used with Promise all to make the request parallel.

Good Luck!