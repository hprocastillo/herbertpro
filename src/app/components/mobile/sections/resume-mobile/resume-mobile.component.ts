import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-mobile',
  templateUrl: './resume-mobile.component.html',
  styleUrls: ['./resume-mobile.component.scss']
})
export class ResumeMobileComponent implements OnInit {

  listExperiences = [
    {
      id: "0",
      nameCompany: "HBC Logistic",
      logoCompany: "./assets/images/jobs/hbc.jpg",
      charge: "Full stack development",
      location: "Lima, Perú",
      duration: "May 2021 - Present",
      description: "Development of distribution route planning system. Cost analysis and route budgets. Classification of transport units and implementation of communication systems."
    },
    {
      id: "1",
      nameCompany: "IMPALA TERMINALS",
      logoCompany: "./assets/images/jobs/impala.jpg",
      charge: "Full stack development",
      location: "Lima, Perú",
      duration: "Jul 2021 - Dec 2021",
      description: "Construction of a progressive web app, for registering incidents and a checklist to verify the status of transport vehicles. Developed in angular 12 with backend and database in firebase firestore and firebase hosting."
    },
    {
      id: "2",
      nameCompany: "OPENDAT iSGCAS",
      logoCompany: "./assets/images/jobs/opendat.jpg",
      charge: "Backend development",
      location: "Antofagasta, Chile",
      duration: "Nov 2020 - Apr 2021",
      description: "Development of new applications for mining management systems. Maintenance and improvement of Oracle database queries. Participation in the business model analysis team."
    },
    {
      id: "3",
      nameCompany: "PENKA",
      logoCompany: "./assets/images/jobs/penka.jpg",
      charge: "Full stack development",
      location: "Tel Aviv, Israel",
      duration: "May 2020 - Mar 2021",
      description: "Construction of the website and progressive web app developed in angular 12 framework with backend and database in firebase firestore and firebase hosting. Modeling of business use cases, design of database schemas."
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
