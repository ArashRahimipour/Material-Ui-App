import { createTheme } from "@mui/system";

export const theme = createTheme({
    palette:{
        primary:{
            main:'#AA1945',
            light: '#F1CED4',
        },
        secondary:{
            main: '#D37506',
            light:'#B7AC44',
          },
        otherColor:{
            main:'#FFF3D9',
        }
    },
});


// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//     container:{
//       backgroundColor: theme.palette.background.paper,
//       padding:theme.spacing(8,0,6)
//     }
//   }));

//   export default useStyles;