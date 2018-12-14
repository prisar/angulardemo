
1. Add material

    npm install --save @angular/material @angular/cdk @angular/animations

2. Add model

    ng g class models/employee --type=model

3. Update angular

    ng update @angular/cli @angular/core

4. The above set didnt work well. So, renamed old ClientApp to ClientApp5 and created a new ClientApp using angular-cli which is the latest. I used routing option and css option.

    ng new ClientApp

5. Installed Material Design

    npm install --save @angular/material @angular/cdk @angular/animations

6. Create navigation menu

    ng generate @angular/material:material-nav --name components/nav-menu