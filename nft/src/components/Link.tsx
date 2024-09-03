import { Link as NavLink } from "react-router-dom";

export const Link = ({
  href,
  children,
  className,
  target,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}) => {
  return (
    <NavLink
      to={href}
      className={`text-white no-underline font-sans hover:underline hover:text-green-500 ${className}`}
      target={target}
    >
      {children}
    </NavLink>
  );
};
