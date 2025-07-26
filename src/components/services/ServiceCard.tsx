"use client";

import { Service } from "@/data/types/service";
import Button from "../ui/Button";
import IconCircle from "../ui/Icon";



export default function ServiceCard({ icon, title, price, features, buttonLabel, color }: Service) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between h-full border border-gray-100 hover:shadow-lg transition-all">
      <div>
        <IconCircle icon={icon} withBg bgColor={color.icon} size={30} />
        <h3 className="text-xl font-bold mt-4 mb-2 text-gray-800">{title}</h3>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6 space-y-3">
        <p className={`font-semibold ${color.price}`}>{price}</p>
        <Button className={`w-full text-white ${color.button}`}>{buttonLabel}</Button>
      </div>
    </div>
  );
}
