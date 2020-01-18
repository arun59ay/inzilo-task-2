import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-pricing-options',
  templateUrl: './pricing-options.component.html',
  styleUrls: ['./pricing-options.component.scss']
})
export class PricingOptionsComponent implements OnInit {
disabledValue=true;
  data: any[] = [];
  constructor(private services: ServiceService) { }

  ngOnInit() {
    this.pricingData();
  }
  pricingData() {
    this.services.getJSON().subscribe(data => {
      if (data) {
        this.data = data.dataList;

        this.data.forEach((list) =>{
              list['disabled'] = true;
        });       
      } else {
        console.log("error");
      }

    });
  }

  disableEnable(value){
    if(value.disabled === true){
      value.disabled=false;
    }else{ value.disabled=true};
  }


  addingValue() {
    const propertyDefineArray = {
      "id": null,
      "name": "",
      "saving": "",
      "residuals": "",
      "rate": "",
    };
    propertyDefineArray['disabled']=false;
    const lengthOfArray = this.data.length;
    propertyDefineArray.id = lengthOfArray + 1;
    this.data.push(propertyDefineArray);
  }


  newArrayAfterDelete = [];

  clickedSubTract(list, i) {
    this.data.forEach((element, index) => {
      if (list.id === element.id) {
        this.data.splice(index, 1);
      }
    });
  }
}

