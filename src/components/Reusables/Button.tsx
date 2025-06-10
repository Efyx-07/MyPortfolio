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
  isDisabled?: boolean;
}

export default function Button({
  name,
  icon,
  link,
  target,
  rel,
  className,
  onClick,
  isDisabled,
}: ButtonProps) {
  return (
    <a href={link} target={target ?? ''} rel={rel ?? ''}>
      <button
        className={`${className ?? ''} ${isDisabled ? 'disabled' : ''}`}
        onClick={onClick}
        disabled={isDisabled}
      >
        <p className="button-name">{name}</p>
        <Icon icon={icon ?? ''} />
      </button>
    </a>
  );
}
