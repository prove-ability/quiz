import Link, { LinkProps } from "next/link";
import React from "react";

interface Props extends LinkProps {
  children: React.ReactNode;
}

export default function PrefixedLink({
  href,
  as = href,
  children,
  ...props
}: Props) {
  return (
    <Link href={href} as={`${process.env.pathPrefix}${as}`} {...props}>
      {children}
    </Link>
  );
}
