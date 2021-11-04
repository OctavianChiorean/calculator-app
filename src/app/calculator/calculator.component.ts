import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  digits = {
    digit0: '0',
    digit1: '1',
    digit2: '2',
    digit3: '3',
    digit4: '4',
    digit5: '5',
    digit6: '6',
    digit7: '7',
    digit8: '8',
    digit9: '9',
  }

  displayValue = this.digits.digit0

  addOperationValue1 = 0

  constructor() { }

  ngOnInit(): void {
  }

addCharactersToDisplayValue(character: string){
  if(character === this.digits.digit0 && this.displayValue === this.digits.digit0){
    this.displayValue = this.digits.digit0
  } else if(character != this.digits.digit0 && this.displayValue === this.digits.digit0){
    this.displayValue = character
  } else {
    let fisrtString = this.displayValue + character
    this.displayValue = this.checkString(fisrtString)
  }
}

checkString(numberString: string){
  let newStringWithDot : string
  let newStringWithoutDot : string

  console.log("this is the string before editing -", numberString)
  newStringWithoutDot = this.clearDotFromString(numberString)
  console.log("this is the string without dot -", newStringWithoutDot)
  newStringWithDot = this.addDot(newStringWithoutDot)
  console.log("this is the string with dot -", newStringWithDot)

  return newStringWithDot
}

addDot(numberString: string){
  let newString
  if(numberString.length == 4){
    newString = numberString[0] + "." + numberString.slice(1,4)
  }else if(numberString.length == 5){
    newString = numberString.slice(0,2) + "." + numberString.slice(2,5)
  }else if(numberString.length == 6){
    newString = numberString.slice(0,3) + "." + numberString.slice(3,7)
  }else if(numberString.length == 7){
    newString = numberString[0] + "." + numberString.slice(1,4) + "." + numberString.slice(4,7)
  }else if(numberString.length == 8){
    newString = numberString.slice(0,2) + "." + numberString.slice(2,5) + "." + numberString.slice(5,8)
  }else if(numberString.length == 9){
    newString = numberString.slice(0,3) + "." + numberString.slice(3,6) + "." + numberString.slice(6,9)
  }else if(numberString.length == 10){
    newString = numberString[0] + "." + numberString.slice(1,4) + "." + numberString.slice(4,7) + "." + numberString.slice(7,10)
  }else if(numberString.length == 11){
    newString = numberString.slice(0,2) + "." + numberString.slice(2,5) + "." + numberString.slice(5,8) + "." + numberString.slice(8,11)
  }else if(numberString.length == 12){
    newString = numberString.slice(0,3) + "." + numberString.slice(3,6) + "." + numberString.slice(6,9) + "." + numberString.slice(9,12)
  }else{
    newString = numberString
  }
  
  return newString
}

clearDotFromString(numberString: string){
  let newString
  if(numberString.length == 6){
    newString = numberString[0] + numberString.slice(2,6)
  }else if(numberString.length == 7){
    newString = numberString.slice(0,2) + numberString.slice(3,7)
  }else if(numberString.length == 8){
    newString = numberString.slice(0,3) + numberString.slice(4,9)
  }else if(numberString.length == 10){
    newString =numberString[0] + numberString.slice(2,5) + numberString.slice(6,10)
  }else if(numberString.length == 11){
    newString =numberString.slice(0,2) + numberString.slice(3,6) + numberString.slice(7,11)
  }else if(numberString.length == 12){
    newString =numberString.slice(0,3) + numberString.slice(4,7) + numberString.slice(8,12)
  }else if(numberString.length == 14){
    
    newString =numberString[0] + numberString.slice(2,5) + numberString.slice(6,9) + numberString.slice(10,15)
  }else if(numberString.length == 15){
    console.log("!!!")
    newString =numberString.slice(0,2) + numberString.slice(3,6) + numberString.slice(7,10) + numberString.slice(11,15)
  }else{
    newString = numberString
  }

  return newString
}

add(){
  let displayValueNumber = parseInt(this.displayValue)
  this.addOperationValue1 = this.addOperationValue1 + displayValueNumber
  this.displayValue = this.addOperationValue1.toString()
}




clear(){
  
  this.displayValue = this.digits.digit0
} 


  

}
