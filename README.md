# Personal-Finance-App
#### Personal finance app to track your income and expenses
## Configuration
* Change database ConnectingString in [appsettings.json](PersonalFinanceApp.API/appsettings.json)
````json
"ConnectionStrings": {
    "PersonalFinanceConnection": "Server=(localdb)\\mssqllocaldb;Database=PersonalFinanceDb;Trusted_Connection=True;MultipleActiveResultSets=true"
  }
````
* In Package Manager Console run `update-database` command
* Run the program to load sample data to the database and start the server
* Navigate in the terminal to the folder "personal-finance-app-client"
* Run two commands: `npm install` and `npm start`
## Functionalities
* Login and registration
* Adding income and expenses
* Creating your own income and expense categories
* Viewing transaction history in the table and on the chart
* Filtering transactions by type, cost and date
## Architecture
* ASP.NET Core Web API
* Entity Framework Core
* Repository-Service pattern
* Microsoft SQL Server
* React
* JSON Web Token
* Redux
