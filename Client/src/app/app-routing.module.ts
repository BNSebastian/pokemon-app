import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
  //   {
  //     path: '',
  //     runGuardsAndResolvers: 'always',
  //     canActivate: [AuthGuard],
  //     children: [
  //       { path: 'members', component: MemberListComponent },
  //       { path: 'members/:id', component: MemberDetailComponent },
  //       { path: 'lists', component: ListsComponent },
  //       { path: 'message', component: MessagesComponent },
  //     ],
  //   },
  //   { path: 'errors', component: TestErrorsComponent },
  //   { path: 'not-found', component: NotFoundComponent },
  //   { path: 'server-error', component: ServerErrorComponent },
  //   { path: '**', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
