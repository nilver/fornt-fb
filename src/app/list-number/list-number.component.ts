import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fibonacci } from '../model/Fibonacci';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-list-number',
  templateUrl: './list-number.component.html',
  styleUrls: ['./list-number.component.css']
})
export class ListNumberComponent implements OnInit {

  users: Fibonacci[];
  constructor( private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getUsers()
      .subscribe( data => {
        
        this.users = data;
        if(this.users.length ==0){
          alert('Not history yet');
        }
        console.log(this.users);
        
      },
      (errorResponse: HttpErrorResponse ) => {
        alert('Backend is not working. ERROR: '+ errorResponse.error.message);
      
      });
  }
  
  go(){
   this.router.navigateByUrl('/add-number');
  }
}
