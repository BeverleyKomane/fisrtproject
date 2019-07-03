import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
list=[{name:"Home",path:"home"},
{name:"About",path:"about"},
{name:"Contact",path:"contact"}]
  constructor(private route:Router) { }

  ngOnInit() {
  }
onnavigation(item){
  this.route.navigateByUrl(item.path)
} 
}
