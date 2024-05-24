import { Box, Card, CardContent, Typography } from '@mui/material';

type Props = {
  title: string;
  value: string;
};

export default function CardComponent({ title, value }: Props) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent style={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
          <Typography color={'black'}>{value}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
