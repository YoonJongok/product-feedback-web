import Grid from '@mui/material/Unstable_Grid2';
import SideMenu from '../../components/SideMenu';
import ListFeedbacks from './ListFeedbacks';

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
      <Grid
        desktop={9}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
        }}
      >
        <ListFeedbacks />
      </Grid>
    </Grid>
  );
};

