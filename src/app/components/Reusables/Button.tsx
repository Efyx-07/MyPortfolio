import { Icon } from '@iconify/react';
import { IconifyIcon } from '@iconify/react';
import { MouseEventHandler } from 'react';
import './Button.scss';

interface ButtonProps {
    name: string;
    icon?: string | IconifyIcon | undefined;
    link?: string;
    target?: string | null;
    rel?: string | null;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ name, icon, link, target, rel, className, onClick}: ButtonProps) {
    return (
        <a href={link} target={target ?? ""} rel={rel ?? ""}>
            <button className={className} onClick={onClick}>
                <p className='button-name'>{name}</p>
                <Icon icon= {icon ?? ""} />
            </button>
        </a>
    )
}