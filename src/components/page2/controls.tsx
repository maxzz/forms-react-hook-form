import { ButtonHTMLAttributes, HTMLAttributes, HtmlHTMLAttributes, HTMLInputTypeAttribute, ReactNode } from "react";
import { createPortal } from "react-dom";
import { FieldErrors, FieldValues, UseFormRegisterReturn } from "react-hook-form";
import { classNames } from "../../utils/classnames";

type RegisterAndErrors<T extends FieldValues> = {
    registered: UseFormRegisterReturn;
    errors: FieldErrors<T>;
};

export function Input<T extends FieldValues>({ registered, errors }: RegisterAndErrors<T>) {
    const name = registered.name as keyof T;
    const error = errors[name]?.message;
    return (
        <div className="grid">
            <input className="px-4 py-2 rounded" {...registered} />
            <span className={classNames("text-xs text-[red] select-none", !error && 'invisible',)}><>{error}&nbsp;</></span>
        </div>
    );
}

export function Input2<T extends FieldValues>({ registered, errors, placeholder }: RegisterAndErrors<T> & { placeholder: string; }) {
    const name = registered.name as keyof T;
    const error = errors[name]?.message;
    return (
        <>
            <label className="relative">
                <input
                    className="py-1.5 w-full h-10 peer float-input border-slate-300 border rounded"
                    placeholder={placeholder}
                    {...registered}
                />
                <div className="float-label">
                    {placeholder}
                </div>
                
            </label>
            {/* <span className={classNames("text-xs text-[red] select-none", !error && 'invisible',)}><>{error}&nbsp;</></span> */}
        </>
    );
}

export type SelectOption = {
    label: React.ReactNode;
    value: string | number | string[];
};

export function Select<T extends FieldValues>({ registered, errors, options }: { registered: UseFormRegisterReturn; errors?: FieldErrors<T>; options: SelectOption[]; }) {
    return (
        <select className="px-4 py-2 h-10 rounded" {...registered}>
            {options.map(({ label, value }, idx) => (
                <option value={value} key={idx}>{label}</option>
            ))}
        </select>
    );
}

export function Radio({ registered, label, value }: { registered: UseFormRegisterReturn; label: ReactNode; value: string; }) {
    return (
        <label className="flex items-center gap-x-1 select-none">
            <input type="radio" className="px-4 py-2 w-5 h-5 accent-yellow-900 rounded" value={value} {...registered} />
            <span>{label}</span>
        </label>
    );
}

export function Button({ children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className="place-self-center mt-4 px-4 py-2 bg-yellow-500 border-yellow-500 border rounded select-none active:scale-y-95" {...rest}>
            {children}
        </button>
    );
}

export function DebugDisplay({ displayValues, className, ...rest }: { displayValues: unknown; } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("py-4 text-sm", className)} {...rest}>
            <pre>{JSON.stringify(displayValues, null, 4)}</pre>
        </div>
    );
}

export function ReactPortal({ children, containerSelector = "#portals-container" }: { children: ReactNode; containerSelector?: string | Element; }) {
    const el = typeof containerSelector === 'string' && document.querySelector(containerSelector);
    const containerEl = el || containerSelector as Element || document.body;
    return createPortal(children, containerEl);
}
