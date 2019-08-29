import { Component, Input, EventEmitter, Output } from '@angular/core';


@Component({ 
    selector: "app-employe",
    template: `
    <div>
    <h2>{{ informations.firstName }} {{ informations.lastName }}</h2>
    <small>{{ informations.role }}</small>
    <p> <ng-content></ng-content></p>
    <button (click)="onClickVirer()">Virer {{ informations.firstName }}</button>
</div>
    
  `,
    styles: []
})
export class EmployeComponent {

    @Input()
    informations; 

    @Output()
    licenciement = new EventEmitter(); 

    onClickVirer()
    {
        this.licenciement.emit(this.informations.firstName);
        console.log('nous avons virer ' + this.informations.firstName);
    }
} 