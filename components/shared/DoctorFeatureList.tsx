import { IconCircleCheckFilled } from "@tabler/icons-react";

interface DoctorFeatureListProps {
  features: string[];
}

export default function DoctorFeatureList({
  features,
}: DoctorFeatureListProps) {
  return (
    <div className="space-y-4">
      {features.map((feature) => (
        <div key={feature} className="flex gap-2.5 items-center ">
          <IconCircleCheckFilled
            size={20}
            className="mt-0.5 shrink-0 text-[#F25027]"
          />

          <p className="text-lg leading-7 text-black/80">{feature}</p>
        </div>
      ))}
    </div>
  );
}
