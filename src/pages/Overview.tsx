import CardComponent from '@/components/Card';
import { useChart } from '@/components/Chart';
import Chart from '@/components/Chart/Chart';
import { fShortenNumber } from '@/utils/format-number';
import {
  Add as AddIcon,
  RadioButtonChecked as RadioButtonCheckedIcon,
  RadioButtonUnchecked as RadioButtonUncheckedIcon,
} from '@mui/icons-material';
import {
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Stack,
  TextField,
  Typography,
  styled,
  useTheme,
} from '@mui/material';
import { useState } from 'react';

type Task = {
  text: string;
  done: boolean;
};

export default function Overview() {
  const theme = useTheme();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks((prevTasks) => [...prevTasks, { text: newTask, done: false }]);
      setNewTask('');
    }
  };

  const handleToggleTask = (index: number) => {
    setTasks(tasks.map((task, i) => (i === index ? { ...task, done: !task.done } : task)));
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  const dataCard: { title: string; value: string }[] = [
    {
      title: 'Unsresolved',
      value: '10',
    },
    {
      title: 'Overdue',
      value: '10',
    },
    {
      title: 'Open',
      value: '10',
    },
    {
      title: 'On Hold',
      value: '10',
    },
  ];

  const dataCard2: { title: string; value: string }[] = [
    {
      title: 'Resolved',
      value: '449',
    },
    {
      title: 'Recieved',
      value: '426',
    },
    {
      title: 'Average first response time',
      value: '33m',
    },
    {
      title: 'Averge response time',
      value: '3h 8m',
    },
    {
      title: 'Resolution with SLA',
      value: '94%',
    },
  ];

  const UnresolvedTicketData: { title: string; count: string }[] = [
    {
      title: 'Waiting on feature request',
      count: '4238',
    },
    {
      title: 'Awaiting customer response',
      count: '1005',
    },
    {
      title: 'Awaiting developer fix',
      count: '914',
    },
    {
      title: 'Pending',
      count: '281',
    },
  ];

  const categoriesChartOptions = useChart({
    chart: {
      stacked: false,
    },
    colors: [
      '#673ab7',
      '#3f51b5',
      '#2196f3',
      '#03a9f4',
      '#f44336',
      '#e91e63',
      '#9c27b0',
      '#00bcd4',
      '#009688',
      '#4caf50',
      '#8bc34a',
      '#cddc39',
      '#ffeb3b',
      '#ffc107',
      '#ff9800',
      '#ff5722',
      '#795548',
      '#607d8b',
    ],
    legend: {
      showForSingleSeries: true,
      horizontalAlign: 'center',
      position: 'bottom',
    },
    fill: {
      opacity: [0.55, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'ligth',
        type: 'vertical',
        opacityFrom: 0.85,
        opacityTo: 0.5,
        stops: [0, 100, 100, 100],
      },
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
      },
    },
    tooltip: {
      y: {
        formatter: (val) => `Rp${fShortenNumber(val)}`,
      },
    },
    xaxis: {
      type: 'category',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yaxis: {
      labels: {
        formatter: (val) => `Rp${fShortenNumber(val)}`,
      },
    },
    markers: {
      size: 0,
    },
    noData: {
      text: 'Data Tidak Ditemukan',
    },
  });

  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {dataCard.map((item, index) => (
          <Grid item xs={12} sm={4} md={3} key={index}>
            <CardComponent title={item.title} value={item.value} />
          </Grid>
        ))}
      </Grid>
      {/* Todays trend */}
      <Grid container border={`1px solid ${theme.palette.grey[300]}`} borderRadius={1} sx={{ margin: '1.25rem auto' }}>
        <Grid item xs={8} padding={2.5}>
          <Typography variant="body2" fontWeight="bold">
            Today's trend
          </Typography>
          <Typography variant="caption" color={theme.palette.grey[500]}>
            tanggal
          </Typography>
          <Chart
            height={325}
            type="area"
            options={categoriesChartOptions}
            series={[
              {
                name: 'today',
                data: [10, 40, 30, 40, 50, 40, 70, 80, 90, 40, 110, 120],
              },
              {
                name: 'yesterday',
                data: [40, 30, 40, 50, 40, 70, 80, 90, 20, 110, 120, 130],
              },
            ]}
          />
        </Grid>
        <Grid item xs={4}>
          {dataCard2.map((item, index) => (
            <Grid key={index}>
              <CardComponent title={item.title} value={item.value} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container gap={2}>
        {/* Unresolved ticket */}
        <Grid item xs={5.9} border={`1px solid ${theme.palette.grey[300]}`} borderRadius={1}>
          <Stack direction="row" justifyContent="space-between" padding={2}>
            <Stack direction="column">
              <Typography variant="h6" fontWeight="bold">
                Unresolved tickets
              </Typography>
              <Typography variant="caption" style={{ color: theme.palette.grey[500] }}>
                Group:{' '}
                <Typography variant="caption" fontWeight="bold">
                  Support
                </Typography>
              </Typography>
            </Stack>
            <Button sx={{ bottom: '10px' }}>View details</Button>
          </Stack>
          <Demo>
            <List dense={true}>
              {UnresolvedTicketData.map((item, index) => (
                <ListItem
                  key={index}
                  style={{
                    borderBottom: `${index === 3 ? 'none' : '1px solid #e0e0e0'}`,
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant="subtitle2" fontWeight="bold" margin="1rem 0">
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle2" color={theme.palette.grey[500]} fontWeight="light">
                    {item.count}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Demo>
        </Grid>
        <Grid item xs={5.9} border={`1px solid ${theme.palette.grey[300]}`} borderRadius={1}>
          <Stack direction="row" justifyContent="space-between" padding={2}>
            <Stack direction="column">
              <Typography variant="h6" fontWeight="bold">
                Tasks
              </Typography>
              <Typography variant="caption" style={{ color: theme.palette.grey[500] }}>
                Today
              </Typography>
            </Stack>
            <Button sx={{ bottom: '10px' }}>View all</Button>
          </Stack>
          <Demo>
            <Stack direction="row" spacing={1} alignItems="center" mb={2}>
              <TextField
                label="Add Task"
                variant="filled"
                size="small"
                fullWidth
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={handleKeyPress}
                autoFocus
                style={{ backgroundColor: 'white' }}
              />
              <IconButton color="primary" onClick={handleAddTask}>
                <AddIcon />
              </IconButton>
            </Stack>
            <List dense={true}>
              {tasks.map((task, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={
                      <IconButton edge="end" onClick={() => handleToggleTask(index)}>
                        {task.done ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />}
                      </IconButton>
                    }
                  />
                  <ListItemSecondaryAction>
                    <span style={{ textAlign: 'left', textDecoration: task.done ? 'line-through' : 'none' }}>
                      {task.text}
                    </span>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </>
  );
}
