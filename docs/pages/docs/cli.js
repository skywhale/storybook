import React from 'react';

import Page, { generator } from '../../components/Page';

import TopNav from '../../components/TopNav';
import Content from '../../components/Content';

import content from '../../content/docs/cli.md';

export default generator('DocsCli', ({ path, query }) =>
  <Page>
    <TopNav {...{ path }} />
    <Content {...{ path, query }}>{content}</Content>!
  </Page>
);
 