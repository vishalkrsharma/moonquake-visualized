import arkadeep from '/assets/arkadeep.jpeg';
import maaz from '../assets/maaz.jpeg';
import soham from '../assets/soham.jpg';
import vishal from '../assets/vishal.jpg';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { VscGithub } from 'react-icons/vsc';
import { styled } from 'styled-components';
import Image from 'next/image';

const Developers = () => {
  return (
    <DevelopersContainer>
      <Header>Our Team:</Header>
      <List>
        <div className='row'>
          <ListItem>
            <ItemImg
              src='/assets/arkadeep.jpeg'
              alt=''
              width={70}
              height={70}
            />
            <ItemName>Arkadeep Mitra</ItemName>
            <ItemAnchor
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/arkadeep-mitra-774695224/'
            >
              <AiOutlineLinkedin />
            </ItemAnchor>
            <ItemAnchor
              target='_blank'
              rel='noreferrer'
              href='https://github.com/ArkMitra'
            >
              <VscGithub />
            </ItemAnchor>
          </ListItem>
          <ListItem classname='developers__list__item'>
            <ItemImg
              src='/assets/maaz.jpeg'
              alt=''
              width={70}
              height={70}
            />
            <ItemName>Maaz Shahid</ItemName>
            <ItemAnchor
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/maaz-shahid-96998720a/'
            >
              <AiOutlineLinkedin />
            </ItemAnchor>
            <ItemAnchor
              target='_blank'
              rel='noreferrer'
              href='https://github.com/maaz-shahid99'
            >
              <VscGithub />
            </ItemAnchor>
          </ListItem>
        </div>
        <div className='row'>
          <ListItem>
            <ItemImg
              src='/assets/soham.jpg'
              alt=''
              width={70}
              height={70}
            />
            <ItemName>Soham Deb Majumdar</ItemName>
            <ItemAnchor
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/soham-deb-majumder-35b959210/'
            >
              <AiOutlineLinkedin />
            </ItemAnchor>
            <ItemAnchor
              target='_blank'
              rel='noreferrer'
              href='https://github.com/samwilson0745'
            >
              <VscGithub />
            </ItemAnchor>
          </ListItem>
          <ListItem classname='developers__list__item'>
            <ItemImg
              src='/assets/vishal.jpg'
              alt=''
              width={70}
              height={70}
            />
            d<ItemName>Vishal Kumar Sharma</ItemName>
            <ItemAnchor
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/vishal-kumar-sharma-955aa0201/'
            >
              <AiOutlineLinkedin />
            </ItemAnchor>
            <ItemAnchor
              target='_blank'
              rel='noreferrer'
              href='https://github.com/vishalkrsharma'
            >
              <VscGithub />
            </ItemAnchor>
          </ListItem>
        </div>
      </List>
    </DevelopersContainer>
  );
};

export default Developers;

const DevelopersContainer = styled.div`
  margin: 0 25rem;
  color: #fff;
`;

const Header = styled.div`
  font-size: 3rem;
  margin: 2.75rem 0;
  text-align: center;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 2rem;
  margin: 3rem 0;
`;

const ItemImg = styled(Image)`
  border-radius: 50%;
`;

const ItemName = styled.div`
  font-size: 2rem;
  width: 23rem;
`;

const ItemAnchor = styled.a`
  width: 4rem;
  height: 4rem;
  color: #ffffff;
  font-size: 4rem;
`;
