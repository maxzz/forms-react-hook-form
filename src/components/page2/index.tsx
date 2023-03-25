import React, { HTMLAttributes, HTMLInputTypeAttribute, InputHTMLAttributes, ReactNode } from 'react';
import { useForm, SubmitHandler, UseFormRegister, FieldErrors, UseFormRegisterReturn } from "react-hook-form";
import { classNames } from '../../utils/classnames';

type Inputs = {
    example: string,
    exampleRequired: string,
    radioIn: string;
    title: string;
    moreDetails: boolean;
    interests: string;
};

const defaultValues: Inputs = {
    example: 'Max',
    exampleRequired: '',
    radioIn: '3',
    title: 'Dr',
    moreDetails: false,
    interests: 'Some additional interests'
};

function Input({ registered, errors }: { registered: UseFormRegisterReturn; errors: FieldErrors<Inputs>; }) {
    const name = registered.name as keyof Inputs;
    const error = errors[name]?.message;
    return (
        <div className="grid">
            <input className="px-4 py-2 rounded" {...registered} />
            <span className={classNames("text-xs text-[red] select-none", !error && 'invisible',)}>{error}&nbsp;</span>
        </div>
    );
}

type SelectOption = {
    label: React.ReactNode;
    value: string | number | string[];
};

function Select({ registered, errors, options }: { registered: UseFormRegisterReturn; errors?: FieldErrors<Inputs>; options: SelectOption[]; }) {
    return (
        <select className="px-4 py-2 h-10 rounded" {...registered}>
            {options.map(({ label, value }, idx) => (
                <option value={value} key={idx}>{label}</option>
            ))}
        </select>
    );
}

function Radio({ registered, label, value }: { registered: UseFormRegisterReturn; label: ReactNode; value: string; }) {
    return (
        <label className="flex items-center gap-x-1 select-none">
            <input type="radio" className="px-4 py-2 w-5 h-5 accent-yellow-900 rounded" value={value} {...registered} />
            <span>{label}</span>
        </label>
    );
}

function Form() {
    const { register, handleSubmit, watch, reset, getValues, formState: { errors } } = useForm({ defaultValues });

    function onSubmit(data: any) {
        return console.log(data);
    }

    console.log(`watch("example")='${watch("example")}'`);

    const moreDetail = watch("moreDetails");

    return (
        <div className="px-4 pt-8 w-full h-full flex flex-col">

            <div className="flex-1">
                <div className="border-yellow-700 border rounded shadow overflow-hidden">
                    <form className="pt-0.5 bg-yellow-400 grid gap-y-2 " onSubmit={handleSubmit(onSubmit)}>

                        <div className="px-4 py-2 text-xl font-semibold bg-yellow-500 rounded-t scale-y-110 tracking-tighter select-none">Form caption</div>

                        <div className="p-4">
                            {/* Simple inputs */}

                            <Input registered={register('example', { required: 'This field is required' })} errors={errors} />
                            <Input registered={register('exampleRequired', { required: 'This field is required' })} errors={errors} />

                            {/* Select */}

                            <label className="flex items-center space-x-1 select-none">
                                <span>Title</span>
                                <Select
                                    registered={register('title')}
                                    options={[
                                        { label: 'Mr', value: 'Mr' },
                                        { label: 'Mrs', value: 'Mrs' },
                                        { label: 'Miss', value: 'Miss' },
                                        { label: 'Dr', value: 'Dr' },
                                    ]}
                                />
                            </label>

                            {/* Radio */}

                            <div className="my-2 flex items-center gap-x-4">
                                <Radio label="One" value="2" registered={register("radioIn", { required: true })} />
                                <Radio label="Two" value="3" registered={register("radioIn", { required: true })} />

                                {/* <label className="flex items-center gap-x-1 select-none">
                                    <input type="radio" className="px-4 py-2 w-5 h-5 accent-yellow-900 rounded" value="2" {...register("radioIn", { required: true })} />
                                    <span>One</span>
                                </label>
                                <label className="flex items-center gap-x-1 select-none">
                                    <input type="radio" className="px-4 py-2 w-5 h-5 accent-yellow-900 rounded" value="3" {...register("radioIn", { required: true })} />
                                    <span>Two</span>
                                </label> */}
                            </div>

                            {/* Optional fields */}

                            <label className="pt-2 flex items-center gap-x-2 select-none">
                                <input className="w-5 h-5 accent-yellow-900" type="checkbox" {...register('moreDetails')} />
                                <span>More controls..</span>
                            </label>

                            {moreDetail && (
                                <div>
                                    <label className="mt-1 grid">
                                        <span>Optional data</span>
                                        <input className="px-4 py-2 rounded" {...register('interests')} />
                                    </label>
                                </div>
                            )}

                            {/* Buttons */}

                            <div className="flex items-center justify-end gap-x-2">
                                <button
                                    className="place-self-center mt-4 px-4 py-2 bg-yellow-500 border-yellow-500 border rounded select-none active:scale-y-95"
                                    value="Reset" onClick={() => reset(defaultValues)}
                                >
                                    Reset
                                </button>
                                <input
                                    className="place-self-center mt-4 px-4 py-2 bg-yellow-500 border-yellow-500 border rounded select-none active:scale-y-95"
                                    type="submit" value="OK"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="py-4 text-sm">
                <pre>{JSON.stringify(getValues(), null, 4)}</pre>
            </div>
        </div>
    );
}

export function Page2_Form() {
    return (
        <div className="w-[420px] flex items-center justify-center text-yellow-900 bg-yellow-300">
            <Form />
        </div>
    );
}
