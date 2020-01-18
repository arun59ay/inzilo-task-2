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

  
  // ngOnChanges(){
  //   console.log("clicked on changes")
  // }

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
      
        console.log("data printing ............",this.data);
       
      } else {
        console.log("error");
      }

    });
  }

  disableEnable(value){
    // this.ngOnChanges();
    // debugger;
    console.log(value,"hdsjfsdhgf")
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
    // console.log(this.pricing.length,"......length");
    propertyDefineArray.id = lengthOfArray + 1;
    console.log(propertyDefineArray.id)
    console.log(propertyDefineArray, ".......property defining")
    this.data.push(propertyDefineArray);
    console.log(this.data, "....pricing")
  }


  newArrayAfterDelete = [];

  clickedSubTract(list, i) {
    console.log("i======================================", list);
    this.data.forEach((element, index) => {
      if (list.id === element.id) {
        this.data.splice(index, 1);
      }
    });
    console.log(this.data, "....pricing")
  }
}

