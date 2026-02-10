import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const photos = [
  "src/assets/Pic1.png",
  "src/assets/Pic2.png",
  "https://images.unsplash.com/photo-1545912452-6b01b61e5665?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
];

export const ValentinesYes = (): JSX.Element => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const navigate = useNavigate();

  const handlePrevious = () => {
    setCurrentPhotoIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPhotoIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const handleReset = () => {
    navigate("/");
  };

  return (
    <div className="bg-[#fdf2e0] w-full min-w-[393px] min-h-[852px] flex items-center justify-center p-4">
      <Card className="w-full max-w-[361px] bg-[#fbfbfb] rounded-[64px] shadow-drop-shadow-400 border-0">
        <CardContent className="flex flex-col items-center justify-center p-8 pt-12 pb-12 gap-6">
          <h1 className="[font-family:'Modak',Helvetica] font-normal text-[#ff383c] text-[40px] text-center tracking-[0] leading-[normal]">
            Phew... 😅
          </h1>

          <p className="[font-family:'Gochi_Hand',Helvetica] font-normal text-black text-[40px] text-center tracking-[0] leading-[normal] max-w-[329px]">
            I mean, I knew you&apos;d say yes!!
          </p>

          <div className="relative w-[248px] h-[302px] my-8">
            
              <img
                className="w-full h-full object-cover"
                alt="Couple photo"
                src={photos[currentPhotoIndex]}
              />
          
          </div>

          <p className="[font-family:'Gochi_Hand',Helvetica] font-normal text-black text-[32px] text-center tracking-[0] leading-[normal] max-w-[329px]">
            Please enjoy these photos of us :)
          </p>

          <div className="flex items-center justify-center gap-5 mt-4">
            <Button
              variant="outline"
              size="icon"
              className="w-14 h-14 rounded-full border-[#cac4d0]"
              onClick={handlePrevious}
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="w-14 h-14 rounded-full border-[#cac4d0]"
              onClick={handleNext}
            >
              <ChevronRightIcon className="w-6 h-6" />
            </Button>
          </div>

          <Button
            variant="ghost"
            className="mt-8 [font-family:'Gochi_Hand',Helvetica] text-[#8e8e93] text-lg"
            onClick={handleReset}
          >
            Reset
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
