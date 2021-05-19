import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {
 private min_abv_data: any
 private max_ph_data: any
 private darkest_ebc: any
 private ferm_temp: any
 private avg_ferm_temp: any

  constructor() { }

  getCalcBeerData(data: any){
    
    if(data.length > 0) {

      this.min_abv_data = data.map((el:any) => { 
         return el.abv;
       });
       this.min_abv_data = Math.min(...this.min_abv_data);
   
       this.max_ph_data = data.map((el:any) => {
         return el.ph;
       });
       this.max_ph_data = Math.max(...this.max_ph_data);
   
       this.darkest_ebc = data.map((el:any) => {
         return el.ebc;
       });
       this.darkest_ebc = Math.max(...this.darkest_ebc);
   
       this.ferm_temp = data.map((el:any) => {
         return el.method.fermentation.temp.value;
       });
   
       this.avg_ferm_temp =
         this.ferm_temp.reduce((a:any, b:any) => {
           return a + b;
         }, 0) / this.ferm_temp.length;
   
       return [{min_abv_data: this.min_abv_data, 
                   max_ph_data: this.max_ph_data,
                   darkest_ebc: this.darkest_ebc,
                   avg_ferm_temp: this.avg_ferm_temp} ]
    } else {
      return [{min_abv_data: 'No data to display', 
      max_ph_data: 'No data to display',
      darkest_ebc: 'No data to display',
      avg_ferm_temp: 'No data to display'}
    ]
    }
  }
}
