import React, { HTMLAttributes, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import { useForm, SubmitHandler, UseFormRegister, FieldErrors } from "react-hook-form";
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
    exampleRequired: '123',
    radioIn: '3',
    title: 'Dr',
    moreDetails: false,
    interests: 'Some additional interests'
};

function Input({ name, register, errors }: { name: keyof Inputs; register: UseFormRegister<Inputs>, errors: FieldErrors<Inputs>; } & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="grid">
            <input className="px-4 py-2 rounded" {...register(name, { required: 'This field is required' })} />
            <span className={classNames("text-xs text-[red] select-none", !errors[name] && 'invisible',)}>errors[name]</span>
        </div>
    );
}

function Form() {
    const { register, handleSubmit, watch, reset, getValues, formState: { errors } } = useForm({ defaultValues });

    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    console.log(watch("example"));

    const moreDetail = watch("moreDetails");

    return (
        <div className="px-4 pt-8 w-full h-full flex flex-col">

            <div className="flex-1">
                <div className="border-yellow-700 border rounded shadow overflow-hidden">
                    <form className="pt-0.5 bg-yellow-400 grid gap-y-2 " onSubmit={handleSubmit(onSubmit)}>
                        <div className="px-4 py-2 text-xl font-semibold bg-yellow-500 rounded-t scale-y-110 tracking-tighter">Form caption</div>

                        <div className="p-4">
                            {/* Simple inputs */}

                            <Input name="example" register={register} errors={errors} />
                            {/* <div className="grid">
                                <input className="px-4 py-2 rounded" {...register("example", { required: true })} defaultValue="test from def. value" />
                                <span className={classNames("text-xs text-[red] select-none", !errors.example && 'invisible',)}>This field is required</span>
                            </div>
                            */}

                            <div className="grid">
                                <input className="px-4 py-2 rounded" {...register("exampleRequired", { required: true })} />
                                <span className={classNames("text-xs text-[red] select-none", !errors.exampleRequired && 'invisible',)}>This field is required</span>
                            </div>

                            {/* Select */}

                            <label className="flex items-center space-x-1">
                                <span>Title</span>
                                <select className="px-4 py-2 h-10 rounded" {...register('title')}>
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Miss">Miss</option>
                                    <option value="Dr">Dr</option>
                                </select>
                            </label>

                            {/* Radio */}

                            <div className="my-2 flex items-center gap-x-4">
                                <label className="flex items-center gap-x-1">
                                    <input type="radio" className="px-4 py-2 w-5 h-5 accent-yellow-900 rounded" value="2" {...register("radioIn", { required: true })} />
                                    <span>One</span>
                                </label>
                                <label className="flex items-center gap-x-1">
                                    <input type="radio" className="px-4 py-2 w-5 h-5 accent-yellow-900 rounded" value="3" {...register("radioIn", { required: true })} />
                                    <span>Two</span>
                                </label>
                            </div>

                            {/* Optional fields */}

                            <label className="pt-2 flex items-center gap-x-2">
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
                                    className="place-self-center mt-4 px-4 py-2 bg-yellow-500 border-yellow-500 border rounded active:scale-y-95"
                                    value="Reset" onClick={() => reset(defaultValues)}
                                >
                                    Reset
                                </button>
                                <input
                                    className="place-self-center mt-4 px-4 py-2 bg-yellow-500 border-yellow-500 border rounded active:scale-y-95"
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
