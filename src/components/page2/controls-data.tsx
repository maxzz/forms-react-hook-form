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

export function mergeDefaultAndSaved(def: Inputs, saved: Inputs): Inputs {
    const defKeys = Object.keys(def) as (keyof Inputs)[];

    const res = defKeys.map((key) => {
        return saved[key] !== undefined ? saved[key] : def[key];
    });

    return res as unknown as Inputs;
}
// function mergeDefaultAndSaved(def: Inputs, saved: Inputs) {
//     const defKeys = Object.keys(def) as (keyof Inputs)[];
//     defKeys.forEach((key) => {
//         const v = saved[key];
//         if (v !== undefined) {
//             def[key] = v;
//             // let a = def[key];
//             // a = v;
//         }
//     });
// }