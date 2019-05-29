import { Component, ViewChild, Input, OnInit, AfterViewInit } from '@angular/core';
import { ItvmComponent } from '../solutions-sets/itvm/itvm.component';
import { DwjmComponent } from '../solutions-sets/dwjm/dwjm.component';
import { FormGroup, 
         NgForm,
         FormControl } from "@angular/forms";
import { ClrWizard } from "@clr/angular";

@Component({
  selector: 'app-dashboard-buttons',
  templateUrl: './dashboard-buttons.component.html',
  styleUrls: ['./dashboard-buttons.component.scss']
})
export class DashboardButtonsComponent implements OnInit, AfterViewInit {
   
   @ViewChild("itvm") itvm: ItvmComponent;
   @ViewChild("dwjm") dwjm: DwjmComponent;
   @ViewChild("wizard1") wizard1: ClrWizard;
  
  
  @ViewChild("formItvm") formItvm: NgForm;
  isItvm: boolean = true;

   @ViewChild("formDwjm") formDwjm: NgForm;

   @Input() tagsLeft: boolean;

  isValid: boolean = false;
  nextBtnIsTouched: boolean = false;
  selectAllSolutionSets: boolean = false;
  // tagsLeft: boolean = true;

  _open: boolean = false;
  _open1: boolean = false;
  solutionSet: string = 'IT Value Model';


  model = {
      customerName: "",
      oppotunityName: ""
  };

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.isValid = ( this.itvm.selectedOptions > 0 );
  }

  checkFormValidity():boolean {        
    return this.form.valid;
  }

  public selectAll( state: boolean ) {
    if ( this.isItvm ) {
      this.itvm.selectAll( state );
    } else {
      this.dwjm.selectAll( state );
    }
  }

  public get selectedSolutionSets() {
    return this.isItvm ? this.itvm.selectedOptions : this.dwjm.selectedOptions;
  }

  open() {
      this._open = !this.open;
  }

  open1() {
      this._open1 = !this.open1;
  }

}