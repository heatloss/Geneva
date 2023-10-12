import { useState } from 'react';
import AdUnitSelector from './AdUnitSelector';
import AdUnitConfigurator from './AdUnitConfigurator';

const AdUnitSetup = ({ layoutproduct, layoutname, layouttemplate }) => {
  const [selectedAdUnit, setSelectedAdUnit] = useState('');

  return (
    <>
      {selectedAdUnit === '' ? (
        <AdUnitSelector
          layoutname={layoutname}
          layouttemplate={layouttemplate}
          layoutproduct={layoutproduct}
          onAdUnitSelect={setSelectedAdUnit}
        ></AdUnitSelector>
      ) : (
        <AdUnitConfigurator
          layoutname={layoutname}
          layouttemplate={layouttemplate}
          adunitname={selectedAdUnit}
        />
      )}
    </>
  );
};

export default AdUnitSetup;
