import { SelectOption } from "./controls";

export type Inputs = {
    name: string,
    firstName: string,
    lastName: string,
    radioIn: string;
    title: string;
    moreDetails: boolean;
    interests: string;
};

export const defaultValues: Inputs = {
    name: 'Max Z.',
    firstName: 'Max',
    lastName: '',
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

export function mergeDefaultAndSaved<T extends {}>(def: T, saved: T): T {
    const defKeys = Object.keys(def) as (keyof T)[];
    const res = defKeys.map((key) => saved[key] !== undefined ? saved[key] : def[key]);
    return res as unknown as T;
}
