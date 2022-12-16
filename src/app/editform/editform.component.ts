import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.scss']
})
export class EditformComponent implements OnInit {
editForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
this.editForm = new FormGroup({
  Name:new FormControl(null),
  Domain:new FormControl(null),
  Gender:new FormControl(null),
  DOB:new FormControl(null),
  Phone:new FormControl(null),
  Location:new FormControl(null)
})
  }

  onSubmit(){
    alert("Data Saved");
    this.editForm.reset();
  }

}
