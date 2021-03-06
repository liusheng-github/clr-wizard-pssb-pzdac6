import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution-elements',
  templateUrl: './solution-elements.component.html',
  styleUrls: ['./solution-elements.component.scss']
})
export class SolutionElementsComponent implements OnInit {

  customerProblems: any[];
  capabilities: any[];
  outcomes: any[];
  fundamental: any[];
  suplemental: any[];

  constructor() { 


  }

  ngOnInit() {
    this.customerProblems = [
      { id: 'cp0', running: false, disabled: false, name:'Application teams working in siloes' },
      { id: 'cp1', running: false, disabled: false, name:'Business critical failures lead to unplanned downtime' },
      { id: 'cp2', running: false, disabled: false, name: 'Complex application and development cycles' },
      { id: 'cp3', running: false, disabled: false, name: 'Configuration drifts causing unexpected downtime and failture' },
      { id: 'cp4', running: false, disabled: false, name: 'Developers not able to replicate problematic environments' },
      { id: 'cp5', running: true, disabled: false, name: 'Difficulty internalizing DevOps way of thinking' },
      { id: 'cp6', running: false, disabled: false, name: 'High OPEX for application and infrastructure delivery' },
      { id: 'cp7', running: false, disabled: false, name: 'Infrastructure poses a roadblock for developers' },
      { id: 'cp8', running: false, disabled: false, name: 'Lack of a shared approach between development and operations' },
      { id: 'cp9', running: true, disabled: false, name: 'Lack of a standardized toolchain across the organization' },
      { id: 'cp10', running: false, disabled: false, name: 'Lack of automation across the toolchain' },
      { id: 'cp11', running: false, disabled: false, name: 'Lack of unified catalog for applications and services' },
      { id: 'cp12', running: false, disabled: false, name: 'No unified approach to automation' },
      { id: 'cp13', running: false, disabled: false, name: 'Organizational resistance to change' },
      { id: 'cp14', running: false, disabled: false, name: 'Poor IT financial visability' },
      { id: 'cp15', running: false, disabled: false, name: 'Separate approaches to automation between development infrastructure teams' },
      { id: 'cp16', running: true, disabled: false, name: 'Unable to accurately track service levels' },
      { id: 'cp17', running: true, disabled: false, name: 'Unexpected resource demand in a specific timeframe' },
      { id: 'cp18', running: false, disabled: false, name: 'Unplanned workload failtures' },
      { id: 'cp19', running: false, disabled: false, name: 'Unplanned workload placement has unexpected cost impact' },
      { id: 'cp20', running: false, disabled: false, name: 'Used to a mini-waterfall approach and not an agile approach' },
      { id: 'cp21', running: false, disabled: false, name: 'Virtual machine sprawl' }
    ];
    this.capabilities = [
      { id: 'c0', running: false, disabled: false, name: 'Automate workload provisioning' },
      { id: 'c1', running: false, disabled: false, name: 'Deliver application stacks on demand' },
      { id: 'c2', running: true, disabled: false, name: 'Track assets and configurations across public and private clouds' },
      { id: 'c3', running: true, disabled: false, name: 'Govern cloud consumption' },
      { id: 'c4', running: false, disabled: false, name: 'Deliver application stacks on demand' },
      { id: 'c5', running: true, disabled: false, name: 'Govern cloud consumption' },
      { id: 'c6', running: false, disabled: false, name: 'Provide an integrated service lifecycle' },
      { id: 'c7', running: false, disabled: false, name: 'Govern cloud consumption' },
      { id: 'c8', running: false, disabled: false, name: 'Understand and control workload costs' },
      { id: 'c9', running: false, disabled: false, name: 'Track assets and configurations across public' },
      { id: 'c10', running: false, disabled: false, name: 'and private clouds' },
      { id: 'c11', running: false, disabled: false, name: 'Support change and configuration' },
      { id: 'c12', running: false, disabled: false, name: 'management for cloud environments' },
      { id: 'c13', running: false, disabled: false, name: 'Support a self-service deployment model' },
      { id: 'c14', running: false, disabled: false, name: 'Standardize workflow orchestration' },
      { id: 'c15', running: false, disabled: false, name: 'Provide an integrated service lifecycle' },
      { id: 'c16', running: false, disabled: false, name: 'Provide a self service portal for business users' },
      { id: 'c17', running: false, disabled: false, name: 'Manage infrastructure as code' },
      { id: 'c18', running: false, disabled: false, name: 'Govern cloud consumption' },
      { id: 'c19', running: false, disabled: false, name: 'Deliver application stacks on demand' },
      { id: 'c20', running: false, disabled: false, name: 'Manage infrastructure as code' },
      { id: 'c21', running: false, disabled: false, name: 'Leverage DevOps to rapidly develop and' },
      { id: 'c22', running: false, disabled: false, name: 'iterate applications' },
      { id: 'c23', running: false, disabled: false, name: 'Govern cloud consumption' },
      { id: 'c24', running: false, disabled: false, name: 'Expand virtual infrastructure delivery' },
      { id: 'c25', running: false, disabled: false, name: 'capabilities across public and private clouds' },
      { id: 'c26', running: false, disabled: false, name: 'Enable change and configuration management' },
      { id: 'c27', running: false, disabled: false, name: 'for cloud environments' },
      { id: 'c28', running: false, disabled: false, name: 'Deliver application stacks on demand' }
    ];
    this.outcomes = [
      { id: 'o0', running: false, disabled: false, name: 'A path to cloud-native applications' },
      { id: 'o1', running: true, disabled: false, name: 'A supporting organizational model ' },
      { id: 'o2', running: false, disabled: false, name: 'A unified service portal for users to access applications, infrastructure , and platforms on demand' },
      { id: 'o3', running: false, disabled: false, name: 'Automation and standardization will allow linear growth following the business pace' },
      { id: 'o4', running: false, disabled: false, name: 'Avoid business-critical workload failures' },
      { id: 'o5', running: false, disabled: false, name: 'Best of breef platforms embedded into processes and day-to-day activities' },
      { id: 'o6', running: false, disabled: false, name: 'Budgetary capacity planning' },
      { id: 'o7', running: false, disabled: false, name: 'Business enabled for rapid application development' },
      { id: 'o8', running: false, disabled: false, name: 'Business relevant dashboards' },
      { id: 'o9', running: false, disabled: false, name: 'DevOps for infrastructure' },
      { id: 'o10', running: false, disabled: false, name: 'End-to-end toolchain integrations' },
      { id: 'o11', running: false, disabled: false, name: 'Expedient and sustainable delivery of applications' },
      { id: 'o12', running: false, disabled: false, name: 'Foundation for scaling DevOps across the enterprise' },
      { id: 'o13', running: false, disabled: false, name: 'High business visibility' },
      { id: 'o14', running: false, disabled: false, name: 'Initiating the culture change to support continuous delivery' },
      { id: 'o15', running: false, disabled: false, name: 'Operate as one team' },
      { id: 'o16', running: false, disabled: false, name: 'OPEX reduction' },
      { id: 'o17', running: false, disabled: false, name: 'Shorter lead times to application value' }
    ];
    this.fundamental = [
      { id: 'f1', running: true, disabled: false, name: 'Assess application and dependency mappings' },
      { id: 'f2', running: true, disabled: false, name: 'Assess cloud value and workload placement' },
      { id: 'f3', running: true, disabled: false, name: 'Assess current state of the IT organization' },
      { id: 'f4', running: false, disabled: false, name: 'Assess KPIs of virtual infrastructure supporting applications' },
      { id: 'f5', running: false, disabled: false, name: 'Assess readiness for extending the data center to cloud providers' },
      { id: 'f6', running: true, disabled: false, name: 'Create a layer 2 network extension' },
      { id: 'f7', running: false, disabled: false, name: 'Deploy a cloud automation foundation' },
      { id: 'f8', running: false, disabled: false, name: 'Deploy a cloud business management foundation' },
      { id: 'f9', running: false, disabled: false, name: 'Deploy a continuous delivery foundation' },
      { id: 'f10', running: false, disabled: false, name: 'Deploy a continuously available virtual infrastructure foundation' },
      { id: 'f11', running: false, disabled: false, name: 'Deploy a highly available virtual infrastructure foundation' },
      { id: 'f12', running: false, disabled: false, name: 'Deploy a hyper-converged data center platform' },
      { id: 'f13', running: false, disabled: false, name: 'Deploy a log centralization and analysis foundation' },
      { id: 'f14', running: false, disabled: false, name: 'Deploy a network virtualization and security operations and visibility foundation' },
      { id: 'f15', running: false, disabled: false, name: 'Deploy a network virtualization foundation' },
      { id: 'f16', running: false, disabled: false, name: 'Deploy a software defined data center platform' },
      { id: 'f17', running: false, disabled: false, name: 'Deploy a virtual infrastructure foundation' },
      { id: 'f18', running: false, disabled: false, name: 'Deploy an application security and isolation foundation' },
      { id: 'f19', running: false, disabled: false, name: 'Deploy an open API-based infrastructure foundation' },
      { id: 'f20', running: false, disabled: false, name: 'Deploy an operations management foundation' },
      { id: 'f21', running: false, disabled: false, name: 'Deploy an orchestration workflow foundation' },
      { id: 'f22', running: false, disabled: false, name: 'Design and implement tier consumption policies in the service request portal' },
      { id: 'f23', running: false, disabled: false, name: 'Develop a roadmap for implementing service automation' },
      { id: 'f24', running: false, disabled: false, name: 'Develop and implement a configuration management process' },
      { id: 'f25', running: false, disabled: false, name: 'Develop and implement a service catalog management process' },
      { id: 'f26', running: false, disabled: false, name: 'Develop and implement a service catalog template' },
      { id: 'f27', running: false, disabled: false, name: 'Develop and implement a service definition process' },
      { id: 'f28', running: false, disabled: false, name: 'Develop and implement a service definition template' },
      { id: 'f29', running: false, disabled: false, name: 'Develop and implement a service design, development, and release process' },
      { id: 'f30', running: false, disabled: false, name: 'Develop and implement a service level management process' },
      { id: 'f31', running: false, disabled: false, name: 'Develop and implement a service level management template' },
      { id: 'f32', running: false, disabled: false, name: 'Develop and implement a service lifecycle process' },
      { id: 'f33', running: false, disabled: false, name: 'Develop customized target state roles' },
      { id: 'f34', running: false, disabled: false, name: 'Develop OS images' },
      { id: 'f35', running: false, disabled: false, name: 'Develop target state IT organization design' },
      { id: 'f36', running: false, disabled: false, name: 'Enable "looking back" capacity management' },
      { id: 'f37', running: false, disabled: false, name: 'Enable "looking forward" capacity management' },
      { id: 'f38', running: false, disabled: false, name: 'Enable analytics as a service' },
      { id: 'f39', running: false, disabled: false, name: 'Enable custom hostnames for virtual workloads' },
      { id: 'f40', running: false, disabled: false, name: 'Enable essential SDDC monitoring' },
      { id: 'f41', running: false, disabled: false, name: 'Enable in-OS script execution' },
      { id: 'f42', running: false, disabled: false, name: 'Enhance existing capacity management processes' },
      { id: 'f43', running: false, disabled: false, name: 'Enhance existing configuration management processes' },
      { id: 'f44', running: false, disabled: false, name: 'Enhance existing demand management processes' },
      { id: 'f45', running: false, disabled: false, name: 'Enhance existing event management processes' },
      { id: 'f46', running: false, disabled: false, name: 'Enhance existing incident management processes' },
      { id: 'f47', running: false, disabled: false, name: 'Enhance existing problem management processes' },
      { id: 'f48', running: false, disabled: false, name: 'Enhance existing service catalog management processes' },
      { id: 'f49', running: false, disabled: false, name: 'Enhance existing service level management processes' },
      { id: 'f50', running: false, disabled: false, name: 'Leverage a continuous integration toolchain for virtual infrastructure' },
      { id: 'f51', running: false, disabled: false, name: 'Leverage advanced blueprints for multicomponent stack automation' },
      { id: 'f52', running: false, disabled: false, name: 'Leverage advanced business management for cloud' },
      { id: 'f53', running: false, disabled: false, name: 'Leverage an external configuration management system' },
      { id: 'f54', running: false, disabled: false, name: 'Leverage an external directory service to manage virtual workloads' },
      { id: 'f55', running: false, disabled: false, name: 'Leverage external DNS for virtual workloads' },
      { id: 'f56', running: false, disabled: false, name: 'Leverage monitoring agents in virtual workloads' },
      { id: 'f57', running: false, disabled: false, name: 'Leverage operations management for resource reclamation' },
      { id: 'f58', running: false, disabled: false, name: 'Leverage operations management for resource rightsizing' },
      { id: 'f59', running: false, disabled: false, name: 'Leverage operations management for service discovery' },
      { id: 'f60', running: false, disabled: false, name: 'Provide a marketing process for business users' },
      { id: 'f61', running: false, disabled: false, name: 'Provide a marketing process for IT users' },
      { id: 'f62', running: false, disabled: false, name: 'Provide an onboarding process for accessing dashboards and content' },
      { id: 'f63', running: false, disabled: false, name: 'Provide operational adoption of cloud business management' },
      { id: 'f64', running: false, disabled: false, name: 'Provide service catalog management process awareness' },
      { id: 'f65', running: false, disabled: false, name: 'Provide service definition process awareness' },
      { id: 'f66', running: false, disabled: false, name: 'Provide service design, development, and release process awareness' },
      { id: 'f67', running: false, disabled: false, name: 'Provide service level management process awareness' },
      { id: 'f68', running: false, disabled: false, name: 'Provide service lifecycle process awareness' },
      { id: 'f69', running: false, disabled: false, name: 'Provide service retirement process awareness' }
    ];
    this.suplemental = [
      { ID: 'S1', running: false, disabled: false, name: 'Assess compute virtualization health' },
      { ID: 'S2', running: false, disabled: false, name: 'Assess network virtualization health' },
      { ID: 'S3', running: false, disabled: false, name: 'Assess readiness for workload migrations' },
      { ID: 'S4', running: false, disabled: false, name: 'Deploy a container foundation' },
      { ID: 'S5', running: false, disabled: false, name: 'Deploy a disaster recovery foundation' },
      { ID: 'S6', running: false, disabled: false, name: 'Deploy secure and seamless infrastructure hybridity' },
      { ID: 'S7', running: false, disabled: false, name: 'Design a cloud automation foundation' },
      { ID: 'S8', running: false, disabled: false, name: 'Design a continuously available virtual infrastructure foundation' },
      { ID: 'S9', running: false, disabled: false, name: 'Design a disaster recovery foundation' },
      { ID: 'S10', running: false, disabled: false, name: 'Design a highly available virtual infrastructure foundation' },
      { ID: 'S11', running: false, disabled: false, name: 'Design a log centralization and analysis foundation' },
      { ID: 'S12', running: false, disabled: false, name: 'Design a network virtualization foundation' },
      { ID: 'S13', running: false, disabled: false, name: 'Design a virtual infrastructure foundation' },
      { ID: 'S14', running: false, disabled: false, name: 'Design an application security and isolation foundation' },
      { ID: 'S15', running: false, disabled: false, name: 'Design an operations management foundation' },
      { ID: 'S16', running: false, disabled: false, name: 'Design secure and seamless infrastructure hybridity' },
      { ID: 'S17', running: false, disabled: false, name: 'Develop and implement tailored log analysis use cases' },
      { ID: 'S18', running: false, disabled: false, name: 'Develop and implement tailored operations management use cases' },
      { ID: 'S19', running: false, disabled: false, name: 'Enable automatic creation of configuration items in an external CMDB' },
      { ID: 'S20', running: false, disabled: false, name: 'Enable automatic ticket creation in external ITSM' },
      { ID: 'S21', running: false, disabled: false, name: 'Extend the data center to cloud providers' },
      { ID: 'S22', running: false, disabled: false, name: 'Leverage application security and isolation for threat detection and response' },
      { ID: 'S23', running: false, disabled: false, name: 'Leverage cloud automation APIs for continuous integration toolchains' },
      { ID: 'S24', running: false, disabled: false, name: 'Leverage cloud automation for workload placement based on requestor input' },
      { ID: 'S25', running: false, disabled: false, name: 'Leverage cloud automation to auto-scale applications' },
      { ID: 'S26', running: false, disabled: false, name: 'Leverage cloud automation to provision virtual workloads to cloud providers' },
      { ID: 'S27', running: false, disabled: false, name: 'Leverage container management with cloud automation' },
      { ID: 'S28', running: false, disabled: false, name: 'Leverage data protection policies for virtual workloads' },
      { ID: 'S29', running: false, disabled: false, name: 'Leverage disaster recovery as a service' },
      { ID: 'S30', running: false, disabled: false, name: 'Leverage external IPAM for virtual workloads' },
      { ID: 'S31', running: false, disabled: false, name: 'Leverage external load balancer in blueprints' },
      { ID: 'S32', running: false, disabled: false, name: 'Leverage external systems for guest introspection' },
      { ID: 'S33', running: false, disabled: false, name: 'Leverage external systems for network traffic inspection' },
      { ID: 'S34', running: false, disabled: false, name: 'Leverage network virtualization for load balancing and secure remote access' },
      { ID: 'S35', running: false, disabled: false, name: 'Leverage network virtualization in blueprints' },
      { ID: 'S36', running: false, disabled: false, name: 'Leverage network virtualization in disaster recovery' },
      { ID: 'S37', running: false, disabled: false, name: 'Leverage operations management for business applications' },
      { ID: 'S38', running: false, disabled: false, name: 'Leverage operations management for medical systems' },
      { ID: 'S39', running: false, disabled: false, name: 'Leverage operations management for storage resources' },
      { ID: 'S40', running: false, disabled: false, name: 'Leverage operations management with log centralization and analysis' },
      { ID: 'S41', running: false, disabled: false, name: 'Leverage operations management with network virtualization' },
      { ID: 'S42', running: false, disabled: false, name: 'Leverage operations management with storage virtualization' },
      { ID: 'S43', running: false, disabled: false, name: 'Provide an operational design for network virtualization' },
      { ID: 'S44', running: false, disabled: false, name: 'Provide organization design and planning for network virtualization' },
      { ID: 'S45', running: false, disabled: false, name: 'Provide performance management dashboards' },
      { ID: 'S46', running: false, disabled: false, name: 'Provide root cause analysis dashboards' },
      { ID: 'S47', running: false, disabled: false, name: 'Upgrade a network virtualization foundation' },
      { ID: 'S48', running: false, disabled: false, name: 'Upgrade a virtual infrastructure foundation' }
    ];
  }

}