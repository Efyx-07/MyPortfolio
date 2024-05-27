import { Icon } from '@iconify/react';
import { IconifyIcon } from '@iconify/react';
import './Button.scss';

interface ButtonProps {
    name: string;
    icon: string | IconifyIcon;
    link: string;
    target: string | null;
    rel: string | null;
    className: string;
}

export default function Button({ name, icon, link, target, rel, className}: ButtonProps) {
    return (
        <a href={link} target={target ?? ""} rel={rel ?? ""}>
            <button className={className}>
                <p>{name}</p>
                <Icon icon= {icon} />
            </button>
        </a>
    )
}