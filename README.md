
1. Add material

    `npm install --save @angular/material @angular/cdk @angular/animations`

2. Add model

    `ng g class models/employee --type=model`

3. Update angular

    `ng update @angular/cli @angular/core`

4. The above set didnt work well. So, renamed old ClientApp to ClientApp5 and created a new ClientApp using angular-cli which is the latest. I used routing option and css option.

    `ng new ClientApp`

5. Installed Material Design

    `npm install --save @angular/material @angular/cdk @angular/animations`

6. Create navigation menu

    `ng generate @angular/material:material-nav --name components/nav-menu`

7. Create dashboard component

    `ng generate @angular/material:material-dashboard --name components/dashboard`

8. Renamed components folder to core. https://medium.com/@michelestieven/organizing-angular-applications-f0510761d65a

9. Create movie service

    `ng generate service shared/services/movie`

10. Create movie model

    `ng generate class shared/models/movie --type=model`

11. Create component

    ng generate component views/movies

12. Add material design icons

    `npm install material-design-icons --save`

13. Import in style.css file

    `@import '~material-design-icons/iconfont/material-icons.css';`

14. Add pwa settings https://christianlydemann.com/how-to-create-a-progressive-web-app-pwa-with-angular/

    `npm i @angular/pwa@next --save`

15. build

    `nng build --prod`

16. install http-server

    `npm install -g http-server`

17. host from dist folder

    `http-server -c-1 .`

18. Create shared module for material

    `ng g m shared/material --flat`