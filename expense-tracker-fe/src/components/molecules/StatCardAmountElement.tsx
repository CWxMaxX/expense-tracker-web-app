import React from 'react';
import { convertToLocaleString } from '../../helpers/dateTimeConvertionHelpers';

interface StatCardAmountElementProps {
    title: string;
    amount: number;
    icon: string | undefined;
}

const StatCardAmountElement: React.FC<StatCardAmountElementProps> = ({ title, amount, icon }) => {
    return (
        <div className="w-full text-left">
            <div className="flex flex-row items-center">
              {icon && <div className="w-3/12 p-1 mr-2  rounded-lg bg-[#ffffff]">
                <img
                  src={icon}
                  alt="Income"
                  className="w-full h-full"
                  
                />
              </div>}
              <div>
                <div className='text-xs sm:text-lg'>{title}</div>
                <div className="text-lg sm:text-3xl">
                  <span>$</span> {convertToLocaleString(amount)}
                </div>
              </div>
            </div>
          </div>
    );
};

export default StatCardAmountElement;