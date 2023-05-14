import Grid from '@mui/material/Unstable_Grid2';
import { Paper, styled } from '@mui/material';
import { SideMenu } from '../components/SideMenu';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const Home = () => {
  return (
    <Grid
      container
      spacing={'30px'}
      sx={{
        px: { tablet: '50px', desktop: '100px' },
      }}
    >
      <Grid desktop={3}>
        <SideMenu />
      </Grid>
      <Grid desktop={9}>
        <Item>xs=6 md=8</Item>
      </Grid>
    </Grid>
  );
};

