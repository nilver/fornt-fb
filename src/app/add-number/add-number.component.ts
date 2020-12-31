import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-add-number',
  templateUrl: './add-number.component.html',
  styleUrls: ['./add-number.component.css']
})
export class AddNumberComponent implements OnInit {

  addForm: FormGroup;
  result: number;
  show: boolean;
  hideButton:boolean;

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }


  ngOnInit() {
    this.show = false;
    this.hideButton = false;
    this.addForm = this.formBuilder.group({
      value: ['',Validators.required],
    });
    
  }
/**
 * Validators.pattern("^[0-9]*$"),
  Validators.minLength(8),
 */
  onSubmit() {
    this.result = null;
    this.hideButton = true;
    if(this.addForm.value.value.toString().length >7){
      alert('ERROR: number too large, maximum value 7 digits');
      this.hideButton= false;
      return;
    }
    this.apiService.generateNumber(this.addForm.value)
      .subscribe( data => {
        this.result = data.fb;
        this.show = true;
        this.hideButton= false;
   
      },
      (errorResponse: HttpErrorResponse ) => {
        alert('Backend is not working. ERROR: '+ errorResponse.error.message);
        this.hideButton= false;
   
      });
  }
  go(){
    this.router.navigateByUrl('/list-number');
  }

}
