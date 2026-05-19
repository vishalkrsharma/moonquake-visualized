import Image from 'next/image';
import { VscGithub } from 'react-icons/vsc';
import { AiOutlineLinkedin } from 'react-icons/ai';

const developers: Developer[][] = [
  [
    {
      name: 'Arkadeep Mitra',
      img: '/assets/arkadeep.jpeg',
      alt: 'img_arkadeep',
      linkedin: 'https://www.linkedin.com/in/arkadeep-mitra-774695224/',
      github: 'https://github.com/ArkMitra',
    },
    {
      name: 'Maaz Shahid',
      img: '/assets/maaz.jpeg',
      alt: 'img_maaz',
      linkedin: 'https://www.linkedin.com/in/maaz-shahid-96998720a/',
      github: 'https://github.com/maaz-shahid99',
    },
  ],
  [
    {
      name: 'Soham Deb Majumdar',
      img: '/assets/soham.jpg',
      alt: 'img_soham',
      linkedin: 'https://www.linkedin.com/in/soham-deb-majumder-35b959210/',
      github: 'https://github.com/samwilson0745',
    },
    {
      name: 'Vishal Kumar Sharma',
      img: '/assets/vishal.jpg',
      alt: 'img_vishal',
      linkedin: 'https://www.linkedin.com/in/vishalkrsharma/',
      github: 'https://github.com/vishalkrsharma',
    },
  ],
];

const DeveloperCard = ({ dev }: { dev: Developer }) => (
  <li
    className='flex items-center justify-start gap-8 my-12'
    data-testid='dev-name'
  >
    <Image
      src={dev.img}
      alt={dev.alt}
      width={70}
      height={70}
      className='rounded-full'
    />
    <span className='text-xl w-92'>{dev.name}</span>
    <a
      href={dev.linkedin}
      target='_blank'
      rel='noreferrer'
      className='text-3xl leading-none hover:opacity-70 transition-opacity'
    >
      <AiOutlineLinkedin />
    </a>
    <a
      href={dev.github}
      target='_blank'
      rel='noreferrer'
      className='text-3xl leading-none hover:opacity-70 transition-opacity'
    >
      <VscGithub />
    </a>
  </li>
);

const Developers = () => (
  <div className='container px-4 mx-auto space-y-4'>
    <h1 className='text-2xl font-medium text-center'>Our Team</h1>
    <ul className='flex items-center justify-center gap-16'>
      {developers.map((group, gi) => (
        <div key={gi}>
          {group.map((dev) => (
            <DeveloperCard
              key={dev.name}
              dev={dev}
            />
          ))}
        </div>
      ))}
    </ul>
  </div>
);

export default Developers;
