import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recap-compte',
  templateUrl: './recap-compte.component.html',
  styleUrls: ['./recap-compte.component.css']
})
export class RecapCompteComponent implements OnInit {

  @Input() registerForm!:FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
