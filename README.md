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

19. add hammerjs

    `npm install --save hammerjs`

20. flex-layut

    `npm install --save @angular/flex-layout`

21. ngrx

    `npm install --save @ngrx/store`

22. Oracle ef here

    http://www.oracle.com/technetwork/topics/dotnet/downloads/efcorebeta-5198354.html

23. css to scss in `angular.json` and change all mention of css file to scss files after runing:

    `ng config schematics.@schematics/angular:component.styleext scss`

24. ngrx schematics

    `npm install @ngrx/schematics --save-dev`

25. ngrx store

    `npm install @ngrx/store --save`

26. generate state

    `ng generate @ngrx/schematics:store State --root --module app.module.ts`

27. generate reducer

    `ng generate @ngrx/schematics:reducer MovieIds --group`

28. generate action

    `ng generate @ngrx/schematics:action Movieid --group`

29. add store devtools

    `npm install @ngrx/store-devtools --save`

30. a) add in app.module

    `StoreDevtoolsModule.instrument({ name: "angular demo devtools", maxAge: 25, logOnly: environment.production })`

31. add effects

    `npm install @ngrx/effects --save`

32. generate effects

    `ng generate @ngrx/schematics:effect CurrentConditions--module app.module --group`

33. add router store

    `npm install @ngrx/router-store --save`

34. run to add maps

    `npm install --save @types/googlemaps`

35. inside body of index.html after app-root

    `<script async defer src="https://maps.googleapis.com/maps/api/js?key=APIKEY&libraries=geometry,drawing,places" type="text/javascript"></script>`

36. add at top to ts file

    `/// <reference types="@types/googlemaps" />`

37. add types in tsconfig.app.json and tsconfig.spec.json

    `"googlemaps"`

38. add pretty-quick formatter and keep

    `npm install --save prettier pretty-quick npm-run-all -D`

39. add husky

    `npm install husky --save-dev`

40. hammerjs

    `npm install hammerjs --save`

41. Add store module in app.module

    `StoreModule.forRoot(reducer)`

42. Documentation extesntion: Document this 

43. Add PWA features

   `ng add @angular/pwa`
