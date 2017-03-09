import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
    @HostListener('mouseenter') mouseover(){
        this.backgroundColor = this.highlightColor;
    };
    @HostListener('mouseleave') mouseleave(){
        this.backgroundColor = this.defaultColor;
    };
    @HostBinding('style.backgroundColor') get setColor(){
        return this.backgroundColor;
    };
    @Input() defaultColor = 'green';
    @Input() highlightColor = 'yellow';
    private backgroundColor: string;
    constructor() {
  }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
}
