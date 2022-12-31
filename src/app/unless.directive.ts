import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


//custom structural directive
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  //attention: property name must be equal to the selector
  @Input('appUnless') set unless(condition: boolean){ //make a setter method of the property unless. whenever the property changes, execute this function. 
    //Here we have to declare the setter method directly after var declaration (instead of declaring var and making setter method later)
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef); //create a view in this container. THe view in this case is our templateRef
    }else{
      this.vcRef.clear(); //remove from the DOM
    }
  }

  //template: what are we injecting? container: where do we inject our directive?
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
