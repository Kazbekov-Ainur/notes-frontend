import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    
  }

  async remin(){
    await this.router.navigate(['/reminders']);
  }

  async tags() {
    await this.router.navigate(['/tags']);
  }

}
