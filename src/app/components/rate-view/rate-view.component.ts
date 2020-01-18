import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rate-view',
  templateUrl: './rate-view.component.html',
  styleUrls: ['./rate-view.component.scss']
})
export class RateViewComponent implements OnInit {
  rateview: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.rateview = this.formBuilder.group({
      first: ['', Validators.required],
      second: ['', Validators.required],
      third: ['', Validators.required],
      fourth: ['', Validators.required],
      fifth: ['', Validators.required],
      sixth: ['', Validators.required],
      seventh: ['', Validators.required],
      eighth: ['', Validators.required],
      ninth: ['', Validators.required],
      tenth: ['', Validators.required],
      eleven: ['', Validators.required],
      twelve: ['', Validators.required],
      thirteen: ['', Validators.required],
      fourteen: ['', Validators.required],
      fifteen: ['', Validators.required],
      sixteen: ['', Validators.required],
      seventeen: ['', Validators.required],
      eighteen: ['', Validators.required],
      ninteen: ['', Validators.required],
      twenty: ['', Validators.required],
      twentyone: ['', Validators.required],
  });
  }
  get f() { return this.rateview.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.rateview.invalid) {
          return;
      }

      alert('SUCCESS!! :-)')
  }
}
