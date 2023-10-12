import {
  Grid,
  Box,
  Button,
  Group,
  Table,
  Token,
  Switch,
  FormLabel,
  Input,
  Typography,
  IconEdit,
  IconTrash,
  IconCopy,
  IconPlus,
  IconCornerRightUp,
} from '@screentone/core';

import IconDuplicate from '@screentone/core/Icon/IconDuplicate';

const AdUnitConfigurator = ({ layoutname, layouttemplate, adunitname }) => {
  const adslots = [
    'BULLETIN',
    'MARKETHEADER',
    'BANNERTOP',
    'NATIVE1',
    'RAIL1',
    'RAIL2',
    'MOBILE',
    'MOSTPOPULAR',
    'BROKER1',
    'BROKER2',
    'BROKER3',
    'BROKER4',
    'BANNERBOTTOM',
    'TRENDINGTICKERS',
    'NAVSPONSOR',
    'BULLETIN',
    'PAGELOGO',
  ];

  const adsizes = [
    '970x90',
    '970x66',
    '970x250',
    '1x6',
    '1x2',
    'Fluid',
    '300x250',
    '300x600',
    '300x1050',
    '300x1850',
    '728x90',
    '140x31',
    '280x40',
  ];

  const randomizeAdSize = () => {
    const randSize = [...adsizes].sort(() => 0.5 - Math.random());
    randSize.length = Math.floor(Math.random() * 5) + 1;
    return randSize;
  };

  return (
    <Grid>
      <Grid.Row>
        <Grid.Col xs={12} sm={12} md={12} lg={12}>
          <Typography variant="header3" margin={{ top: 'lg' }}>
            Ad Unit: <em>{adunitname}</em>
          </Typography>
          <Box className="adUnitBox">
            <Box.Title>
              <Group align="end" gap="smd">
                <Button size="sm" tertiary icon={IconCornerRightUp}>
                  Copy to Production
                </Button>
                <Button size="sm" tertiary icon={IconDuplicate}>
                  Clone & Edit
                </Button>
                <Button size="sm" tertiary icon={IconTrash}>
                  Delete
                </Button>
              </Group>
            </Box.Title>
            <Box.Content padding={{ all: 'none' }}>
              <Table fullWidth border="horizontal">
                <Table.Head>
                  <Table.Row>
                    <Table.Cell scope="col">Location</Table.Cell>
                    <Table.Cell scope="col">Sizes</Table.Cell>
                    <Table.Cell scope="col" align="center">
                      Active
                    </Table.Cell>
                    <Table.Cell scope="col" align="right">
                      Modify
                    </Table.Cell>
                  </Table.Row>
                </Table.Head>
                <Table.Body>
                  {adslots.map((adslot) => (
                    <Table.Row key={adslot}>
                      <Table.Cell>{adslot}</Table.Cell>
                      <Table.Cell>
                        <Group gap="xs">
                          {randomizeAdSize().map((adsize) => (
                            <Token>{adsize}</Token>
                          ))}
                        </Group>
                      </Table.Cell>
                      <Table.Cell align="center">
                        <Switch id="switch1" defaultChecked />
                      </Table.Cell>
                      <Table.Cell align="right">
                        <Group gap="xs" wrap={false} align="end">
                          <Button tertiary icon={IconEdit} />
                          <Button tertiary icon={IconCopy} />
                          <Button tertiary icon={IconTrash} />
                        </Group>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Box.Content>
          </Box>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col xs={12} sm={12} md={12} lg={12}>
          <Group align="space-between" valign="end">
            <Group gap="sm" margin={{ top: 'md' }}>
              <Group.Item>
                <FormLabel label="Location" labelPosition="top">
                  <Input />
                </FormLabel>
              </Group.Item>
              <Group.Item>
                <FormLabel label="Site" labelPosition="top">
                  <Input />
                </FormLabel>
              </Group.Item>
              <Group.Item>
                <FormLabel label="Zone" labelPosition="top">
                  <Input />
                </FormLabel>
              </Group.Item>
              <Group.Item className="switch">
                <FormLabel label="Active" labelPosition="top">
                  <Switch id="switch3" defaultChecked />
                </FormLabel>
              </Group.Item>
            </Group>
            <Group.Item>
              <Button primary icon={IconPlus} value="add"></Button>
            </Group.Item>
          </Group>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col xs={12} sm={12} md={12} lg={12}></Grid.Col>
      </Grid.Row>
    </Grid>
  );
};

export default AdUnitConfigurator;
