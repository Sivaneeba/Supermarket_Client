import { React, useState, } from 'react';
import { Box, Grid } from '@material-ui/core/';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


export default function BasicCard(props) {
    const { image, name, count, price, description } = props
    const [counts, setCounts] = useState(0);
   
    return (
        <Card sx={{
            minWidth: 275, boxShadow: "1px 1px 10px 10px #F7F8FA",
            borderRadius: 5
        }}>
            <img src={"http://localhost:8080/" + image} alt="" style={{ height: 220, width: '100%' }} />
            <CardContent>

                <Typography sx={{ fontWeight: 'bold', fontSize: 21 }} >
                    {name}
                </Typography>
                <Typography sx={{ fontWeight: 'light', fontSize: 15,color:'grey' }} >
                    {description}
                </Typography>
                
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="baseline"
                >
                    <Typography sx={{ fontSize: 27, fontWeight: 'bold', fontFamily: 'Monospace' }}>
                        Rs.{price}
                    </Typography>
                    
                    <div style={{ display: 'flex' }}>
                        <button  onClick={() => {counts >= 0 ?setCounts(counts + 1): setCounts(0 + 1)}} style={{ borderStyle: 'none', backgroundColor: '#07b558', fontSize: 20, margin: 3, color: 'white', padding: "1px 10px 1px 10px", fontWeight: 'bold',borderRadius:5 }}>+</button> 
                        {counts >= 0 ? <h5 style={{ margin: 3, padding: "4px 10px 4px 10px" }}>{counts}</h5> : <h5 style={{ margin: 3, padding: "4px 10px 4px 10px" }}>0</h5>}
                        <button onClick={() =>  counts >= 0 ?setCounts(counts - 1): 0} style={{ borderStyle: 'none', backgroundColor: '#ed493e', fontSize: 20, margin: 3, color: 'white', padding: "1px 10px 1px 10px", fontWeight: 'bold',borderRadius:5 }}>-</button>
                    </div>
                            
                </Grid>

            </CardContent>
            <CardActions>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="baseline"
                >        
                <Typography sx={{ fontWeight: 'light', fontSize: 18 }} >
                        Rs.{counts >= 0 ?price * counts:price * 0}
                </Typography>        
                <Button startIcon={<ShoppingCartIcon />} style={{borderStyle: 'none', color: 'white', fontSize: 16, fontWeight: 'bold', padding: "4px 13px 4px 13px", textTransform: 'none', backgroundColor: "#07b558" ,borderRadius:6}} size="small">Add to Card</Button>
                </Grid> 
            </CardActions>
        </Card>
    );
}
