import React from 'react'
import Grid from '@mui/material/Grid'
import Icon from '@mdi/react'
import { mdiBook, mdiFolder, mdiMagnify, mdiChartBar, mdiApplicationOutline } from '@mdi/js'
import { Stack, Container, Button, Typography, Box, Link } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import TopBar from '../../component/topbar'
import strings from '../../strings/Home'
import theme from '../../theme'


const Home = () => {
  return (
      <Box>

        <TopBar />
      
        <Box display='flex' justifyContent='center' alignItems='center' height='80vh'>
            <Container maxWidth='md'>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Typography variant="h6">{strings.choose}</Typography>

                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Icon path={mdiBook} size={1} />
                                <Typography variant="h5" component="div">
                                <b>{strings.knowledge}</b>
                                </Typography>
                                <Typography variant="body2">
                                    {strings.writeAnd}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='small' color="secondary">
                                    <Link href="/Knowledge" underline='none' color={theme.customColors.link}>
                                        {strings.open}
                                    </Link>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Icon path={mdiApplicationOutline} size={1} />
                                <Typography variant="h5" component="div">
                                <b>{strings.scope}</b>
                                </Typography>
                                <Typography variant="body2">
                                    {strings.manageScopes}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="secondary">
                                    <Link href="scope" underline='none' color={theme.customColors.link}>
                                        {strings.open}
                                    </Link>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Icon path={mdiFolder} size={1} />
                                <Typography variant="h5" component="div">
                                <b>{strings.catalog}</b>
                                </Typography>
                                <Typography variant="body2">
                                    {strings.manage}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="secondary">
                                    <Link href="catalog" underline='none' color={theme.customColors.link}>
                                        {strings.open}
                                    </Link>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Icon path={mdiMagnify} size={1} />
                                <Typography variant="h5" component="div">
                                <b>{strings.project}</b>
                                </Typography>
                                <Typography variant="body2">
                                    {strings.trackWork}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="secondary">
                                    <Link href="project" underline='none' color={theme.customColors.link}>
                                        {strings.open}
                                    </Link>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Icon path={mdiChartBar} size={1} />
                                <Typography variant="h5" component="div">
                                <b>{strings.reporting}</b>
                                </Typography>
                                <Typography variant="body2">
                                    {strings.visualize}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="secondary">
                                    <Link href="report" underline='none' color={theme.customColors.link}>
                                        {strings.open}
                                    </Link>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>

            </Stack>

            </Container>

        </Box>
      </Box>
  )
}

export default Home
