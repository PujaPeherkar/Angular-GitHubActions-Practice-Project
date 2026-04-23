import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  private isDragging = false;
  private startX = 0;
  private startY = 0;
  private initialLeft = 0;
  private initialTop = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Ensure the element is absolutely positioned
    this.renderer.setStyle(this.el.nativeElement, 'position', 'absolute');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'grab');
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.clientX;
    this.startY = event.clientY;

    const rect = this.el.nativeElement.getBoundingClientRect();
    this.initialLeft = rect.left;
    this.initialTop = rect.top;

    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'grabbing');
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;

    const deltaX = event.clientX - this.startX;
    const deltaY = event.clientY - this.startY;

    const newLeft = this.initialLeft + deltaX;
    const newTop = this.initialTop + deltaY;

    this.renderer.setStyle(this.el.nativeElement, 'left', `${newLeft}px`);
    this.renderer.setStyle(this.el.nativeElement, 'top', `${newTop}px`);
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isDragging = false;
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'grab');
  }
}
