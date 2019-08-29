// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'Salut Stephane, tu es une bete ';
// }

import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  // templateUrl: './app.component.html',
  template:`
     <h1>Directives structurelles</h1>
      <p *ngIf="showDescription === true">Merci Lior , c'est de la bale </p>
      <button (click)="toggleDescription()">Afficher/Cacher la description</button>
    <h2>Notes de l'élève</h2>
    <ul>
      <li *ngFor="let note of notes" 
          [ngStyle]="{ fontWeight: note < 10 ? 'bold' : 'normal' }"
          [ngClass]="{
          rouge: note < 10,
          vert: note >= 10
        }">
        <strong *ngIf="note < 10">{{ note }}</strong>
        <span *ngIf="note >= 10">{{ note }}</span>
      </li>
    </ul>
  `,
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

// ********************************************************
  showDescription = true;
  notes = [14.5, 12, 18, 9, 15];

  eleves = [
    { firstName: "Lior", lastName: "Chamla" },
    { firstName: "Magali", lastName: "Pernin" },
    { firstName: "Joseph", lastName: "Dupont" }
  ];

  toggleDescription() {
    this.showDescription = !this.showDescription;
  }
// ****************   FIN  ***********************



  
  public title = "titre de page";
  public nombre = 12.55;

  public image = "http://placehold.it/400x200";


 //*******************  FIN ************************ */
  public employe = {
    firstName : "lior",
    lastName:"chamla",
    role: "formateur 3wa"
  }

  reagirAuLicenciement(event)
  {
    console.log(event);
    alert('Non , ' + event +' a été virer');
  }
//*********************************************************************************************************** */

  // public onChangeModel(nouveauTitre) {
  //   this.title = nouveauTitre;
  //   // console.log(e);
  // }

  public onChange(e) {
    this.title = e.target.value;
  }

  public changerTitre() {
    this.title = "j'ai changé le titre";
  }

  public direBonjour() {
    window.alert("hello world");
  }

  public getPhrase() {
    return "Bojour à tous";
  }
}