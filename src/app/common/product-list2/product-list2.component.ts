import { Component, OnInit } from '@angular/core';
import { ProductCard } from 'src/app/model/product-card';

@Component({
  selector: 'app-product-list2',
  templateUrl: './product-list2.component.html',
  styleUrls: ['./product-list2.component.scss']
})
export class ProductList2Component implements OnInit {

  cards: ProductCard[] = [
    {id:1, image:'./assets/img/ciao.jpg', imageAlt: "Card image cap", cardTitle: "CIAO maszk", cardText:"Hidd el nekem, ennyiért ez nem pénzrablás.", price: 3990},
    {id:2, image:'./assets/img/spider.jpg', imageAlt: "", cardTitle: "SPIDER maszk", cardText:"Ezzel a maszkkal mindenkit behálózol.", price: 4990 },
    {id:3, image:'./assets/img/lecter.jpg', imageAlt: "", cardTitle: "LECTER maszk", cardText:"Viselése igazán lebilincselő élmény.", price: 1990 },
    {id:4, image:'./assets/img/hulk.jpg', imageAlt: "", cardTitle: "HULK maszk", cardText:"Habár zöld, ezzel az arcodon, garantáltan nem tűnsz majd éretlennek.", price: 2590 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
//id: number;
//image: string;
//imageAlt: string;
//cardTitle: string;
//cardText: string;
//price: number;
