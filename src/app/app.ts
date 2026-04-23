import { Component, signal, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent-component/parent-component';
import { ViewChildContentChild } from './view-child-content-child/view-child-content-child';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ParentComponent,ViewChildContentChild,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practice_project');
}
