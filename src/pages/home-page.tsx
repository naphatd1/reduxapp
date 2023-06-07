import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
import FooterPage from './footer-page';
import { Link as RouterLink } from 'react-router-dom'
// import { Copyright } from '@mui/icons-material';


// function Copyright() {
//     return (
//         <>
//             <Container>
//                 <Typography variant="body2" color="text.secondary" align="center">
//                     {'Copyright © '}
//                     <Link color="inherit" href="https://mui.com/">
//                         Your Website
//                     </Link>{' '}
//                     {new Date().getFullYear()}
//                     {'.'}
//                 </Typography>
//             </Container>
//         </>
//     );
// }


// TODO remove, this demo shouldn't need to reset the theme.

export default function HomePage() {
    return (
        <>
            <AppBar >
                <Toolbar>
                    <CameraIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Maintenance
                    </Typography>
                    <Box sx={{flexGrow: 1}}></Box>
                    <Box>
                        <Button variant="contained" component={RouterLink} to='/login'  sx={{
                            background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
                            marginRight: '10px'
                        }}>
                            Login
                        </Button>
                        <Button variant="contained" component={RouterLink} to='/register' sx={{
                            background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);'
                        }}>
                            Register
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="lg" sx={{ paddingTop: 10 }}>
                        <Typography
                            component="h1"
                            variant="h3"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            React Redux Firebase
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained" component={RouterLink} to='/login'>
                                Login
                            </Button>
                            <Button variant="outlined" component={RouterLink} to='/register'>
                                Register
                            </Button>
                        </Stack>
                    </Container>
                </Box>
            </main>
            <FooterPage />
            {/* Footer */}
            {/* <Box sx={{
                py: 3,
                px: 2,
                mt: 'auto', bgcolor: 'grey.200', p: 6,
                top: 0
            }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    ระบบลาอออนไลน์
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Box> */}
            {/* End footer */}
        </>
    );
}