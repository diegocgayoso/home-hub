import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import VisaoGeral from "../../assets/ilustrvisaogeral.png";

const HeroCard = () => {
  return (
    <Card sx={{ background: "#FFF3E0" }}>
      <CardContent>
        <Box display={'flex'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'center'}>
          <Box>
            <Typography variant="h5">Olá Diego Carlos</Typography>
            <Typography variant="subtitle1">
              Confira as informações da sua casa inteligente!
            </Typography>
          </Box>
          <img src={VisaoGeral} width="468px" alt="Visão Geral" />
        </Box>
      </CardContent>
    </Card>
  );
};
export default HeroCard;
