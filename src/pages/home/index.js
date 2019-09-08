import React from 'react';

import {
  Container, List, ListDescription, ListContent, Work,
} from './styles';
import AnimatedCard from '../../components/AnimatedCard';

const Home = () => (
  <Container>
    <List>
      <ListDescription>
        <h3>Apegar</h3>
        <p>O ensaio Apegar vem, a partir dessas mãos, segurar o tempo junto comigo.</p>
      </ListDescription>
      <ListContent>
        <Work to="/work">
          <AnimatedCard
            src="https://showme.co.za/pretoria/files/2016/03/nude-photography.jpg"
            size="30"
          />
        </Work>
        <Work to="/work">
          <AnimatedCard
            src="https://www.shootfactory.co.uk/wp-content/uploads/2018/08/Split-Lighting-Studio-Photography-1.jpg"
            size="30"
          />
        </Work>
        <Work to="/work">
          <AnimatedCard
            src="https://blog.photowhoa.com/2015/wp-content/uploads/2016/03/photgrap.png"
            size="30"
          />
        </Work>
        <Work to="/work">
          <AnimatedCard
            src="https://www.bworldonline.com/wp-content/uploads/2018/01/Hope-Remorse-art-011618.jpg"
            size="30"
          />
        </Work>
        <Work to="/work">
          <AnimatedCard
            src="http://www.bezdanphoto.com/wp-content/uploads/2015/12/BDW_People_MeiMing-1-of-1.jpg"
            size="30"
          />
        </Work>
        <Work to="/work">
          <AnimatedCard
            src="https://ccp.arizona.edu/sites/default/files/styles/carousel-featured/public/46_nicole_sealey_002.jpg?itok=n0xwa7n5"
            size="30"
          />
        </Work>
      </ListContent>
    </List>
  </Container>
);

export default Home;
