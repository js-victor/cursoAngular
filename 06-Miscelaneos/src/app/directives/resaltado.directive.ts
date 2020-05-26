import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  @Input('appResaltado') nuevoColor: string;

  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.nuevoColor || 'yellow');
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar(null);
    // this.elementRef.nativeElement.style.backgroundColor = null;
    // console.log(this.nuevoColor);
  }

  constructor(private elementRef: ElementRef) {
    // console.log('Directiva llamada');
    // elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  private resaltar(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;

  }



}
