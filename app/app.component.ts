import { Component, OnInit, ViewChild } from '@angular/core';
import { Wizard } from 'clarity-angular';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs/Rx';
import { DashboardButtonsComponent } from './dashboard-buttons/dashboard-buttons.component';


import '@clr/icons/shapes/essential-shapes';
import '@clr/icons/shapes/technology-shapes';
import { ClarityIcons } from '@clr/icons';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  @ViewChild("wizard") wizard: Wizard;
  @ViewChild("wizard1") wizard1: Wizard;
  @ViewChild("dashboardBtns") dashboardBtns: DashboardButtonsComponent;

  tagsLeft: boolean = true;

  stepTwoYes: boolean = false;
  stepTwoNo: boolean = false;

  isItvm: boolean = true;
  
  _open: boolean = false;
  _open1: boolean = false;
  solutionSet: string = 'IT Value Model';

  open() {
      this._open = !this.open;
  }

  open1() {
      this._open1 = !this.open1;
  }

  doCustomClick(buttonType: string): void {
    if (buttonType === 'custom-next') {
      console.log('yes')
      this.stepTwoYes = true;
      this.stepTwoNo = false;
    } else {
      console.log('no')
      this.stepTwoYes = false;
      this.stepTwoNo = true;
    }
    setTimeout(() => {
      this.wizard.next();
    });
  }

  constructor() {

    ClarityIcons.add({"pssb-logo": '<svg width="36" height="36" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><circle id="path-1" cx="18" cy="18" r="18"/></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Artboard"><g id="Group"><mask id="mask-2" fill="#fff"><use xlink:href="#path-1"/></mask><use id="Oval" fill="#367C33" xlink:href="#path-1"/><path d="M19.44 46.51L6.734 59.216-15.353 37.13 7.482 14.294l5.295 5.294L25.482 6.882 47.57 28.97 24.734 51.804 19.44 46.51z" id="Combined-Shape" fill="#005C35" opacity=".5" mask="url(#mask-2)"/><path d="M19.376 46.495L2.583 29.703l10.13-10.13 16.793 16.793-10.13 10.13z" id="Combined-Shape" fill="#005C35" opacity=".5" mask="url(#mask-2)"/><rect id="Rectangle-2" stroke="#FFF" mask="url(#mask-2)" x="6.912" y="20.147" width="23.235" height="5.765" rx="2.882"/><path d="M7.832 20.925l5.668-5.837" id="Line" stroke="#FFF" stroke-linecap="square" mask="url(#mask-2)"/><path d="M20.647 18c-3.028-3.153-4.793-5.094-5.294-5.824-.752-1.093-.53-2.117-.53-2.647.177-1.058.53-1.764 1.06-2.117L29.504 21.23" id="Path-2" stroke="#FFF" mask="url(#mask-2)"/><circle id="Oval-2" fill="#FFF" mask="url(#mask-2)" cx="10.058" cy="23.029" r="1.059"/><circle id="Oval-2-Copy" fill="#FFF" mask="url(#mask-2)" cx="27.479" cy="23.029" r="1"/><path d="M20.187 12.218c-.394.362-.5.755-.315 1.179.902 1.042 1.004 1.17 1.721 1.768.465.107.832.006 1.102-.304l-2.508-2.643z" id="Path-3" fill="#FFF" mask="url(#mask-2)"/></g></g></g></svg>'});

    ClarityIcons.add({"pssb-user": '<svg width="29" height="31" viewBox="0 0 29 31" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 .5)" stroke="#FFFFFF" fill="none" fill-rule="evenodd"><ellipse cx="13.9" cy="15.195" rx="13.568" ry="14.26"/><path d="M5.108 26.213v-6.29a4.605 4.605 0 0 1 4.605-4.605h8.279a4.605 4.605 0 0 1 4.605 4.605v6.29"/><ellipse cx="13.853" cy="9.148" rx="4.091" ry="4.3"/></g></svg>'});
    
  }

  ngOnInit() {
  }
}
