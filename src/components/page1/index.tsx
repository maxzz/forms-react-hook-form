import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { classNames } from '../../utils/classnames';

type Inputs = {
    example: string,
    exampleRequired: string,
    radioIn: string;
    title: string;
    moreDetails: boolean;
};

const defaultValues: Inputs = {
    example: '123',
    exampleRequired: '11',
    radioIn: '3',
    title: 'Dr',
    moreDetails: false,
};

function Form() {
    const { register, handleSubmit, watch, reset, getValues, formState: { errors } } = useForm({ defaultValues });

    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    console.log(watch("example"));

    return (
        <div className="px-4 w-full">
            <form className="p-4 bg-yellow-400 border-yellow-500 border rounded shadow grid gap-y-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="pb-4">Form caption</div>

                <div className="grid">
                    <input className="px-4 py-2 rounded" defaultValue="test" {...register("example", { required: true })} />
                    <span className={classNames("text-xs text-[red] select-none", !errors.example && 'invisible',)}>This field is required</span>
                </div>

                <div className="grid">
                    <input className="px-4 py-2 rounded" {...register("exampleRequired", { required: true })} />
                    <span className={classNames("text-xs text-[red] select-none", !errors.exampleRequired && 'invisible',)}>This field is required</span>
                </div>

                <div className="flex items-center gap-x-4">
                    <label className="flex items-center gap-x-1">
                        <input type="radio" className="px-4 py-2 w-5 h-5 accent-yellow-900 rounded" value="2" {...register("radioIn", { required: true })} />
                        <span>One</span>
                    </label>
                    <label className="flex items-center gap-x-1">
                        <input type="radio" className="px-4 py-2 w-5 h-5 accent-yellow-900 rounded" value="3" {...register("radioIn", { required: true })} />
                        <span>Two</span>
                    </label>
                </div>

                <label className="flex items-center space-x-1">
                    <span>Title</span>
                    <select className="px-4 py-2 h-10 rounded" {...register('title')}>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Dr">Dr</option>
                    </select>
                </label>

                <label className="flex items-center gap-x-2">
                    <input className="w-5 h-5 accent-yellow-900" type="checkbox" {...register('moreDetails')} />
                    <span>More controls..</span>
                </label>

                <div className="flex items-center justify-end gap-x-2">
                    <input
                        className="place-self-center mt-4 px-4 py-2 bg-yellow-500 border-yellow-500 border rounded active:scale-y-[.97]"
                        type="reset" value="Reset" onClick={() => reset()}
                    />
                    <input
                        className="place-self-center mt-4 px-4 py-2 bg-yellow-500 border-yellow-500 border rounded active:scale-y-[.97]"
                        type="submit" value="OK"
                    />
                </div>

            </form>
            <div className="">
                <pre>{JSON.stringify(getValues(), null, 4)}</pre>
            </div>
        </div>
    );
}

export function Page1_Form() {
    return (
        <div className="w-[420px] flex items-center justify-center text-yellow-900 bg-yellow-300">
            <Form />
        </div>
    );
}
