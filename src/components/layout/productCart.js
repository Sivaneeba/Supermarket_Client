import * as React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BasicCard(props) {
    const { image,name, count, price, description } = props
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <img src={image} alt="" />
                <Typography sx={{ fontWeight: 'bold', m: 1, fontSize: 24 }} color="text.secondary" gutterBottom>
                    {name}
                </Typography>
                <Typography sx={{ fontWeight: 'light', m: 1,fontSize: 18  }} color="text.secondary" gutterBottom>
                    {description}
                </Typography>
                <Typography sx={{ mb: 1.5 , m: 1}} color="text.secondary">
                    {count}
                </Typography>
                <Typography variant="h5" component="div" sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'bold', fontFamily: 'Monospace', m: 1 }}>
                    Rs.{price}
                </Typography>

                
            </CardContent>
            <CardActions>
                <Button startIcon={<ShoppingCartIcon />} sx={{ color: 'white', fontSize: 15, fontWeight: 'bold',padding:"5px 13px 5px 15px",textTransform: 'none', backgroundColor:"#07b558", m: 1}} size="small">Add to Card</Button>
            </CardActions>
        </Card>
    );
}
