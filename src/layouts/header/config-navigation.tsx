import { useMemo } from 'react';
// routes
// components
import Icon from '@mui/material/Icon';
// import { IconsMui } from '@/assets/icons/icons';
import { NavConfigProps, NavSectionProps } from '../../types/navSectionTypes/index';
import { paths } from '../../routes/paths';

// ----------------------------------------------------------------------
const CustomIcon = ({ name }: { name: any }) => <Icon component={name} />;

// const ICONS = {
//     home: CustomIcon(IconsMui.home),

//   };

// ----------------------------------------------------------------------

export function useNavData(): NavSectionProps {
  const data: NavSectionProps['data'] = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        subheader: 'Home',
        items: [
          { title: 'Introduction', path: paths.home.root, icon: '' },
          { title: 'Getting Started', path: paths.home.root, icon: '' },
          { title: 'HTTP request', path: paths.home.root, icon: '' },
        ],
      },

      // MANAGEMENT
      // ----------------------------------------------------------------------
      // {
      //   subheader: 'About',
      //   items: [{ title: 'cache', path: paths.home.e, icon: '' }],
      // },
      // {
      //   subheader: 'Experience',
      //   items: [{ title: 'Cache', path: paths.home.cache, icon: '' }],
      // },
      // {
      //   subheader: 'Education',
      //   items: [{ title: 'Cache', path: paths.home.cache, icon: '' }],
      // },
      // {
      //   subheader: 'Projects',
      //   items: [{ title: 'Cache', path: paths.home.cache, icon: '' }],
      // },
      // {
      //   subheader: 'Designs',
      //   items: [{ title: 'cache', path: paths.home.addInterceptor, icon: '' }],
      // },
      // {
      //   subheader: 'Contact',
      //   items: [{ title: 'Cache', path: paths.home.cache, icon: '' }],
      // },
    ],
    []
  );

  const navConfig: NavConfigProps = {}; // Ajusta según tus necesidades

  return {
    data,
    config: navConfig,
  };
}
