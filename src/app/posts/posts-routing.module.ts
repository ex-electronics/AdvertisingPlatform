import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { PostsComponent } from './posts.component';

export const PostsRoutes: Routes = [
    {
        path: '',
        component: PostsComponent,
        data: {
           title: 'Posts'
        }
    }
];

