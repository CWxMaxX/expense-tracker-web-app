import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
    return <div className={`card p-6  rounded-xl bg-[#1e2746] w-full ${className}`}>{children}</div>;
}

export default Card;