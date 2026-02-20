import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import styles from './Button.module.css';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, 'size'> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    children,
    ...props
}) => {
    const buttonClasses = [
        styles.button,
        styles[variant],
        styles[size],
        fullWidth ? styles.fullWidth : '',
        className,
    ].filter(Boolean).join(' ');

    return (
        <motion.button
            className={buttonClasses}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
