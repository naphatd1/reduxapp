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

// function Copyright() {
//     return (
//         <Typography variant="body2" color="text.secondary" align="center">
//             {'Copyright © '}
//             <Link color="inherit" href="https://mui.com/">
//                 Your Website
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }


// TODO remove, this demo shouldn't need to reset the theme.

export default function HomePage() {
    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <CameraIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap>
                        ระบบMaintenance
                    </Typography>
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
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            ระบบลาอออนไลน์
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
                mt: 'auto', bgcolor: 'grey.200', p: 6
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