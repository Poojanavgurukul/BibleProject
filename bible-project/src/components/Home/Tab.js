import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import LanguageIcon from '@material-ui/icons/Language';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import LanguageContextProvider from '../../contexts/language';
import LanguageTable from '../Language/languageTable';
import VersionContextProvider from '../../contexts/version';
import Table from '../Version/table';
import ProjectTable from '../../Project/table';
import BookContextProvider from '../../contexts/book';
import { makeStyles } from '@material-ui/core/styles';
import BibleContextProvider from '../../contexts/bible';
import BibleTable from '../Bible/BibleTable';
import ProjectContextProvider from '../../contexts/project';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>{children}</Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 'auto',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab icon={<LanguageIcon />} label="Language" {...a11yProps(0)} />
        <Tab icon={<ListAltIcon />} label="Version" {...a11yProps(1)} />
        <Tab icon={<LocalLibraryIcon />} label="Bible" {...a11yProps(2)} />
        <Tab icon={<ArtTrackIcon />} label="Project" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <LanguageContextProvider>
          <LanguageTable />
        </LanguageContextProvider>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <VersionContextProvider>
          <Table />
        </VersionContextProvider>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <BibleContextProvider>
          <LanguageContextProvider>
            <VersionContextProvider>
            <BibleTable />
          </VersionContextProvider>
          </LanguageContextProvider>
        </BibleContextProvider>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ProjectContextProvider>
          <BookContextProvider>
          <ProjectTable />
          </BookContextProvider>
        </ProjectContextProvider>
      </TabPanel>
    </div>
  );
}
