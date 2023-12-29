import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reminders-list',
  templateUrl: './reminders-list.component.html',
  styleUrl: './reminders-list.component.scss'
})
export class RemindersListComponent implements OnInit {

constructor( private router: Router) {}

ngOnInit() {
  
}

cancel(){
  this.router.navigateByUrl('/');
}

}


