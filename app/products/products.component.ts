import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  relevantProducts: any[];

  constructor() { }

  ngOnInit() {
    this.relevantProducts = [
      { running: true, disabled: false, name: 'Assess compute virtualization health' },
      { running: true, disabled: false, name: 'Amazon Web Services' },
      { running: true, disabled: false, name: 'Ansible 2.x' },
      { running: true, disabled: false, name: 'AWS' },
      { running: true, disabled: false, name: 'BMC Atrium CMDB' },
      { running: true, disabled: false, name: 'BMC Remedy ITSM' },
      { running: true, disabled: false, name: 'CA Nimsoft' },
      { running: true, disabled: false, name: 'Chef' },
      { running: true, disabled: false, name: 'EMC Avamar' },
      { running: true, disabled: false, name: 'F5 Big IP LTM' },
      { running: true, disabled: false, name: 'Generic Database supporting JDBC' },
      { running: true, disabled: false, name: 'Generic Storage Device and Fabric Switch' },
      { running: true, disabled: false, name: 'HP Service Center CMDB' },
      { running: true, disabled: false, name: 'Infoblox Domain Name Services' },
      { running: true, disabled: false, name: 'Infoblox IP Address Management' },
      { running: true, disabled: false, name: 'Jenkins' },
      { running: true, disabled: false, name: 'Microsoft Azure' },
      { running: true, disabled: false, name: 'Microsoft DNS' },
      { running: true, disabled: false, name: 'Microsoft Exchange' },
      { running: true, disabled: false, name: 'Microsoft Internet Information Services (IIS)' },
      { running: true, disabled: false, name: 'Microsoft SQL' },
      { running: true, disabled: false, name: 'Nokia VitalQIP' },
      { running: true, disabled: false, name: 'NSX-V' },
      { running: true, disabled: false, name: 'Palo Alto Networks VM-Series for VMware NSX™' },
      { running: true, disabled: false, name: 'Puppet' },
      { running: true, disabled: false, name: 'ServiceNow CMDB' },
      { running: true, disabled: false, name: 'ServiceNow ITSM' },
      { running: true, disabled: false, name: 'Site Recovery Manager 6.5.x' },
      { running: true, disabled: false, name: 'Solarwinds' },
      { running: true, disabled: false, name: 'Trend Micro Deep Security™' },
      { running: true, disabled: false, name: 'VCF Base Platform 2.3.x' },
      { running: true, disabled: false, name: 'VCF for Automation 2.3.x' },
      { running: true, disabled: false, name: 'VCF Hardware Installation Confirmation 2.3.x' },
      { running: true, disabled: false, name: 'VCF Operations Management 2.3.x' },
      { running: true, disabled: false, name: 'vCloud Air 1.0' },
      { running: true, disabled: false, name: 'Veritas' },
      { running: true, disabled: false, name: 'VMware AppDefense 1.0.0' },
      { running: true, disabled: false, name: 'VMware Cloud on AWS 1.3.x' },
      { running: true, disabled: false, name: 'VMware Integrated OpenStack(VIO)' },
      { running: true, disabled: false, name: 'VMware Network Insight (SaaS)' },
      { running: true, disabled: false, name: 'vRealize Automation 7.3.x' },
      { running: true, disabled: false, name: 'vRealize Business 7.x' },
      { running: true, disabled: false, name: 'vRealize Code Stream 2.2.0' },
      { running: true, disabled: false, name: 'vRealize Log Insight 4.5.x' },
      { running: true, disabled: false, name: 'vRealize Network Insight 3.6.x' },
      { running: true, disabled: false, name: 'vRealize Operations Manager 6.6.x' },
      { running: true, disabled: false, name: 'vRealize Orchestrator 7.3.x' },
      { running: true, disabled: false, name: 'vSphere 6.5.x' },
      { running: true, disabled: false, name: 'vSphere Integrated Containers 1.x' },
      { running: true, disabled: false, name: 'VVD for SDDC Consolidated 4.2' },
      { running: true, disabled: false, name: 'VVD for SDDC Region A 4.2' },
      { running: true, disabled: false, name: 'VVD for SDDC Region B 4.2' }
    ];
  }

}