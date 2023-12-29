import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrl: './tags-list.component.scss'
})
export class TagsListComponent implements OnInit {

  constructor(private router: Router ){}

  ngOnInit() {
    
  }

  cancel(){
    this.router.navigateByUrl('/');
  }

}
