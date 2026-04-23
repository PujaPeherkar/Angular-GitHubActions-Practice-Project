import { AfterViewInit, Component,HostListener, ElementRef, OnInit, QueryList, ViewChild, viewChildren, ViewChildren } from '@angular/core';
import { ChildComponent } from './child-component/child-component';
import { CommonService } from '../common-service';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { ExamplePipe } from '../example-pipe';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-parent-component',
  imports: [ChildComponent,CdkDrag,ExamplePipe,NgFor],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css',
  providers: [CommonService,ExamplePipe]
})
export class ParentComponent implements OnInit{
  constructor(private commonService:CommonService){}
parentData : string ='Hello from parent';
  myData: any;
  text = 'Angular is a powerful framework'
  email = 'sonawanepuja@gmail.com'
 
names = ['puja', 'sonal', 'sohan']
ngOnInit(){
this.commonService.getMockData().subscribe(res => {
  const data = res;
  console.log("mockdata",data)
})
}


recivedDataFromChoild(data:any){
this.myData = data
}
// -----------------------------------------------------------------------------------
  position = { x: 100, y: 100 }; // initial position
  dragging = false;
  offset = { x: 0, y: 0 };

  startDrag(event: MouseEvent) {
    this.dragging = true;
    this.offset = {
      x: event.clientX - this.position.x,
      y: event.clientY - this.position.y
    };
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.dragging) {
      this.position.x = event.clientX - this.offset.x;
      this.position.y = event.clientY - this.offset.y;
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.dragging = false;
  }



}
