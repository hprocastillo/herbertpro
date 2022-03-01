import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-mobile',
  templateUrl: './projects-mobile.component.html',
  styleUrls: ['./projects-mobile.component.scss']
})
export class ProjectsMobileComponent implements OnInit {

  listProjects = [
    {
      id: "0",
      name: "KONTROLATE",
      logo: "",
      typeApp: "Progressive Web App",
      stackTech: "Angular 12, AngularFire, Firebase, Bootstrap",
      description: "Application for financial management of personal income and expenses. It has multiple features, such as: Create sets of expenses, Create shared expenses and share existing expenses, in addition to setting periodic expenses goals and capturing an image of the receipt corresponding to the expense.",
      gallery1: "./assets/images/projects/kontrolate/kontrolate-1.png",
      gallery2: "./assets/images/projects/kontrolate/kontrolate-2.png",
      gallery3: "./assets/images/projects/kontrolate/kontrolate-3.png",
      gallery4: "./assets/images/projects/kontrolate/kontrolate-4.png",
      gallery5: "",
      gallery6: "",
      gallery7: "",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
