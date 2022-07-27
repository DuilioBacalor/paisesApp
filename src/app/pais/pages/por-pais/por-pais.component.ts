import { Component } from '@angular/core';
import { country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {
termino:string="";
hayError:boolean=false;
paises:country[]=[];
  constructor(private paisService:PaisService) { }
  buscar(){
    this.hayError=false;
    this.paisService.buscarPais(this.termino).subscribe((paises) =>{
      this.paises=paises;
      console.log(paises);
    },(err)=>{this.hayError=true;
    this.paises=[];
    });
    // console.log(this.termino);
  }

  

}
