import { TodoFormComponent } from './todo-form.component';
import { FormBuilder } from '@angular/forms';

xdescribe('TodoFormComponent', () => {
	let component: TodoFormComponent;

	beforeEach(() => {
		component = new TodoFormComponent(new FormBuilder());
	});

	it('Should create a form with 2 controls', () => {
		expect(component.form.contains('name')).toBeTruthy();
		expect(component.form.contains('email')).toBeTruthy();
	});

	it('Should make the name control required', () => {
		const control = component.form.get('name');

		control.setValue('');

		expect(control.valid).toBeFalsy();
	});

	it('Should make the Email control invalid', () => {
		const control = component.form.get('email');

		control.setValue('khushal.kapoor');

		expect(control.valid).toBeFalsy();
	});

	it('Should make the Email control valid', () => {
		const control = component.form.get('email');

		control.setValue('khushal.kapoor@nagarro.com');

		expect(control.valid).toBeTruthy();
	});
});
