import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
    constructor(private elementRef: ElementRef) {
        this.elementRef.nativeElement.style.backgroundColor = 'purple'
  }

}
