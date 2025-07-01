import React from "react";
import { DialogContent } from "@/components/ui/dialog";

interface Profile {
  image: string;
  name: string;
  possition: string;
  more: string;

}

interface TeamPopupProps {
  profile: Profile | null;
}

const TeamPopup: React.FC<TeamPopupProps> = ({ profile }) => {
  if (!profile) return null;

  return (
    <DialogContent className="border-amber-50 max-w-5xl bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Side - Text */}
        <div className="flex-1">
          <h2 className="mt-6 text-xl font-bold">{profile.possition}</h2>
          <p className="mt-3 text-gray-300 text-sm  text-justify  leading-relaxed">{profile.more}</p>
        </div>
        {/* Right Side - Image */}
        <div className="w-40 md:w-48 flex-shrink-0 flex flex-col items-center mx-auto mt-6">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-full h-auto rounded-lg shadow-md"
          />
          <p className="text-center text-lg font-bold text-white mt-2">
            {profile.name}
          </p>
        </div>
      </div>
    </DialogContent>
  );
};

export default TeamPopup;
