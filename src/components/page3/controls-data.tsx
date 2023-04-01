import { SelectOption } from "../page2-controls";
import { Form2Inputs } from "../page2/controls-data";

export type Form3Inputs = Form2Inputs;

export const form3DefaultValues: Form3Inputs = {
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
