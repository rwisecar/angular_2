import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <p>
      lifecycle Works!
    </p>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnChanges() {
      this.log('ngOnChanges');
  }

  ngOnInit() {
      this.log('ngOnChanges');
  }

  ngDoCheck(){
      this.log('ngOnChanges');
  }

  ngAfterContentInit() {
      this.log('ngOnChanges');
  }

  ngAfterContentChecked() {
      this.log('ngOnChanges');
  }

  ngAfterViewInit(){
      this.log('ngOnChanges');
  }

  ngAfterViewChecked(){
      this.log('ngOnChanges');
  }

  ngOnDestroy(){
      this.log('ngOnChanges');
  }

  private log(hook: string){
      console.log(hook);
  }
}
