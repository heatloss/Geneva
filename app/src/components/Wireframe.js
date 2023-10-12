import { useState, useEffect } from 'react';
import {
  Grid,
  Box,
  Button,
  Group,
  Input,
  List,
  Tabs,
  Typography,
  IconCornerDownLeft,
  IconPlus,
} from '@screentone/core';
import AdUnitSetup from './AdUnitSetup';
import tiersdata from '../data_tiers.js';

const Wireframe = () => {
  const [tab, updateTab] = useState('');
  const [selectedT1, setselectedT1] = useState('');
  const [selectedT2, setselectedT2] = useState('');
  const [selectedT3, setselectedT3] = useState('');
  const [t1sList, setT1sList] = useState([]);
  const [t2sList, setT2sList] = useState([]);
  const [t3sList, setT3sList] = useState([]);
  const [activeLayout, setActiveLayout] = useState('');
  const [randomLayouts, setRandomLayouts] = useState([]);

  const configurations = [
    { id: 'sectionfront', name: 'Section Front' },
    { id: 'subsection', name: 'Subsection' },
    { id: 'article', name: 'Article' },
    { id: 'immersive', name: 'Immersive Article' },
  ];

  const handleTab = (val) => {
    const tierID = val;
    updateTab(tierID);
    setselectedT1('');
    setselectedT2('');
    setselectedT3('');
    setT1sList(
      tiersdata.products.find((product) => {
        return product.id === tierID;
      }).t1s
    );
    setT2sList([]);
    setT3sList([]);
    setActiveLayout('');
  };

  const selectT1 = (e) => {
    const tiername = e.currentTarget.dataset.value;
    setselectedT1(tiername);
    setT2sList(t1sList.find((t1) => t1.name === tiername).t2s);
    setselectedT2('');
    setselectedT3('');
    setT3sList([]);
    randomizeLayout('');
  };

  const selectT2 = (e) => {
    const tiername = e.currentTarget.dataset.value;
    setselectedT2(tiername);
    setT3sList(t2sList.find((t2) => t2.name === tiername).t3s);
    setselectedT3('');
    randomizeLayout('');
  };

  const selectT3 = (e) => {
    const tiername = e.currentTarget.dataset.value;
    setselectedT3(tiername);
    randomizeLayout('');
  };

  const handleLayout = (e) => {
    const buttonid = e.currentTarget.value;
    setActiveLayout(buttonid);
  };

  const randomizeLayout = () => {
    const randConf = [...configurations].sort(() => 0.5 - Math.random());
    randConf.length = Math.floor(Math.random() * 3) + 1;
    setRandomLayouts(randConf);
    setActiveLayout('');
  };

  useEffect(() => {
    handleTab('wsj');
  }, []);

  return (
    <Grid className="outerGrid">
      <Grid.Row>
        <Grid.Col xs={12} sm={2} md={2} lg={2}>
          <div className="sideBar">
            <List>
              <List.Item>Sidebar stuff</List.Item>
            </List>
          </div>
        </Grid.Col>
        <Grid.Col xs={12} sm={9} md={9} lg={9}>
          <Grid>
            <Grid.Row>
              <Grid.Col>
                <Typography variant="header1" margin={{ top: 'mlg' }}>
                  Project: Geneva
                </Typography>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col xs={12} sm={12} md={12} lg={12}>
                <Group fullWidth gap="sm" margin={{ bottom: 'lg' }}>
                  <Group.Item grow={1} className="urlParserGroup">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    <Input
                      placeholder="Paste WSJ URL here"
                      className="urlParser"
                    />
                  </Group.Item>
                  <Group.Item>
                    <Button primary icon={IconCornerDownLeft} />
                  </Group.Item>
                </Group>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col xs={12} sm={12} md={12} lg={12}>
                <Tabs
                  role="tablist"
                  onChange={handleTab}
                  value={tab}
                  margin={{ bottom: 'sm' }}
                >
                  <Tabs.Item role="tab" id="tab-id0" value="wsj">
                    WSJ
                  </Tabs.Item>
                  <Tabs.Item role="tab" id="tab-id1" value="wsjbuyside">
                    WSJ Buyside
                  </Tabs.Item>
                  <Tabs.Item role="tab" id="tab-id2" value="wsjpro">
                    WSJ Pro
                  </Tabs.Item>
                </Tabs>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row className="tiersColumns">
              <Grid.Col xs={12} sm={4} md={4} lg={4}>
                <Box margin={{ bottom: 'lg' }}>
                  <Box.Title>Tier 1</Box.Title>
                  <Box.Content className="selfScroll">
                    <List>
                      {t1sList.map((tier) => (
                        <List.Item
                          key={tier.name}
                          data-value={tier.name}
                          onClick={selectT1}
                          className={`${
                            tier.name === selectedT1 ? 'selected' : ''
                          }`}
                        >
                          {tier.name}
                        </List.Item>
                      ))}
                    </List>
                  </Box.Content>
                </Box>
              </Grid.Col>
              <Grid.Col xs={12} sm={4} md={4} lg={4}>
                <Box>
                  <Box.Title>Tier 2</Box.Title>
                  <Box.Content className="selfScroll">
                    <List>
                      {t2sList.map((tier) => (
                        <List.Item
                          key={tier.name}
                          data-value={tier.name}
                          onClick={selectT2}
                          className={`${
                            tier.name === selectedT2 ? 'selected' : ''
                          }`}
                        >
                          {tier.name}
                        </List.Item>
                      ))}
                    </List>
                  </Box.Content>
                </Box>
              </Grid.Col>
              <Grid.Col xs={12} sm={4} md={4} lg={4}>
                <Box>
                  <Box.Title>Tier 3</Box.Title>
                  <Box.Content className="selfScroll">
                    <List>
                      {t3sList.map((tier) => (
                        <List.Item
                          key={tier.name}
                          data-value={tier.name}
                          onClick={selectT3}
                          className={`${
                            tier.name === selectedT3 ? 'selected' : ''
                          }`}
                        >
                          {tier.name}
                        </List.Item>
                      ))}
                    </List>
                  </Box.Content>
                </Box>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col xs={12} sm={12} md={12} lg={12}>
                <Typography
                  variant="label2"
                  margin={{ bottom: 'xs', top: 'xs', left: 'md' }}
                >
                  Path:
                </Typography>
                <Typography
                  variant="header4"
                  margin={{ top: 'none', bottom: 'md', left: 'md' }}
                >
                  {` ${
                    tiersdata.products.find((product) => {
                      return product.id === tab;
                    })?.name
                  }${selectedT1 ? ' / ' + selectedT1 : ''}${
                    selectedT2 ? ' / ' + selectedT2 : ''
                  }${selectedT3 ? ' / ' + selectedT3 : ''}`}
                </Typography>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col xs={12} sm={12} md={12} lg={12}>
                <Typography
                  variant="label2"
                  margin={{ bottom: 'sm', horizontal: 'md' }}
                >
                  Layout:
                </Typography>
                {selectedT1 === '' ? (
                  <Typography margin={{ left: 'md' }}>
                    <em>No tier selected.</em>
                  </Typography>
                ) : (
                  <>
                    <Group align="space-between">
                      <Group gap="xs" margin={{ left: 'md' }}>
                        {randomLayouts.map((layout) => (
                          <Button
                            key={layout.id}
                            secondary
                            size="sm"
                            value={layout.id}
                            active={activeLayout === layout.id}
                            onClick={handleLayout}
                          >
                            {layout.name}
                          </Button>
                        ))}
                      </Group>
                      <Button tertiary size="sm" icon={IconPlus} value="add">
                        Create New Layout
                      </Button>
                    </Group>
                  </>
                )}
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col xs={12} sm={12} md={12} lg={12}>
                {activeLayout && (
                  <AdUnitSetup
                    layoutproduct={tab}
                    layoutname={selectedT3 || selectedT2 || selectedT1}
                    layouttemplate={
                      configurations.find((layout) => {
                        return layout.id === activeLayout;
                      }).name
                    }
                  />
                )}
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  );
};

export default Wireframe;
