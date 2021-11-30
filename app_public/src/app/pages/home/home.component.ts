import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  titulo= "Bienvenidos a ByE"; 
  imagen1 = "/images/carrusel1.png";
  imagen2 = "/images/carrusel2.png";
  imagen3 = "/images/carrusel3.png";
  imagen4= "/images/golosinas.png";
  titulo2="Golosinas";
  descripcion1="Encuentra combos de golosinas para ti";
  imagen5= "/images/peluches.png";
  titulo3="Peluches";
  descripcion2="Encuentra un peluche para ti";
  imagen6="/images/skincare.png";
  titulo4="Skincare";
  descripcion3="Cuida tu piel con nosotros";
  

  constructor() { }

  ngOnInit(): void {

  }

}
