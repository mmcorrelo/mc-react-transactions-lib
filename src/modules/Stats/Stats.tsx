import React from 'react';
import { IChartFormFields } from '../../types';

import StatsPageContainer from './containers/StatsPageContainer/StatsPageContainer';

interface Props {
  baseUrl: string;
  defaults: IChartFormFields
}

export default function(props: Props) {
  return <StatsPageContainer {...props}/>;
}
