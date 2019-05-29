import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-engineered-solutions',
  templateUrl: './engineered-solutions.component.html',
  styleUrls: ['./engineered-solutions.component.scss']
})
export class EngineeredSolutionsComponent implements OnInit {

  @Input() selected: number;
  @Input() tagsLeft: boolean;

  engSolutions: any[];

  constructor() { }

  ngOnInit() {
    this.engSolutions = [
      {
        name: "vmwValidatedDesign",
        value: "VMware Validated Design",
        running: false
      },
      {
        name: "vmwCloudFoundation",
        value: "VMware Cloud Foundation",
        running: false
      },
      {
        name: "vmwValidatedDesign",
        value: "(1POD) VMware Validated Design",
        running: false
      },
      {
        name: "individualComponent",
        value: "Individual Component",
        running: false
      }
    ];
  }

}