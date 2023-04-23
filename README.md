# 🤠 katebrune.net

![example workflow](https://github.com/katebrune/katebrune.net/actions/workflows/build-and-test.yml/badge.svg)

Hi 👋 This project is my personal blog. It's also a space for me to play around with technologies that I'm interested in. You'd probably be interested in it if you're into:

- NextJS
- Tailwind
- React Testing Library
- Storybook
- Github Actions

## Details

### Application

#### Framework

This application uses the [Next.js](https://nextjs.org/) framework. I like working with the Next framework because I think they're opinionated about the right things.

#### Styling

For styling I used [Tailwind](https://tailwindcss.com/). I love using tailwind because it naturally keeps you from creating abstractions too early, and let's you get what you want on the page faster. Their docs are also great.

#### Icons

For icons I used [OpenMoji](https://openmoji.org/). Randomly found them but I think they're cute as hell and super easy to work with.

### Testing

#### Unit Testing

For unit testing I used [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and Jest. I like that React Testing Library reinforces the idea of testing behavior and experience versus testing the internals of a component, I think that just makes sense. In the future I'd like to take a look at [Cypress component testing](https://docs.cypress.io/guides/component-testing/introduction) for unit testing.

#### Visual Testing

As a developer, CSS and styling scares me. You accidentally delete a random class name and suddenly your app looks like hot trash, and your pipeline is still green. I wanted a way to be able to verify that the changes I'm making aren't breaking my application styling unless _they're intentional_, and I wanted it to happen without me having to just stare at a browser (i mean).

I already had [Storybook](https://storybook.js.org/) set up on my application, so I ended up adding [snapshot](https://storybook.js.org/addons/@storybook/addon-storyshots) testing to the storybook setup. It's nice because it can verify my components haven't changed. I can change the viewport to verify that the app is consistent across mobile, table, and web. It's some peace of mind we all need.

#### Accessibility

Accessibility is important when developing frontend applications, but a lot of the time it gets pushed off. I added an [a11y test](https://storybook.js.org/addons/@storybook/addon-a11y) to my setup that uses storybook to make sure my components pass accessibility checks. It runs during my pipeline so I know my code is accessible before merging and deploying.

### Pipeline & Deployment

#### On Commit

On commit, a [hook](https://prettier.io/docs/en/precommit.html) runs prettier to format all the files in the commit. It's pretty sweet because I don't have to worry about how my code looks when I write it, it's always gonna be formatted consistently eventually.

#### On Push

On push, a github actions job is triggered. First i build the app and cache it (so i don't have to build it at every step). I run ESLint, unit tests, accessibility checks, and visual regression tests.

I use vercel for hosting, so on push to non-master branches, a preview is built and deployed. This is great for making sure that things look good before merging to master.

#### Master?

On pushes to the master branch vercel deploys the application to production. I'm a big fan of continuous delivery, and since i'm the only owner of this project adding continuous deployment to this application makes sense. Since building and testing are verified during pushes, and deployment processes are verified during pull request previews, production deployments really feel like "not a big deal", its great.

## Installation

Clone the repository.

```bash
git clone https://github.com/katebrune/katebrune.net.git
```

Set node version.

```bash
nvm use
```

Install dependencies.

```bash
yarn install
```

## Usage

Run the application locally.

```bash
yarn dev
```

Run unit tests.

```bash
yarn test
```

Open Storybook.

```bash
yarn storybook
```

Run visual regression tests.

```bash
yarn test:visual-regression
```

Run a11y tests.

```bash
yarn test:a11y
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
