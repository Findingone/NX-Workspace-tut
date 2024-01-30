import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: "react-convertor",
    template: "<span ></span> <ng-content></ng-content> ",
    standalone: true
}) export class ReactConversionComponent implements AfterViewInit {
    @Input() component: any;
    @Input() counter: any;
    @Output() handleClickEmitter = new EventEmitter();
    root: any;

    constructor(private elementRef: ElementRef) { }

    ngAfterViewInit(): void {
        this.root = ReactDOM.createRoot(this.elementRef.nativeElement);
        this.render();
    }

    render() {
        this.root.render(React.createElement(this.component, { handleClick: this.handleClick, counter: this.counter }));
    }

    handleClick = () => {
        this.handleClickEmitter.emit();
        this.render()
    }
}