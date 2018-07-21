import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../angular/home/home.component';
import { ArticleTemplateComponent } from '../angular/article-template/article-template.component'

const routes: Routes = [
      { path: '', pathMatch: 'full', redirectTo: 'articles' },
      {path: 'articles', component: HomeComponent },
      { path: 'articles/:id', component: ArticleTemplateComponent},
      { path: '**', component: HomeComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RouteModule { }