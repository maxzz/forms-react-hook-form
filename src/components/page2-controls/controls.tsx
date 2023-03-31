import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { createPortal } from "react-dom";
import { FieldErrors, FieldValues, UseFormRegisterReturn } from "react-hook-form";
import { classNames } from "@/utils";

type RegisterAndErrors<T extends FieldValues> = {
    registered: UseFormRegisterReturn;
    errors: FieldErrors<T>;
};

export function Input<T extends FieldValues>({ registered, errors }: RegisterAndErrors<T>) {
    const name = registered.name as keyof T;
    const error = errors[name]?.message;
    return (
        <div className="relative mb-4 grid">
            <input className="px-2 py-2 rounded" {...registered} />
            <div className={classNames("absolute left-2 -bottom-2 px-1 py-px text-xs font-semibold text-yellow-50 bg-orange-500 rounded-sm select-none", !error && 'invisible',)}>
                <>{error}</>
            </div>
        </div>
    );
}

export function InputFloat<T extends FieldValues>({ registered, errors, placeholder }: RegisterAndErrors<T> & { placeholder: string; }) {
    const name = registered.name as keyof T;
    const error = errors[name]?.message;
    return (
        <div className="relative mb-4">
            <label className="relative text-yellow-900">
                <input
                    className="input-under py-1.5 w-full h-10 peer border rounded"
                    placeholder={placeholder}
                    {...registered}
                />
                <div className="input-under-label peer-placeholder-shown:text-yellow-600">
                    {placeholder}
                </div>

            </label>
            <div className={classNames("absolute left-2 -bottom-2 px-1 py-px text-xs font-semibold text-yellow-50 bg-orange-500 rounded-sm select-none", !error && 'invisible',)}>
                <>{error}</>
            </div>
        </div>
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
        <button className="place-self-center px-4 py-2 bg-yellow-500 border-yellow-500 border rounded select-none active:scale-y-95" {...rest}>
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
