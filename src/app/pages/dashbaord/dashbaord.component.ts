import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.scss']
})
export class DashbaordComponent implements OnInit {

  constructor(private route:Router,private service:ServiceService) { }

responseFormData:any;

  ngOnInit() {
    if(localStorage.getItem("id") === null) return this.route.navigate(['/login']);
    return this.responseFormData=this.service.getLoginFOrmData;
  }
}
