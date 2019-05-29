import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dwjm',
  templateUrl: './dwjm.component.html',
  styleUrls: ['./dwjm.component.scss']
})
export class DwjmComponent implements OnInit {

  itDefined: any[];
  userCentric: any[];
  appCatalog: any[];
  unifiedEndpointManagement: any[];
  digitalEnterprise: any[];
  cybersecurity: any[];
  infraProvider: any[];

  constructor() { }

  public get selectableBtns() {
    return [
      this.itDefined,
      this.userCentric,
      this.appCatalog,
      this.unifiedEndpointManagement,
      this.digitalEnterprise,
      this.cybersecurity,
      this.infraProvider
    ];
  }

  public selectAll( state: boolean ) {
    for (let btnArr of this.selectableBtns) {
      for (let row of btnArr) {
        row.running = state;
      }
    }
  }

  public get selectedOptions() {
    
    let result = 0;

    for (let btnArr of this.selectableBtns) {
      result += btnArr.filter(opt => opt.running).length;
    }

    return result;
  }

  ngOnInit() {

    this.itDefined = [
      {
        name: "tia",
        value: "Traditional Identity & Authentication",
        running: false
      },
      {
        name: "ad",
        value: "App Depoloyment",
        running: false
      },
      {
        name: "cm",
        value: "Client Management",
        running: false
      },
      {
        name: "emm",
        value: "Enterprise Mobility Management",
        running: false
      }
    ];

    this.userCentric = [
      {
        name: "ia",
        value: "Identity Aggregation",
        running: false
      },
      {
        name: "aa",
        value: "App Abstraction",
        running: false
      },
      {
        name: "dd",
        value: "Dynamic Desktops",
        running: false
      },
      {
        name: "em",
        value: "Enhanced Mobility",
        running: false
      }
    ];

    this.appCatalog = [
      {
        name: "App Catalog",
        value: "App Catalog",
        running: false
      }
    ];

    this.unifiedEndpointManagement = [
      {
        name: "Unified Endpoint Management",
        value: "Unified Endpoint Management",
        running: false
      }
    ];

    this.digitalEnterprise = [
      {
        name: "Digital Workspace",
        value: "Digital Workspace",
        running: false
      },
      {
        name: "Digital Convergence",
        value: "Digital Convergence",
        running: false
      }
    ];

    this.cybersecurity = [
      {
        name: "ctrl",
        value: "Control",
        running: false
      }
    ];

    this.infraProvider = [
      {
        name: "hc",
        value: "Hybrid Cloud",
        running: false
      }
    ];



  }

}