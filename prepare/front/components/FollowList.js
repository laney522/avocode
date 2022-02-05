import React from 'react';
import PropTypes from 'prop-types';
import { Card, List, Button } from 'antd';
import { checkPropTypes } from 'prop-types';

const FollowList = ({ header, data }) => {
  return (
    <List
      style={{ marginBottom: 20 }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={<div style={{ textAlign: 'center', margin: '10px 0' }}><Button>더 보기</Button></div>}
      bordered
      dataSource={data}
      renerItem={(item) => (
        <List.Item style={{ marginTop: 20 }}>
          <Card actions={[<StopOutlined key="stop" />]}></Card>
          <Card.Meta description={item.nickname} />
        </List.Item>
      )}
    />
  )
};

FollowList.propType = {
  header: PropTypes.toString.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;