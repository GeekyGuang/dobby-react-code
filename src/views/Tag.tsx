import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import {useTags} from '../useTags';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';

const TopBar = styled.header`
  
`

type Params = {
  id: string;
}
const Tag:React.FC = () => {
  const {findTag} = useTags()
  const {id} = useParams<Params>()
  const tag = findTag(parseInt(id))
  return (
    <Layout>
      <header>
        <Icon name="left" />
        <span>编辑标签</span>
      </header>
      <label>
        备注
        <input type="text" placeholder="标签名"/>
      </label>
      <div>
        <Button>删除标签</Button>
      </div>
    </Layout>
  )
}

export {Tag}