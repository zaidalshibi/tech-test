import { Box, Card, CardContent, CardMedia, Divider } from "@mui/material";


export const ProductCard = ( { data } ) => {
    return (
        <Card sx={{ minWidth: 300, maxWidth: 300, marginRight: 5, overflow: 'visible', borderRadius: 3, padding: 3 }}>
            <CardMedia
                component="img"
                height="140"
                image={data.img}
                alt={data.heading}
            />
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h3>{data.heading}</h3>

                </Box>
                <Divider sx={{ marginBottom: 2 }} />
                <p>{data.description}</p>
            </CardContent>
        </Card>
    );
};