import Layout from '../components/Layout';
import React from 'react';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';

const TagList = styled.ul`
  font-size: 16px;
  background: #fff;
  > li {
    border-bottom: 1px solid #d5d5d9;

    margin-left: 16px;

    > a {
        padding: 12px 16px 12px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
  }
`

const Button = styled.button`
  border: none;
  font-size: 18px;
  line-height: 22px;
  padding: 9px 12px;
  background: #767676;
  border-radius: 4px;
  color: #fff;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Space = styled.div`
  height: 16px;
`

function Tags() {
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag => <li key={tag}>
          <Link to={'/tags/'+tag}>
            <span className="oneLine">{tag}</span>
            <Icon name="right" />
          </Link>
        </li>)}
      </TagList>
      <ButtonWrapper>
        <Space />
        <Space />
        <Space />
        <Button>新建标签</Button>
        <Space />
      </ButtonWrapper>

    </Layout>
  );
}

export default Tags;