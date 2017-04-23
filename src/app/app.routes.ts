import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AboutComponent} from './home/about.component'


const app_routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent}
];

export const routing = RouterModule.forRoot(app_routes);
