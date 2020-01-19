import { isValid } from './validation';

interface FormValue {
    [key: string]: string,
}

interface Form {
    firstName: HTMLInputElement,
    lastName: HTMLInputElement,
    email: HTMLInputElement,
    phone: HTMLInputElement,
    age: HTMLInputElement,
    [key: string]: HTMLInputElement
}

function submitForm(event: Event) {
    event.preventDefault();

    let formValue = {} as FormValue;

    const form = {
        firstName: document.querySelector('#firstName'),
        lastName: document.querySelector('#lastName'),
        email: document.querySelector('#email'),
        phone: document.querySelector('#phone'),
        age: document.querySelector('#age'),
    } as Form;

    if (isValid(form)) {
        Object.keys(form).forEach((key) => {
            formValue[key] = form[key].value;
        });

        console.log(formValue);
    }
}

document.querySelector('.form_button').addEventListener('click', submitForm);
