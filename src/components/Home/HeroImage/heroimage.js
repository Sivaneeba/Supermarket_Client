import React from 'react';
import { Grid, Button, Hidden } from '@material-ui/core'
import './heroImage.css'




const Top = () => {

    return (
        <div className='home-top'>
            <div  className='home-txt'>
            <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center"
                >

                <Grid item style={{ marginTop: 300 }}></Grid>

                <Hidden mdDown>
                    <Grid item container justifyContent="center"
                        alignItems="center">

                        <h1 className='home-txt' style={{ fontSize: 100, fontWeight: 900 }}>Let share your stuffs</h1>


                    </Grid>
                    <Grid item container justifyContent="center"
                        alignItems="center">
                        <h5 className='home-txt'>Get and share your different kind of Places, Cars, Things near you</h5></Grid>
                </Hidden>
                <Hidden mdUp smDown>
                    <Grid item container justifyContent="center"
                        alignItems="center">

                        <h1 className='home-txt' style={{ fontSize: 70, fontWeight: 800 }}>Let share your stuffs</h1>


                    </Grid>
                    <Grid item container justifyContent="center"
                        alignItems="center">
                        <h5 className='home-txt'>Get and share your different kind of Places, Cars, Things near you</h5></Grid>
                </Hidden>
                <Hidden smUp >
                    <Grid item container justifyContent="center"
                        alignItems="center">

                        <h1 className='home-txt' style={{ fontSize: 50, fontWeight: 600 }}>Let share your stuffs</h1>


                    </Grid>
                    <Grid item container justifyContent="center"
                        alignItems="center">
                        <h6 className='home-txt'>Get and share your different kind of Places, Cars, Things near you</h6></Grid>
                </Hidden>
                <Grid item container justifyContent="center" F
                    alignItems="center"> <Button variant="outlined" href='/login' style={{ color: 'white',textTransform:'none' }}>
                        Get Start
                    </Button>

                </Grid>






            </Grid>

</div>


        </div>




    );


}
export default Top;