import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { classNames } from '../../utils/classnames';

type Inputs = {
    example: string,
    exampleRequired: string,
};

const defaultValues: Inputs = {
    example: '123',
    exampleRequired: ''
};

function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ defaultValues });

    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    console.log(watch("example"));

    return (
        <form className="p-4 border-yellow-500 border rounded grid gap-y-2" onSubmit={handleSubmit(onSubmit)}>

            <div className="grid">
                <input className="px-4 py-2 rounded" defaultValue="test" {...register("example", { required: true })} />
                <span className={classNames("text-xs pb-4 text-red-500 select-none", !errors.example && 'invisible',)}>This field is required</span>
            </div>


            <div className="grid">
                <input className="px-4 py-2 rounded" {...register("exampleRequired", { required: true })} />
                <span className={classNames("text-xs pb-4 text-red-500 select-none", !errors.exampleRequired && 'invisible',)}>This field is required</span>
            </div>

            <input className="place-self-center px-2 py-2 border-slate-400 border rounded" type="submit" />
        </form>
    );
}

export function Page1_Form() {
    return (
        <div className="w-[420px] flex items-center justify-center bg-yellow-300">
            <Form />
        </div>
    );
}
