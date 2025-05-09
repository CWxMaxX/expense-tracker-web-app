import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return <div className='flex flex-col px-4 w-full pb-10'>{children}</div>;
};

export default Container;