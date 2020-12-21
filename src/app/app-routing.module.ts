import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ProfileComponent} from './components/profile/profile.component';
import {DetailComponent} from './components/detail/detail.component';
import {AdminComponent} from './components/admin/admin.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {UnathorizedComponent} from './components/unathorized/unathorized.component';

import {AuthGuard} from './guards/auth.guard';
import {Role} from './models/role';
import {LearningSessionComponent} from "./components/learning-session/learning-session.component";
import {ReviewLearningSessionListComponent} from "./components/review-learning-session-list/review-learning-session-list.component";
import {ReviewLearningSessionComponent} from "./components/review-learning-session/review-learning-session.component";

const routes: Routes = [
  //public pages
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  //user+admin
  {path:'profile',
  component: ProfileComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.USER, Role.ADMIN]}
  },
  {path:'detail/:id',
  component:DetailComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.USER]}
  },
  {path:'admin',
  component: AdminComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.ADMIN]}
  },
  {path:'learningSession',
    component: LearningSessionComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.USER, Role.ADMIN]}
  },
  {path:'reviewList',
    component: ReviewLearningSessionListComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.USER, Role.ADMIN]}
  },
  {path:'review/:id',
    component: ReviewLearningSessionComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.USER, Role.ADMIN]}
  },
  //public error pages.
  {path:'404', component: NotFoundComponent},
  {path:'401', component: UnathorizedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
constructor(private router: Router) {
  //For unkhown pages
  this.router.errorHandler = (error: any) => {
    this.router.navigate(['/404']);
  }
}
}
