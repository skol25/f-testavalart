# Project Redesign for Features Page

## Getting Started

1. Install dependencies: `npm i`.
2. Open a new terminal and run the mock database: `npm run db`.
3. In the same terminal, execute: `npm start`.

Note: The mock must be run separately due to an issue when combining commands within `npm start`.

## Design Concept

The design was crafted based on several ideas, utilizing carousels to provide a better user experience without excessive scrolling. The goal was to create an interactive and comfortable environment for users to explore feature information. The design consists of two main sections:

Also you can find the design here:https://www.figma.com/file/zgbsaDBkMSmNd1m87tOvz4/evalart-design?type=design&node-id=0%3A1&mode=design&t=vhfnRPTgxLDZ8qWu-1

1. Benefits Carousel
   In the first part, a carousel showcases various benefits in an interactive and visually appealing manner. Users can easily navigate through the benefits, making it a seamless experience.

2. Features Carousel
   Below the benefits section, another carousel is implemented, showcasing features in a distinctive style. This carousel is designed to present features in an engaging and user-friendly way, ensuring an immersive exploration of the app's capabilities.

## Overview

This redesign of the features page aimed to enhance the development process by initially dedicating time to creating a design in Figma. The design presented ideas and outlined the final appearance of the page. This phase took approximately 30 minutes as it involved designing a view with two sections. My workflow typically involves having a design direction before coding to streamline development and reduce changes later on, ensuring efficiency.

## Development Organization

The project structure is organized into `public` and `src` directories. The `public` directory houses app-related assets (images, fonts, icons), while the `src` directory contains the app's content. Within `src`, various folders are present, and here's an overview:

- **app.tsx:** Contains all the app providers. It uses `react-i18next` for language handling, a data provider fetching information for the "common" section (can be adapted to "data common"), a Redux store provider storing common data using Redux Toolkit, a `BrowserRouter` for dynamic routing, and a `ThemeProviderCustomes` for the color palette of MUI components.

- **Layouts:** Defines the structure of the page, including header, main, and footer.

- **App Routes:** Manages dynamic routes using `react-router-dom`.

- **Views:** Houses components rendered for `react-router-dom` routes. Inside `sections`, each section has its folder. For instance, `features` contains the view for its respective section.

- **Services:** Contains app services like API calls.

- **Types:** Includes data types used throughout the app.

- **Hooks:** Reusable hooks (not used in this project due to time constraints).

- **Constants:** Holds constant data for backup purposes in case the mock database data fails.

- **Components:** Reusable components like the input select and centered text for subtitles within sections.

# Challenge Overview

## Approach

The challenge involved redesigning and adding a personal touch without affecting the overall design and content of the page. I approached it by considering the use of carousels to organize the sections for both benefits and features. Since there were two sections in the view, I maintained this perspective but improved text organization using cards and carousels. This approach aimed to provide a dynamic focus and enhance the user experience, preventing users from feeling overwhelmed by a large amount of text.

## Inspirations

For this design, I drew inspiration from various websites with similar content to Evalart. I explored ideas from a content selector but opted for implementing cards in a carousel to display content. In the first section, instead of the typical carousel where everything changes, I chose to transition only the text section. This decision aimed to provide a smoother user experience, minimizing drastic changes for the user.

## Design Decision Making

To make design decisions, I utilized Figma, a tool I commonly use to showcase interfaces to clients. The goal was to maintain the original text while seamlessly integrating it into the existing page design.

## Tools

- Figma: Design tool for brainstorming and visualizing the final design.

- React: Framework used for the development phase.

- Mui (Material-UI): Component library for creating consistent and appealing interfaces.

- Typescript: Language chosen for enhanced code maintainability.

- react-redux: State management tool for efficient application state handling.

- i18next: Facilitates language localization within the app.

## Mockup Proposal

The challenge involved redesigning and adding a personal touch without affecting the overall design and content of the page. I approached it by considering the use of carousels to organize the sections for both benefits and features. Since there were two sections in the view, I maintained this perspective but improved text organization using cards and carousels. This approach aimed to provide a dynamic focus and enhance the user experience, preventing users from feeling overwhelmed by a large amount of text.

The design decisions were made with the user in mind, aiming to provide a seamless and improved experience while respecting the original design of the page.

## Project Scalability

The project structure is designed with scalability in mind. Within the `views` folder, additional views for the app can be added. The `sections` folder allows easy incorporation of sections within the views. This organized structure ensures a future-proof, comprehensible, and scalable project.
