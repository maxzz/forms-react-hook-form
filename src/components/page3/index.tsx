import { useForm } from "react-hook-form";
import { Input, Select, Radio, Button } from '../page2/controls';
import { classNames } from '../../utils/classnames';
import { defaultValues, selectOptions } from "../page2/controls-data";
import { createPortal } from "react-dom";
import { ReactNode } from "react";

function Form() {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({ defaultValues });

    function onSubmit(data: any) {
        return console.log(data);
    }

    const displayValues = watch();
    const moreDetail = displayValues.moreDetails;

    return (
        <div className="px-4 pt-8 w-full h-full flex flex-col">

            <div className="flex-1 grid place-items-center">
                <div className="border-yellow-700 border rounded shadow overflow-hidden">
                    <form className="pt-0.5 w-[420px] bg-yellow-400 grid gap-y-2 " onSubmit={handleSubmit(onSubmit)}>

                        <div className="px-4 py-2 text-xl font-semibold bg-yellow-500 rounded-t scale-y-110 tracking-tighter select-none">Form caption</div>

                        <div className="p-4">
                            {/* Simple inputs */}

                            <Input registered={register('example', { required: 'This field is required' })} errors={errors} />
                            <Input registered={register('exampleRequired', { required: 'This field is required' })} errors={errors} />

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

                            {/* Buttons */}

                            <div className="flex items-center justify-end gap-x-2">
                                <Button onClick={() => reset(defaultValues)}>Reset</Button>
                                <Button type="submit">OK</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="py-4 text-sm">
                <pre>{JSON.stringify(displayValues, null, 4)}</pre>
            </div>
        </div>
    );
}

function ReactPortal({ children, containerSelector = "#portals-container" }: { children: ReactNode; containerSelector?: string | Element; }) {
    const el = typeof containerSelector === 'string' && document.querySelector(containerSelector);
    const containerEl = el || containerSelector as Element || document.body;
    return createPortal(children, containerEl);
}

export function Page3_Form() {
    return (
        <div className="flex items-center justify-center text-yellow-900 bg-yellow-300">
            <ReactPortal>
                <Form />
            </ReactPortal>
        </div>
    );
}
