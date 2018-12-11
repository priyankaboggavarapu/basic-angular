import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Minhaj';
 data=[
  {date:'11-12-2018',type:'deposit',amount:1000},
  {date:'10-2-2015',type:'withdraw',amount:3897},
  {date:'12-1-2016',type:'deposit',amount:676},
  {date:'11-8-2019',type:'deposit',amount:9083},
  {date:'11-5-2019',type:'deposit',amount:239098}
];
filterData=[];
fromDate:any;
toDate:any;
fromConvert:any;
toConvert:any;



dispData(){
  console.log('button clicked');
  // console.log('from Date',this.fromDate);
  // console.log('To date',this.toDate);
  this.fromConvert=new Date(this.fromDate).getTime();
  this.toConvert=new Date(this.toDate).getTime();
  // this.filterData=[...this.data];
  
  
this.data.forEach((x,index)=>{  
     let userDate=new Date(x.date).getTime();
     if(userDate>this.fromConvert && userDate<this.toConvert){
       console.log('userDate in for each', new Date(userDate),index);
      this.filterData.push(x)}  
  })  
console.log('filter data ',this.filterData)


}
}

