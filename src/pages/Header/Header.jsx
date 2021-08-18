import React from 'react'

import { PageHeader, Button, Descriptions } from 'antd';

import {HeaderStyle as style} from './HeaderStyle.module.less'

const Header = () => {
    return (
        <div className="site-page-header-ghost-wrapper">
    <PageHeader
      ghost={false}
      // onBack={() => window.history.back()}
      title="Aida Rezakhani"
      // subTitle="This is a subtitle"
      extra={[
        <Button className={style.button} key="3">Operation</Button>,
        <Button key="2">Operation</Button>,
        <Button key="1" type="primary">
          Primary
        </Button>,
      ]}
    >
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
        <Descriptions.Item label="Association">
          <a>421421</a>
        </Descriptions.Item>
        <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
        <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
        <Descriptions.Item label="Remarks">
          Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
    </PageHeader>
  </div>
);
// .site-page-header-ghost-wrapper {
//   padding: 24px;
//   background-color: #f5f5f5;
// }
    
}

export default Header