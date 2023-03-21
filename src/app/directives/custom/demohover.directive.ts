import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[demohover]',
})
export class DemohoverDirective implements OnInit {
  el: any;
  prevBoxShadow: string = '';
  @Input() demohover: string = 'lightblue';

  constructor(private element: ElementRef) {
    this.el = this.element.nativeElement;
  }
  ngOnInit(): void {}

  @HostListener('mouseenter') mouseenter() {
    this.prevBoxShadow = this.el.style.boxShadow;
    this.el.style.boxShadow = `1px 2px 3px ${this.demohover}`;
  }

  @HostListener('mouseout') mouseout() {
    this.el.style.boxShadow = this.prevBoxShadow;
    this.prevBoxShadow = '';
  }
}
