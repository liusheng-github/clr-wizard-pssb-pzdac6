import { Component, OnInit } from '@angular/core';
import { NgForm,
         FormsModule, 
         ReactiveFormsModule, 
         FormGroup, 
         FormControl, 
         FormArray, 
         FormBuilder, 
         Validators } from '@angular/forms';

@Component({
  selector: 'app-itvm',
  templateUrl: './itvm.component.html',
  styleUrls: ['./itvm.component.scss']
})
export class ItvmComponent implements OnInit {

  itvmColumns: any[];
  cybersecurity: any[];
  model: any[];

  constructor() { }

  public selectAll( state: boolean ) {
    for (let col of this.itvmColumns) {
      for (let row of col.rows) {
        row.running = state;
      }
    }
    for (let row of this.cybersecurity) {
      row.running = state;
    }
  }

  public get selectableItems() : any[] {
    let result = [];

    for (let col of this.itvmColumns) {
      for (let row of col.rows) {
        result.push(row);
      }
    }

    for (let row of this.cybersecurity) {
      result.push(row);
    }

    return result;
  }

  public get selectedOptions() {
    let result = 0;
    for (let col of this.itvmColumns) {
      result += col.rows.filter(opt => opt.running).length;
    }
    result += this.cybersecurity.filter(opt => opt.running).length;
    return result;
  }

  ngOnInit() {
    this.cybersecurity = [
      {
        name: "Control",
        value: "Control",
        running: false
      },
      {
        name: "Insight",
        value: "Insight",
        running: false
      },
      {
        name: "Protect",
        value: "Protect",
        running: false
      }
    ];
    this.itvmColumns = [
      {
        name: "infrastructureProvider",
        value: "Infrastructure Provider",
        running: false,
        rows: [
          { name: "hybridCloud",
            value: "Hybrid Cloud",
            running: false },
          { name: "privateCloud",
            value: "Private Cloud",
            running: false },
          { name: "virtualInfrastructure",
            value: "Virtual Infrastructure",
            running: false },
          { name: "setContainer",
            value: "Set Container",
            running: false }
        ]
      },
      {
        name: "businessPartner",
        value: "Business Partner",
        running: false,
        rows: [
          { name: "XaaS",
            value: "XaaS",
            running: false },
          { name: "PaaS",
            value: "PaaS",
            running: false },
          { name: "IaaS",
            value: "IaaS",
            running: false }
        ]
      },
      {
        name: "digitalEnterprise",
        value: "Digital Enterprise",
        running: false,
        rows: [
          { name: "digitalConvergence",
            value: "Digital Convergence",
            running: false },
          { name: "thirdPlatform",
            value: "Third Platform",
            running: false },
          { name: "DevOps",
            value: "DevOps",
            running: false }
        ]
      }
    ];
  }
}