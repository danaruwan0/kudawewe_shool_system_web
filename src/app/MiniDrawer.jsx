import * as React from 'react';
import { styled, useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

// Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';
import PaymentsIcon from '@mui/icons-material/Payment';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CampaignIcon from '@mui/icons-material/Campaign';
import BarChartIcon from '@mui/icons-material/BarChart';
import ClassIcon from '@mui/icons-material/Class';
import ChecklistIcon from '@mui/icons-material/Checklist';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// Import dashbord pages page
import Login from '../pages/Login/Login.jsx';

import AttendancePage from '../pages/AttendancePage/AttendancePage.jsx';
import ClassesPage from '../pages/ClassesPage/ClassesPage.jsx'
import ExamsPage from '../pages/ExamsPage/ExamsPage.jsx'
import LibraryPage from '../pages/LibraryPage/LibraryPage.jsx'
import NoticesPage from '../pages/NoticesPage/NoticesPage.jsx'
import PaymentsPage from '../pages/PaymentsPage/PaymentsPage.jsx'
import ReportsPage from '../pages/ReportsPage/ReportsPage.jsx'
import SettingsPage from '../pages/Settings/SettingsPage.jsx'

import AddStudentPage from '../pages/StudentsPage/AddStudent/AddStudentPage.jsx'
import DeleteStudentPage from '../pages/StudentsPage/DeleteStudent/DeleteStudentPage.jsx'
import UpdateStudentPage from '../pages/StudentsPage/UpdateStudent/UpdateStudentPage.jsx'

import AddTeachersPage from '../pages/TeachersPage/TeachersAdd/AddTeachersPage.jsx'
import DeleteTeachersPage from '../pages/TeachersPage/TeachersDelete/DeleteTeachersPage.jsx'
import UpdateTeachersPage from '../pages/TeachersPage/TeachersUpdate/UpdateTeachersPage.jsx'



// ---------------- THEMES ----------------
const blueDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#2196f3' },
    secondary: { main: '#f50057' },
    background: { default: '#0d1117', paper: '#161b22' },
    text: { primary: '#e3f2fd', secondary: '#90caf9' },
  },
  typography: { fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif' },
});

const blueLightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#3f51b5' },
    secondary: { main: '#ff4081' },
    background: { default: '#f8fdff', paper: '#ffffff' },
    text: { primary: '#2c387e', secondary: '#546e7a' },
  },
  typography: { fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif' },
});

// ---------------- STYLED COMPONENTS ----------------
const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: { width: `calc(${theme.spacing(8)} + 1px)` },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }),
);

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  margin: '4px 8px',
  borderRadius: '8px',
  '& .MuiListItemIcon-root': {
    minWidth: '32px', // smaller icon space
    fontSize: '10px', // icon size
  },
  '& .MuiListItemText-primary': {
    fontSize: '0.875rem', // smaller text
  },
}));


// ---------------- MENU ITEMS ----------------
const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: "/dashboard" },

  {
    text: 'Students',
    icon: <PeopleIcon />,
    path: "/students",
    subMenu: [
      { text: 'Add Student', icon: <AddIcon />, path: "/students/add" },
      { text: 'Update Student', icon: <EditIcon />, path: "/students/update" },
      { text: 'Delete Student', icon: <DeleteIcon />, path: "/students/delete" },
    ]
  },

  {
    text: 'Teachers',
    icon: <PeopleIcon />,
    path: "/teachers",

    subMenu: [
      { text: 'Add Teachers', icon: <AddIcon />, path: "/teachers/add" },
      { text: 'Update Teachers', icon: <EditIcon />, path: "/teachers/update" },
      { text: 'Delete Teachers', icon: <DeleteIcon />, path: "/teachers/delete" },
    ]
  },


  { text: 'Classes / Courses', icon: <ClassIcon />, path: "/classes" },
  { text: 'Attendance', icon: <ChecklistIcon />, path: "/attendance" },
  { text: 'Exams / Results', icon: <AssignmentIcon />, path: "/exams" },
  { text: 'Payments / Fees', icon: <PaymentsIcon />, path: "/payments" },
  { text: 'Library', icon: <LibraryBooksIcon />, path: "/library" },
  { text: 'Notices', icon: <CampaignIcon />, path: "/notices" },
  { text: 'Reports / Analytics', icon: <BarChartIcon />, path: "/reports" },
  { text: 'Settings', icon: <SettingsIcon />, path: "/settings" },
];

// ---------------- PAGES (dummy components) ----------------
function Dashboard() { return <Typography variant="h4">Dashboard Page</Typography>; }
function Students() { return <Typography variant="h4">Students Page</Typography>; }
function AddStudent() { return <Typography variant="h5">Add Student Page</Typography>; }
function UpdateStudent() { return <Typography variant="h5">Update Student Page</Typography>; }
function DeleteStudent() { return <Typography variant="h5">Delete Student Page</Typography>; }
function Teachers() { return <Typography variant="h4">Teachers Page</Typography>; }
function Classes() { return <Typography variant="h4">Classes Page</Typography>; }
function Attendance() { return <Typography variant="h4">Attendance Page</Typography>; }
function Exams() { return <Typography variant="h4">Exams Page</Typography>; }
function Payments() { return <Typography variant="h4">Payments Page</Typography>; }
function Library() { return <Typography variant="h4">Library Page</Typography>; }
function Notices() { return <Typography variant="h4">Notices Page</Typography>; }
function Reports() { return <Typography variant="h4">Reports Page</Typography>; }
function Settings() { return <Typography variant="h4">Settings Page</Typography>; }

// ---------------- DRAWER CONTENT ----------------
function MiniDrawerContent({ darkMode, setDarkMode }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const navigate = useNavigate();

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleListItemClick = (index, path) => {
    setSelectedIndex(index);
    navigate(path);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 5, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Student Management System
          </Typography>
          <IconButton color="inherit" onClick={toggleDarkMode}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List sx={{ px: 1 }}>
          {menuItems.map((item, index) => (
            <Box key={item.text}>
              <ListItem disablePadding>
                <StyledListItemButton
                  selected={selectedIndex === index}
                  onClick={() => handleListItemClick(index, item.path)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </StyledListItemButton>
              </ListItem>
              {item.subMenu && selectedIndex === index && (
                <List sx={{ pl: 4 }}>
                  {item.subMenu.map((subItem) => (
                    <ListItem key={subItem.text} disablePadding>
                      <StyledListItemButton onClick={() => navigate(subItem.path)}>
                        <ListItemIcon>{subItem.icon}</ListItemIcon>
                        <ListItemText primary={subItem.text} />
                      </StyledListItemButton>
                    </ListItem>
                  ))}
                </List>
              )}
            </Box>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/students" element={<Students />} />
          <Route path="/students/add" element={<AddStudent />} />
          <Route path="/students/update" element={<UpdateStudent />} />
          <Route path="/students/delete" element={<DeleteStudent />} />

          <Route path="/teachers" element={<Teachers />} />
          <Route path="/teachers/add" element={<AddStudent />} />
          <Route path="/teachers/update" element={<UpdateStudent />} />
          <Route path="/teachers/delete" element={<DeleteStudent />} />

          <Route path="/classes" element={<Classes />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/library" element={<Library />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Box>
    </Box>
  );
}

// ---------------- ROOT COMPONENT ----------------
export default function MiniDrawer() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <ThemeProvider theme={darkMode ? blueDarkTheme : blueLightTheme}>
      <Router>
        <Routes>
          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Drawer UI after login */}
          <Route path="/*" element={<MiniDrawerContent darkMode={darkMode} setDarkMode={setDarkMode} />} />

          {/* Default → login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
