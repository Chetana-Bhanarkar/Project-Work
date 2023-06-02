import { Component } from '@angular/core';
// import { Dice } from './model/Dice.input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}

  numberOfDice : number | undefined ;
  numberOfSides = [4,6,8,10,12] ;

 sides = this.numberOfSides[(Math.floor(Math.random() * (this.numberOfSides.length)))]



 random(){

   let sum = 0 ;
  //  console.log(this.number);
   console.log(`this is side ${this.sides}`);
   for(let i=0 ; i<this.sides ; i++){
    let number =  Math.floor(Math.random() * this.sides)+1 ;
    console.log('Sum the number ' + number);

    sum+=number ;
    }

   console.log(sum);
  }



}
