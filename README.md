# Artworks

This project is created for the demonstration purpose to show strength and ability of team Techanzo. This project displays vintage art gallery in interactive and elegant way.

All the code is available [here](____________________).

Live project is available to test [here](____________________).

## Technologies used

- React
- Typescript
- Material-ui

## Technical features

- Infinite list of artwork using [Artic public API](https://api.artic.edu)
- Search artwork by title and display matching artworks with highlighted search term.
- Filter the artwork by Place of Origin. (currently, only supports France or All of them). This limitation is intentional to save development time.
- Lazy loading artwork's images for fast initial render and to avoid UI jumps.
- View more information about particular artwork by clicking on it.
- Created a vintage theme from scratch to display Artworks in a visually appealing way.

## How to start the project

### Prerequisites

- Nodejs >= 18 is preferred
- global installation of yarn package manager

### Steps for installing dependencies (mandatory for first time)

Run this command in your project directory to install project dependencies:

```sh
yarn
```

### Steps to start the project

Run this command to start the project:

```sh
yarn start
```

## Project architecture

In our application, we adhere to the **MVVM pattern**, which is structured as follows:

- **Model**: Folder named `api` serves as model for this application.
- **ViewModel**: Our ViewModel is implemented using custom hooks, which contain all the business logic and event handlers.
- **View**: The View component is built using React and is solely responsible for rendering the DOM structure.

### Folder structure

```sh
+--public             # static assets, copied directly to build
+--src                # main source code
|  +--@types          # global type declarations and library type augmentations
|  +--api             # api layer
|  +--components      # reusable components
|  +--assets          # custom icons and images
|  +--pages           # grouped code based on their use-case or visual separation
|  |  +--home         # all the code related to home page (this demo project does not have other pages)
|  +--utils           # utility functions
|  +--theme.ts        # mui theme overrides
|  +--app.tsx         # global providers and global css configurations
|  +--index.tsx       # application entry point
+--.eslintignore      # list of directories and files to ignore for linting
+--.eslintrc.js       # eslint configuration for linting
+--.prettierrc.js     # prettier configuration
+--.gitignore         # list of directions and files to ignore on git
+--.nvmrc             # helpful for using in mac terminal to select node version
+--package.json       # project configurations and dependencies
+--tsconfig.json      # typescript configurations
+--yarn.lock          # used by yarn package manager to track dependency versions
```

### Our assumptions

We assume that on page refresh all the data should be cleared. So, we do not save user's search term (query) or location filter in url's query params. Instead we kept them in React's context, so that they get cleared on page refresh.

### FAQ

Q: Why we choose material-ui over other css frameworks?

A: Our team has worked with many different projects using material-ui in recent past. Also, material-ui is the most popular framework due to its rich feature-set and easy to use.

Q: Why we do not use any routing in the application?

A: For this demo project, we did not have much data, for which we can have different pages. So, we did not use it. We have used `react-router` and `reach-router` in most of our projects.

Q: Why redux is not used in this application?

A: The application size is very small. We still required some shared state and for that we used React's context.

## Flow of implementation

- Project initialization

  - Initial Meeting between the design and technical team for clearly outlining the goal, objectives of project, client requirements and resource allocation.
  - scheduling the task and time bound milestone.
  - understand public API properly.
  - produce rough wireframes on paper.
  - Categorize requirements as essential and optional. Prioritize them based on project's requirement

- project setup and designing

  - Task Accomplished by Design team

    - Create a high-level architectural design that outlines the project's structure and major components.
    - Set the core theme of project.
    - Design the user interface, considering usability and user experience.

  - Task Accomplished by Development team
    - initialized the project and setup the coding environment (IDE).
    - setup the playground environment that allows developers to experiment and test.
    - Develop the view independent infinite scrolling feature by using intersection observer in playground.
    - Develop the search functionality in playground
    - perform necessary unit testing on infinite scroll and search.

- Development

  - create the home page UI through translating the design and requirements into executable code.
  - Integrate the UI with the features developed in playground
  - Develop the filter (based on place of origin) functionality
  - Develop artwork detail drawer.
  - To overcome limitation of Artic public API, develop retry on failure feature
  - Perform necessary manual testing.

- Documentation

- hosting

## Implementation challenges

Even when having vast experience in developing world class products, we faced two technical challenges:

1. Using `background-attachment: fixed` for background images to be static while scrolling the page, we faced some technical limitations on android and ios mobile device browsers. To overcome it, we decided to not render background images, instead we went with using extra `img` tags to make them look like background image. That change fixed our problem completely.

2. When trying to display dimensions of a frame, we decided to create a single component to display height as well as width by just rendering same component twice with different props and then rotating one of them to achieve desired results. But when we actually implemented that code, we found out that there is no way that our component's dimensions can be re-measured after applying transforms. We researched on it and found out that we can solve it using 2 different alternative approaches. First approach was to delete everything that we did and use svg to render everything. And next one was to just create two components, one for each axis respectively. We went with second one to save time.

## Contributors

I would like to thank all the contributors of this project who worked day and night to finish this project on a weekend.

    - Team leaders
        - Vishal S.
        - Mayur Z.
    - Developers
        - Prince H.
        - Aman Y.
    - Designer
        - Pritam B.
