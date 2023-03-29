import { HTMLAttributes } from 'react';
import { classNames } from '../../../utils/classnames';

export { ReactComponent as IconVessel7 } from '../../../assets/sources/vessel7.svg';

export function IconStar({ title, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg viewBox="-12 -12 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path d="M -9 0 C 0 0 0 0 0 -9 C 0 0 0 0 9 0 C 0 0 0 0 0 9 C 0 0 0 0 -9 0" />
        </svg>
    );
}

export function IconClose({ className, title, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg className={classNames("fill-none stroke-current ", className)} viewBox="0 0 24 24" strokeWidth={1.5} {...rest}>
            {title && <title>{title}</title>}
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}
//stroke-[1.5]