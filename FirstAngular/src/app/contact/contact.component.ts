import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class contactComponent implements OnInit {

  constructor(private contact:Router) { }

  ngOnInit() {
  }
click(){this.contact.navigateByUrl("home")}
}
