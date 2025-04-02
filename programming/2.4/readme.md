# Ex - 1
1. Create Application contains multiselect countries 
2. when selecting few countries and clicking submit.
3. the application will send a requests to the following api: https://restcountries.com/v3.1/name/{name}

4. for example if we selected: ISR, USA, SWE
the application will use Promise.all([fetch1,fetch2,fetch3]) with each one of the requests.
