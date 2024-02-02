import { useMemo } from "react";

// Importing necessary types and paths
import {
  NavConfigProps,
  NavSectionProps,
} from "../../types/navSectionTypes/index";
import { paths } from "../../routes/paths";

// ----------------------------------------------------------------------
// Placeholder for potential future customization with icons
// const CustomIcon = ({ name }: { name: any }) => <Icon component={name} />;
// const ICONS = {
//   home: CustomIcon(IconsMui.home),
// };

// ----------------------------------------------------------------------

// Function to generate navigation data using useMemo
export function useNavData(): NavSectionProps {
  const data: NavSectionProps["data"] = useMemo(
    () => [
      // Link 1: Home section with submenu items
      // ----------------------------------------------------------------------
      {
        subheader: "Home",
        items: [
          { title: "Introduction", path: paths.home.root, icon: "" },
          // Additional submenu items can be added here
          // { title: "Getting Started", path: paths.home.root, icon: "" },
          // { title: "HTTP request", path: paths.home.root, icon: "" },
        ],
      },

      // Link 2: Example of submenu sections (commented out for simplicity)
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

  const navConfig: NavConfigProps = {}; // Adjust as needed for customization

  return {
    data,
    config: navConfig,
  };
}
