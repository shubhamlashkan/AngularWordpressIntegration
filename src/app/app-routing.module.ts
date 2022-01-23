import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path:'',component:AllPostsComponent,

  },
  {
    path:'post/:id',component:PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
