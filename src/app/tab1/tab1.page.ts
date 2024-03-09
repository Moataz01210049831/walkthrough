import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JoyrideService }from 'ngx-joyride';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit  {
  constructor(private readonly joyrideService: JoyrideService) {}

    onClick() {
      console.log("test")
      
        this.joyrideService.startTour(
          { steps: ['box1', 'box2']}
        )
    }
ngOnInit(): void {
  this.onClick();
}
}