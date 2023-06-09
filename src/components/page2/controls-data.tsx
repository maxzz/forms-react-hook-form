import { SelectOption } from "../page2-shared";

export type FieldInForm = {
    type: string;
    disp: string;
    value: string;
}

export type Form2Inputs = {
    name: string,
    firstName: string,
    lastName: string,
    radioIn: string;
    title: string;
    moreDetails: boolean;
    details: string;
    fields: FieldInForm[];
};

export const form2DefaultValues: Form2Inputs = {
    name: 'Max Z.',
    firstName: 'Max',
    lastName: '',
    radioIn: '3',
    title: 'Dr',
    moreDetails: false,
    details: 'Some additional details',
    fields: [],
};

export const selectOptions: SelectOption[] = [
    { label: 'Mr', value: 'Mr' },
    { label: 'Mrs', value: 'Mrs' },
    { label: 'Miss', value: 'Miss' },
    { label: 'Dr', value: 'Dr' },
];
