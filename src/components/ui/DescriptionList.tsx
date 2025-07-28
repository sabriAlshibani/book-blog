import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface DescriptionLisProps {
    title?:ReactNode;
    icon:LucideIcon;
    features?:string[];
}
export default function DescriptionLis({title,icon:Icon,features}:DescriptionLisProps) {
    return (
        <div className="flex flex-col bg-white px-8 py-2 border border-gray-300">
            {title}
            <ul className="flex flex-col">
                {features?.map((item,index)=> (
                    <li key={index} className="flex items-center gap-2 text-gray-600 text-sm">
                        <Icon className="w-6 h-6 text-green-600"/>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}