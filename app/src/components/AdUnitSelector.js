import { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  Box,
  Button,
  Input,
  List,
  IconFilter,
  IconThumbsUp,
} from '@screentone/core';
import adunitdata from '../data_adunits.js';

const AdUnitSelector = ({
  layoutname,
  layouttemplate,
  layoutproduct,
  onAdUnitSelect,
}) => {
  const [selectedAdUnit, setSelectedAdUnit] = useState('');
  const [selectedL1, setselectedL1] = useState('');
  const [selectedL2, setselectedL2] = useState('');
  const [selectedL3, setselectedL3] = useState('');
  const [l1sList, setL1sList] = useState([]);
  const [l2sList, setL2sList] = useState([]);
  const [l3sList, setL3sList] = useState([]);

  const selectL1 = (e) => {
    const levelname = e.currentTarget.dataset.value;
    setselectedL1(levelname);
    setL2sList(l1sList.find((l1) => l1.name === levelname).l2s);
    setselectedL2('');
    setselectedL3('');
    setL3sList([]);
    // randomizeConfiguration('');
  };

  const selectL2 = (e) => {
    const levelname = e.currentTarget.dataset.value;
    setselectedL2(levelname);
    setL3sList(l2sList.find((l2) => l2.name === levelname).l3s);
    setselectedL3('');
    // randomizeConfiguration('');
  };

  const selectL3 = (e) => {
    const levelname = e.currentTarget.dataset.value;
    setselectedL3(levelname);
    // randomizeConfiguration('');
  };

  const connectAdUnit = () => {
    const adUnitID = selectedL3 || selectedL2 || selectedL1;
    setSelectedAdUnit(adUnitID);
    onAdUnitSelect(adUnitID);
  };

  useEffect(() => {
    setL1sList(
      adunitdata.products.find((product) => {
        return product.id === layoutproduct;
      }).l1s
    );
  }, [layoutproduct]);

  return (
    <Grid>
      <Grid.Row>
        <Grid.Col xs={12} sm={12} md={12} lg={12}>
          <Typography
            variant="header3"
            margin={{ top: 'lg', bottom: 'none', left: 'md' }}
          >
            Context:&nbsp;
            <em className="contextPath">
              {layoutname} / {layouttemplate}
            </em>
          </Typography>
          <Typography variant="header3" margin={{ top: 'xs', left: 'md' }}>
            Connect an Ad Unit:
          </Typography>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col xs={12} sm={12} md={12} lg={12}>
          <Input
            placeholder="Filter ad units"
            className="adUnitParser"
            icon={IconFilter}
            margin={{ bottom: 'md' }}
          />
        </Grid.Col>
      </Grid.Row>
      <Grid.Row className="layersColumns">
        <Grid.Col xs={12} sm={4} md={4} lg={4}>
          <Box margin={{ bottom: 'lg' }}>
            <Box.Title>Level 1</Box.Title>
            <Box.Content className="selfScroll">
              <List>
                {l1sList.map((level) => (
                  <List.Item
                    key={level.name}
                    data-value={level.name}
                    onClick={selectL1}
                    className={`${level.name === selectedL1 ? 'selected' : ''}`}
                  >
                    {level.name}
                  </List.Item>
                ))}
              </List>
            </Box.Content>
          </Box>
        </Grid.Col>
        <Grid.Col xs={12} sm={4} md={4} lg={4}>
          <Box>
            <Box.Title>Level 2</Box.Title>
            <Box.Content className="selfScroll">
              <List>
                {l2sList.map((level) => (
                  <List.Item
                    key={level.name}
                    data-value={level.name}
                    onClick={selectL2}
                    className={`${level.name === selectedL2 ? 'selected' : ''}`}
                  >
                    {level.name}
                  </List.Item>
                ))}
              </List>
            </Box.Content>
          </Box>
        </Grid.Col>
        <Grid.Col xs={12} sm={4} md={4} lg={4}>
          <Box>
            <Box.Title>Level 3</Box.Title>
            <Box.Content className="selfScroll">
              <List>
                {l3sList.map((level) => (
                  <List.Item
                    key={level.name}
                    data-value={level.name}
                    onClick={selectL3}
                    className={`${level.name === selectedL3 ? 'selected' : ''}`}
                  >
                    {level.name}
                  </List.Item>
                ))}
              </List>
            </Box.Content>
          </Box>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col xs={12} sm={12} md={12} lg={12}>
          <Button
            primary
            icon={IconThumbsUp}
            iconPosition="right"
            disabled={selectedL1 + selectedL2 + selectedL3 === ''}
            onClick={connectAdUnit}
          >
            Choose this Ad Unit
          </Button>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  );
};

export default AdUnitSelector;
