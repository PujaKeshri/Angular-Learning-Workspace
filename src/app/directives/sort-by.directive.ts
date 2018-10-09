import {Directive, ElementRef, EventEmitter, Input, Output, HostListener} from '@angular/core';

@Directive({
	selector:'[sortByField]'
})
export class SortByDirective{

	private selectedField: string;

	@Output() 
	sorter:EventEmitter<string> = new EventEmitter<string>();

	constructor(private el:ElementRef){
		//should not use : use renderer instead of ElementRef
		//el.nativeElement.style='width:98%;background:#f8f8f8;border:#b8b8b8 solid 2px;padding:10px;margin:1%';
	}

	@Input('sortByField')
	set sortBy(value:string){
		this.selectedField = value;
	}

	@HostListener('click')
	onclick(){
		event.preventDefault();
		this.sorter.emit(this.selectedField);
	}
}
