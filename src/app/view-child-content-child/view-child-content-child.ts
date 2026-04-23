import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildExample } from './child-example/child-example';

@Component({
  selector: 'app-view-child-content-child',
  imports: [ChildExample,],
  templateUrl: './view-child-content-child.html',
  styleUrl: './view-child-content-child.css'
})
export class ViewChildContentChild {
   @ViewChild('highlight')marker!: ElementRef;
  @ViewChildren('second')markerss!:QueryList<any>;
  @ViewChild('childCounter')child!:ChildExample

  products = [
  { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
  { id: 2, name: "Phone", price: 25000, category: "Electronics" },
  { id: 3, name: "Shoes", price: 3000, category: "Fashion" },
  { id: 4, name: "Watch", price: 5000, category: "Accessories" },
  { id: 5, name: "Book", price: 700, category: "Education" }
];

  topProduct = [
  { id: 1, name: "Laptop", price: 55000, category: "TopElectronics" },
  { id: 2, name: "Phone", price: 25000, category: "TopElectronics" },
  { id: 3, name: "Shoes", price: 3000, category: "TopFashion" },
  { id: 4, name: "Watch", price: 5000, category: "TopAccessories" },
  { id: 5, name: "Book", price: 700, category: "TopEducation" }
];

ngAfterViewInit(){
  console.log(this.marker)
  console.log(this.markerss)
  this.marker.nativeElement.style.color="red"
  this.markerss.first.nativeElement.style.color='yellow'
   this.markerss.last.nativeElement.style.color='pink'
}

inc(){
  this.child.increment()
}
dec(){
  this.child.decrement()
}
}
