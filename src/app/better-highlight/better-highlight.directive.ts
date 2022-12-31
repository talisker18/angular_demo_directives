import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  //alternative to Renderer2
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor; //access the style property of an html element. make same assignment in ngOnInit again so the override to yellow (in .html file) works

  @HostListener('mouseenter') mouseover(eventData: Event){ //mouseenter = event name
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue'); //using Renderer2
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){ //mouseenter = event name
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent'); //using Renderer2
    this.backgroundColor = this.defaultColor;
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    this.backgroundColor = this.defaultColor;
  }

}
