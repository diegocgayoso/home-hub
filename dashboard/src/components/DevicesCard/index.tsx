import { Box, Divider, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LightIcon from "../../assets/lampadas.png";

const DevicesCard = () => {
  return (
    <Card sx={{ background: "#F5F5F5" }}>
      <CardContent>
        
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
          <img src={LightIcon} alt="water icon" width={60} />
          <Typography color={"#E65100"}>Usuários da família</Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"start"}
          sx={{ marginTop: 2 }}
        >
          <Typography variant="body2">Usuário 1</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
export default DevicesCard;
