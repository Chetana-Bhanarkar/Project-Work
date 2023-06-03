import { Component } from '@angular/core';
import { Dice } from './model/Dice.model';

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
    dice1: '',
    dice2: ''
  };

  numberOfDice1 : number | undefined ;
  numberOfSides1 : number | undefined;
  numberOfDice2 : number | undefined ;
  numberOfSides2 : number | undefined;


  operators = ['+','-'] ;

// ============================================================================================
  // Dice1(){

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
  // }

  // Dice2(){

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
  // }


  // performCalculation(){
  //   let result = 0
  //   if(this.selectedOperator == '+'){
  //     result = parseInt(this.sum1) + parseInt(this.sum2)  ;
  //   }
  //   if(this.selectedOperator == '-'){
  //     result = parseInt(this.sum1) - parseInt(this.sum2)  ;
  //   }

  //   this.output = (result.toString());

  // }

// ==============================================================================================



  Dice1(){
    let dice = this.dice.dice1
    let val = dice.split('D') ;
    this.numberOfDice1 = parseInt(val[0]);
    this.numberOfSides1 = parseInt(val[1]);
    console.log(`number of Dice ${this.numberOfDice1}`);
    console.log(`number of sides ${this.numberOfSides1}`);
    let sum = 0 ;
    for(let i=0 ; i<this.numberOfDice1 ; i++){
      let number =  Math.floor(Math.random() * this.numberOfSides1)+1
      console.log(`random number ${number}`);
      sum+=number ;
    }
    this.sum1 = sum ;
    console.log(this.sum1);

  }

  Dice2(){
    let dice = this.dice.dice2
    let val = dice.split('D') ;
    this.numberOfDice2 = parseInt(val[0]);
    this.numberOfSides2 = parseInt(val[1]);
    console.log(`number of Dice ${this.numberOfDice2}`);
    console.log(`number of sides ${this.numberOfSides2}`);
    let sum = 0 ;
    for(let i=0 ; i<this.numberOfDice2 ; i++){
      let number =  Math.floor(Math.random() * this.numberOfSides2)+1
      console.log(`random number ${number}`);
      sum+=number ;
    }
    this.sum2 = sum ;
    console.log(this.sum2);

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
    console.log(this.output);
  }


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

}
