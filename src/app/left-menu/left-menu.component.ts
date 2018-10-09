import {Component} from '@angular/core';
@Component({
    selector:'left-menu',
    templateUrl:'./left-menu.component.html'
})
export class LeftMenu{
    private menuList = ['Add Category','Courses','Mster Courses','New Batches'];
    private menuIconList =[{type:'Add Category',icon:'fa fa-sitemap'},{type:'Courses',icon:'fa fa-sticky-note-o'},{type:'Mster Courses',icon:'fa fa-asterisk'},{type:'New Batches',icon:'fa fa-laptop'}]
}
