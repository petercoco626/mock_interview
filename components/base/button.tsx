import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';

type ButtonSize = 'large' | 'middle' | 'small';
interface BaseButtonProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

type ButtonProps = BaseButtonProps &
  (
    | (ButtonHTMLAttributes<HTMLButtonElement> & {
        as: 'button';
      })
    | (LinkProps<HTMLAnchorElement> & {
        as: 'link';
      })
  );

export function Button({
  className = '',
  children,
  variant = 'primary',
  size = 'large',
  ...props
}: ButtonProps) {
  const defaultButtonStyle =
    'rounded-xl flex items-center justify-center box-border px-5 border';

  const styleOnSize: Record<ButtonSize, string> = {
    large: 'h-12 text-m_medium',
    middle: 'h-10 text-s_medium',
    small: 'h-8 text-xs_medium',
  };

  const styleOnVariant: Record<ButtonVariant, string> = {
    primary: clsx(
      'border-transparent',
      'bg-system-green-light text-white',
      'hover:bg-system-green hover:text-white/50',
      'active:bg-system-green active:text-white/50',
      'disabled:bg-system-gray disabled:text-white/50'
    ),
    secondary: clsx(
      'border-system-green-light',
      'text-system-green-light',
      'active:bg-system-green-light/15',
      'hover:bg-system-green-light/15',
      'disabled:border-system-gray disabled:text-system-gray'
    ),
  };

  const mergedClassNames = clsx(
    className,
    defaultButtonStyle,
    styleOnSize[size],
    styleOnVariant[variant]
  );

  if (props.as === 'link') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as, ...rest } = props;

    return (
      <Link {...rest} className={mergedClassNames}>
        {children}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { as, ...rest } = props;

  return (
    <button type="button" className={mergedClassNames} {...rest}>
      {children}
    </button>
  );
}
