import { Bug, LifeBuoy } from 'lucide-react';
import React from 'react';

const LebelsLoad = ({label}) => {
    return (
        <span className={ `px-3 py-1  rounded-full flex gap-2 ${label ==='bug'? 'bg-red-200 text-red-500' : label ==='enhancement'? 'bg-green-200 text-green-500' : 'text-yellow-500 bg-yellow-200'}  `}> {label=== 'bug' ? <Bug></Bug> : <LifeBuoy></LifeBuoy>} {label}</span>
            
        
    );
};

export default LebelsLoad;