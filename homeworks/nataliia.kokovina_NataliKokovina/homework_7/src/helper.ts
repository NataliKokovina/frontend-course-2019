export function addInvalid(item: HTMLInputElement) {
    return item.classList.add('invalid');
}

export function addSubmitFormMes(item: HTMLInputElement) {
    return item.classList.add('submitForm');
}

export function cleared(item: HTMLInputElement) {
    if (item.classList.contains('invalid')) {
        item.classList.remove('invalid');
    }
}

export function clearedSubmitMes(item: HTMLInputElement) {
    if (item.classList.contains('submitForm')) {
        item.classList.remove('submitForm');
    }
}
