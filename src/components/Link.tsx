import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function Link({ href, children, className = '', ...props }: LinkProps) {
  return (
    <a
      href={href}
      className={`text-gray-600 hover:text-gray-900 transition-colors ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}