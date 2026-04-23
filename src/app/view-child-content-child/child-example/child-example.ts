
import { NgFor } from '@angular/common';
import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, Input, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-child-example',
  imports: [NgFor],
  templateUrl: './child-example.html',
  styleUrl: './child-example.css'
})
export class ChildExample implements OnInit, AfterContentInit{
counter:number = 0 ;
@Input() saleProduct:any
@ContentChildren('head')contentHead!:QueryList<any>
ngOnInit(){

}
ngAfterContentInit(){
  this.contentHead.first.nativeElement.setAttribute('style','color:red')
 // this.contentHead.last.nativeElement.setAttribute('style','color:pink')
}
increment(){
this.counter++;
}
decrement(){
  this.counter--;
}
}
