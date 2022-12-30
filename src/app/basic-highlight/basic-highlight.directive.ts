import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]' //selector by attribute is with []
})
export class BasicHighlightDirective implements OnInit{
    //with angular we can inject the HTML element (where we will use this directive) into this directive.ts
    constructor(private elementRef: ElementRef){
        //better: change the element in the onInit function
    }

    ngOnInit() {
        console.log('ng on init fired');
        //better solution: use Renderer
        this.elementRef.nativeElement.style.backgroundColor = 'green'; //again: camelCase instead of background-color
    }
}