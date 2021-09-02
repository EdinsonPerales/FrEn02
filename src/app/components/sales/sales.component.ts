import { Component, OnInit } from '@angular/core';
import { ClothesService } from 'src/app/services/clothes.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html'
})
export class SalesComponent implements OnInit {

  Clothesre    : any[] = [];
  sizes        : any[] = [];
  categories   : any[] = [];
  brands       : any[] = [];

  categoryId : string = "";
  brandId    : string = "";
  sizeId     : string = "";
  

  constructor( private _clothesService : ClothesService ) { 
    
    this.sizes = this._clothesService.getSizes();
    this.categories = this._clothesService.getCategories();
    this.brands = this._clothesService.getBrands();
  }

  ngOnInit(): void {
  }

  selectCategory( value : any ){
      this.categoryId = value.target.value;
      console.log(this.categoryId);
  }

  selectBrand( value : string ){

  }
  
  selectSize( value : string ){

  }
  
  onCarrera(e: any) {
    console.log(e.target.value);
    const idCategory = e.target.value;
    this.Clothesre = this._clothesService.getClothesByCategory(idCategory);
    console.log(this.Clothesre);
}

}
