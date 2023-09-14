import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/tech.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>TechField</Typography>
        <Typography color={medium}>
          <a href="https://en.wikipedia.org/wiki/Technology" target="_blank" rel="noopener noreferrer"> techfield.com</a></Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
       AI is getting so good that it can now generate realistic fake news articles. This is a serious threat to democracy, and we need to be aware of it.
      </Typography>

      <hr></hr>
      <hr></hr>
       <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/nykaa.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Nykaa</Typography>
        <Typography color={medium}>
          <a href="https://www.nykaa.com/" target="_blank" rel="noopener noreferrer"> nykaa.com</a></Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
       Tag someone you love and tell them, what are the little things that make them beautiful! 💖
#KyaKhoobLagteHo
      </Typography>
      <hr></hr>
      <hr></hr>

       <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/neeraj.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Neeraj Chopra</Typography>
        <Typography color={medium}>
          <a href="https://www.instagram.com/neeraj____chopra/?hl=en" target="_blank" rel="noopener noreferrer"> Neeraj Chopra</a></Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
       Neeraj Chopra is an unconquerable force in javelin throw, once again proving his greatness with a gold medal at the #WorldAthleticsChampionships&#128519;.
      </Typography>

    </WidgetWrapper>

    

  );
};

export default AdvertWidget;