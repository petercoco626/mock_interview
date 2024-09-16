import Link, { LinkProps } from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface BaseButtonProps {
  children: ReactNode;
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

export function Button({ children, ...props }: ButtonProps) {
  if (props.as === 'link') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as, ...rest } = props;

    return <Link {...rest}>{children}</Link>;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { as, ...rest } = props;

  return (
    <button
      type="button"
      {...rest}
      className="p-2 rounded flex items-center justify-center"
    >
      {children}
    </button>
  );
}
