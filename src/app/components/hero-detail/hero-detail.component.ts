import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Address, Hero, states} from '../../data-model'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  heroForm: FormGroup; // <--- heroForm is of type FormGroup
  states = states;

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({ // <-- the parent FormGroup
      name: ['', Validators.required ], // <--- the FormControl called "name"
      address:this.fb.group(new Address()), // <-- a FormGroup with a new address,
      power: '',
      sidekick: ''
    });
  }
}
