
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
name = "Hello world"

  constructor(private router:Router) { }

  ngOnInit() {
  }
  click(){this.router.navigateByUrl("about")}
}
