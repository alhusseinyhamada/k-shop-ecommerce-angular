import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/Models/iproduct';
import { Location } from '@angular/common';
import { AppServicesService } from 'src/app/Services/app-services.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  prd:Iproduct | undefined=undefined;
  prdIdList:number[]=[];
  currPrdId:number=0;
  currIndex:number = 0;

  constructor(private prdServices:AppServicesService,
              private router:Router,
              private activateRoute:ActivatedRoute,
              private location:Location,
              

  ) {

  }

  ngOnInit(): void {
    //// snapshot solution
    // this.currPrdId = (this.activateRoute.snapshot.paramMap.get('pid'))?Number(this.activateRoute.snapshot.paramMap.get('pid')):0;
    // let founded =this.prdServices.getProductById(this.currPrdId);

    // if(founded){
    //   this.prd=founded;
    //   console.log(this.prd);

    // }else{
    //   alert("this product not found")
    //   this.location.back();
    // }
    ////subscribe solution
    this.activateRoute.paramMap.subscribe(paramMap=>{
      this.currPrdId = (paramMap.get('pid'))?Number(paramMap.get('pid')):0;
      let founded =this.prdServices.getProductById(this.currPrdId);

      if(founded){
        this.prd=founded;
        console.log(this.prd);

      }else{
        alert("this product not found")
        this.location.back();
      }

    })

    this.prdIdList= this.prdServices.getPrdList();
    console.log(this.prdIdList)
  }

  goBack(){
    this.location.back();
  }
  goPrevious(){
    this.currIndex = this.prdIdList.findIndex(prd=>prd==this.currPrdId);
    this.router.navigate(['/product',this.prdIdList[--this.currIndex]]);
  }
  goNext(){
    this.currIndex = this.prdIdList.findIndex(prd=>prd==this.currPrdId);
    this.router.navigate(['/product',this.prdIdList[++this.currIndex]]);
  }

////first solution
//   goSearch(name:string){

//     let founded = this.prdServices.prdList.find(pd=>pd.name==name);
//     if(founded)
// {
//   this.prd=founded;
// }else{
//   alert('product not founded');
// }

// }


////second solution
goSearch(name:string){
  let founded = this.prdServices.searchPrdByName(name);
  if(founded){
    this.prd=founded;
  }else{
    alert('product not founded');
  }
}



}
