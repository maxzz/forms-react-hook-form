import { SelectOption } from "./controls";

export type Inputs = {
    example: string,
    exampleRequired: string,
    radioIn: string;
    title: string;
    moreDetails: boolean;
    interests: string;
};

export const defaultValues: Inputs = {
    example: 'Max',
    exampleRequired: '',
    radioIn: '3',
    title: 'Dr',
    moreDetails: false,
    interests: 'Some additional interests'
};

export const selectOptions: SelectOption[] = [
    { label: 'Mr', value: 'Mr' },
    { label: 'Mrs', value: 'Mrs' },
    { label: 'Miss', value: 'Miss' },
    { label: 'Dr', value: 'Dr' },
];
