import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
    @HostListener('mouseenter') mouseover(){
        this.backgroundColor = 'yellow';
    };
    @HostListener('mouseleave') mouseleave(){
        this.backgroundColor = 'green';
    };
    @HostBinding('style.backgroundColor') get setColor(){
        return this.backgroundColor;
    };
    private backgroundColor = 'green';
    constructor() {
  }

}
