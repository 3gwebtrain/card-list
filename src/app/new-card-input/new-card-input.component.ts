import { Component, EventEmitter, OnInit, Output, HostListener, ViewChild } from '@angular/core';
import {NgForm, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { takeWhile, debounceTime, filter } from 'rxjs/operators';


@Component({
	selector: 'app-new-card-input',
	templateUrl: './new-card-input.component.html',
	styleUrls: ['./new-card-input.component.scss'],
	host: {'class': 'col-4'}
})
export class NewCardInputComponent implements OnInit {

	newCardForm: FormGroup;
	@ViewChild('form') public form:NgForm;

	constructor(fb:FormBuilder) {
		this.newCardForm = fb.group({
			'text': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
		});
	}

	public newCard:any = {text:''}

	@Output() onCardAdd = new EventEmitter<string>();

	@HostListener('document:keypress', ['$event'])
	handleKeyboardEvent(event: KeyboardEvent) {
		if (event.code === "Enter" && this.newCardForm.valid) {
			this.addCard(this.newCardForm.controls['text'].value);
		}
	}

	addCard(text) {
		this.onCardAdd.emit(text);
		this.newCardForm.controls['text'].setValue('');
	}



	ngOnInit() {}

}
