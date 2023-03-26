import { HTMLAttributes } from "react";
import { FieldErrors, useForm, UseFormRegister, UseFormWatch } from "react-hook-form";
import { classNames } from "../../utils/classnames";
import { Input, Select, Radio, Button, DebugDisplay } from "./controls";
import { Inputs, selectOptions } from "./controls-data";

function NamesGroup({ register, errors }: { register: UseFormRegister<Inputs>; errors: FieldErrors<Inputs>; }) {
    return (<>
        <Input registered={register('firstName', { required: 'This field is required' })} errors={errors} />
        <Input registered={register('lastName', { required: 'This field is required' })} errors={errors} />
    </>);
}

function OtherControlsGroup({ register, errors, watch }: { register: UseFormRegister<Inputs>; errors: FieldErrors<Inputs>; watch: UseFormWatch<Inputs>; }) {
    const moreDetail = watch('moreDetails');
    return (<>
        {/* Simple inputs */}

        <NamesGroup register={register} errors={errors} />

        {/* Select */}

        <label className="flex items-center space-x-1 select-none">
            <span>Title</span>
            <Select registered={register('title')} options={selectOptions} />
        </label>

        {/* Radio */}

        <div className="my-2 flex items-center gap-x-4">
            <Radio label="One" value="2" registered={register("radioIn", { required: true })} />
            <Radio label="Two" value="3" registered={register("radioIn", { required: true })} />
        </div>

        {/* Optional fields */}

        <label className="pt-2 flex items-center gap-x-2 select-none">
            <input className="w-5 h-5 accent-yellow-900" type="checkbox" {...register('moreDetails')} />
            <span>More controls..</span>
        </label>

        <div className={classNames(!moreDetail && 'invisible')}>
            <label className="mt-1 grid">
                <span>Optional data</span>
                <input className="px-4 py-2 rounded" {...register('interests')} />
            </label>
        </div>

    </>);
}

export function TestForm2({ defaultValues, className, ...rest }: { defaultValues: Inputs; } & HTMLAttributes<HTMLDivElement>) {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({ defaultValues });

    function onSubmit(data: any) {
        return console.log(data);
    }

    const displayValues = watch();

    return (
        <div className={classNames("px-4 pt-8 w-full h-full flex flex-col", className)} {...rest}>

            <div className="flex-1 grid place-items-center">
                <div className="border-yellow-700 border rounded shadow overflow-hidden">
                    <form className="pt-0.5 w-[420px] bg-yellow-400 grid gap-y-2 " onSubmit={handleSubmit(onSubmit)}>

                        <div className="px-4 py-2 text-xl font-semibold bg-yellow-500 rounded-t scale-y-110 tracking-tighter select-none">Form caption</div>

                        <div className="p-4">
                            <OtherControlsGroup register={register} errors={errors} watch={watch} />

                            {/* Buttons */}

                            <div className="flex items-center justify-end gap-x-2">
                                <Button onClick={() => reset(defaultValues)}>Reset</Button>
                                <Button type="submit">OK</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <DebugDisplay displayValues={displayValues} />
        </div>
    );
}
