import {Component, OnChanges, Input, Output,EventEmitter} from '@angular/core';


@Component({
selector:'pm-star',
templateUrl:'./star.component.html',

})

export class StarComponent implements OnChanges{
@Input() rating:number
@Input() price:number

@Output() ratingClicked:EventEmitter<string>=new EventEmitter<string>();

onClick(){
    this.ratingClicked.emit(`the rating is ${this.rating} was clicked `)
}
ngOnChanges():void{
//    this.starWidth=this.rating*75/5;
  
}
}


