import { Component } from '@angular/core';
import { Dice } from './model/Dice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}


  selectedOperator: string | undefined;

  sum1 : string | any
  sum2 : string | any
  output : string | any ;

  dice : Dice = {
    dice: ''
  };

  numberOfDice : number | undefined ;
  numberOfSides : number | undefined;


  operators = ['+','-'] ;

// ============================================================================================
  Dice1(){

  //   let sum = 0 ;
  //   let sides = this.numberOfSides[(Math.floor(Math.random() * (this.numberOfSides.length)))]
  // //  console.log(this.number);
  //  console.log(`this is side ${sides}`);
  //  for(let i=1 ; i<=sides ; i++){
  //   let number =  Math.floor(Math.random() * sides)+1 ;
  //   console.log('Sum the number ' + number);

  //   sum+=number ;
  //   }

  //  this.sum1 = (sum.toString());
  //  return this.sum1
  }

  Dice2(){

  //  let sum = 0 ;
  //  let sides = this.numberOfSides[(Math.floor(Math.random() * (this.numberOfSides.length)))]
  //  console.log(`this is side ${sides}`);
  //  for(let i=1 ; i<=sides ; i++){
  //   let number =  Math.floor(Math.random() * sides)+1 ;
  //   console.log('Sum the number ' + number);

  //   sum+=number ;
  //   }
  //   this.sum2 = (sum.toString());
  //   return this.sum2
  }


  performCalculation(){
    let result = 0
    if(this.selectedOperator == '+'){
      result = parseInt(this.sum1) + parseInt(this.sum2)  ;
    }
    if(this.selectedOperator == '-'){
      result = parseInt(this.sum1) - parseInt(this.sum2)  ;
    }

    this.output = (result.toString());

  }

// ==============================================================================================

  public get diceNumberModel(): Dice {
    return this.dice;
  }
  public set diceNumberModel(value: Dice){
    this.dice = value;
  }
  public get diceSideModel(): Dice {
    return this.dice;
  }
  public set diceSideModel(value: Dice){
    this.dice = value;
  }


  show(){
    let dice = this.dice.dice;
    let val = dice.split('D') ;
    this.numberOfDice = parseInt(val[0]);
    this.numberOfSides = parseInt(val[1]);
    console.log(`number of Dice ${this.numberOfDice}`);
    console.log(`number of sides ${this.numberOfSides}`);
    let sum = 0 ;
    for(let i=0 ; i<this.numberOfDice ; i++){
      let number =  Math.floor(Math.random() * this.numberOfSides)+1
      console.log(`random number ${number}`);
      sum+=number ;
    }
    console.log(sum);
     ;
  }
}
