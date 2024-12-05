export interface ButtonProps {
    text: string;
    icon?: FunctionComponent<HTMLAttributes<{
        className: string;
    }>>;
    forwardIcon?: FunctionComponent<HTMLAttributes<{
        className: string;
    }>>;
    className?: string;
    iconSize?: string;
    bg?: string;
    color?: string;
    border?: string;
}