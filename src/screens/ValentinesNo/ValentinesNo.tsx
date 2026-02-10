import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const ValentinesNo = (): JSX.Element => {
  const navigate = useNavigate();

  const handleTryAgain = () => {
    navigate("/");
  };

  return (
    <div className="bg-[#fdf2e0] w-full min-w-[393px] min-h-[852px] flex items-center justify-center p-4">
      <Card className="w-full max-w-[361px] bg-[#fbfbfb] rounded-[64px] shadow-drop-shadow-400 border-0">
        <CardContent className="flex flex-col items-center justify-center p-8 pt-12 pb-12 gap-8">
          <h1 className="[font-family:'Modak',Helvetica] font-normal text-[#ff383c] text-[40px] text-center tracking-[0] leading-[normal]">
            Hm, Awkward...
          </h1>

          <p className="[font-family:'Gochi_Hand',Helvetica] font-normal text-black text-[32px] text-center tracking-[0] leading-[normal] max-w-[329px]">
            We've seem to run into an error.
          </p>

          <div className="w-[260px] h-[310px] my-4">
            <img
              className="w-full h-full object-contain"
              alt="Confused dog"
              src="src/assets/Ace-Error.png"
            />
          </div>

          <Button
            className="w-full max-w-[281px] h-[72px] bg-[#ff383c] hover:bg-[#ff383c]/90 rounded-full shadow-[-8px_-8px_16px_#ffffff,8px_8px_16px_#c9d8e8] [font-family:'Modak',Helvetica] font-normal text-white text-3xl tracking-[0] leading-[normal]"
            onClick={handleTryAgain}
          >
            Try again
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
