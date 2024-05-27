import { Icon } from '@iconify/react';
import { IconifyIcon } from '@iconify/react';

interface ButtonProps {
    name: string;
    icon: string | IconifyIcon;
    link: string,
    target: string,
    rel: string
}

export default function Button({ name, icon, link, target, rel}: ButtonProps) {
    return (
        <a href={link} target={target} rel={rel}>
            <button>
                <p>{name}</p>
                <Icon icon= {icon} />
            </button>
        </a>
    )
}