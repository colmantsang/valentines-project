import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Valentines = (): JSX.Element => {
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate("/yes");
  };

  const handleNoClick = () => {
    navigate("/no");
  };

  return (
    <div className="bg-[#fdf2e0] w-full min-w-[393px] min-h-[852px] flex items-center justify-center p-4">
      <Card className="w-full max-w-[361px] bg-[#fbfbfb] rounded-[64px] shadow-drop-shadow-400 border-0">
        <CardContent className="flex flex-col items-center justify-between min-h-[770px] p-6 pt-[171px] pb-[65px]">
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex flex-col items-center">
              <h2 className="[font-family:'Modak',Helvetica] font-normal text-[#ff383c] text-5xl tracking-[0] leading-10 whitespace-nowrap">
                Dear
              </h2>
              <h1 className="[font-family:'Modak',Helvetica] font-normal text-[#ff383c] text-4xl tracking-[0] leading-10 text-center whitespace-nowrap">
                Anna Jin Feng Liu
              </h1>
            </div>

            <p className="[font-family:'Gochi_Hand',Helvetica] font-normal text-[#ff383c] text-5xl tracking-[0] leading-[normal] text-center max-w-[329px]">
              Will you be my Valentines ?
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full max-w-[317px]">
            <Button
              className="w-full h-[88px] bg-[#ff383c] hover:bg-[#ff383c]/90 rounded-full shadow-[-8px_-8px_16px_#ffffff,8px_8px_16px_#c9d8e8] [font-family:'Modak',Helvetica] font-normal text-white text-4xl tracking-[0] leading-[normal]"
              onClick={handleYesClick}
            >
              Yes
            </Button>

            <Button
              variant="secondary"
              className="w-full h-[88px] bg-white hover:bg-white/90 rounded-full shadow-[-8px_-8px_16px_#ffffff,8px_8px_16px_#c9d8e8] [font-family:'Modak',Helvetica] font-normal text-[#8e8e93] text-4xl tracking-[0] leading-[normal]"
              onClick={handleNoClick}
            >
              No
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
