import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  allowButton : boolean = false;
  buttonClick : string = "button not clicked yet";
  oneWayForDataBinding : string='';
  twoWayForDataBinding : string ="the other way to data binding";

  constructor() {
    setTimeout(() => {
      this.allowButton = true;
    },2000);
   }

  ngOnInit() {
  }

  onButtonClick()
  {
    this.buttonClick = "the button was cliked";
  }

  onInputEvent(event: Event)
  {
    this.oneWayForDataBinding = (<HTMLInputElement>event.target).value;
  }

}
