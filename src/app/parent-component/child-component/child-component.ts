import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css'
})
export class ChildComponent implements OnInit{
  @Input()
  passedData!: string;

  @Output() sendDataParents : EventEmitter<any> = new EventEmitter<any>()

  ngOnInit(){

  }
  sendData(){
this.sendDataParents.emit('hello from child')
  }

}
