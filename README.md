CMS: https://faishalrave.sanity.studio/

## How to run this app locally

#### Clone this repo into your machine

```bash
git clone https://github.com/hanifrev/faishal-test-rave-fe.git
```

once it done, install it

```bash
cd faishal-test-rave-fe
pnpm install
```

After installation complete, please copy <b>.env</b> file into the root of this repo,

This is the example of .env file

```
VITE_PROJECT_ID=example
VITE_DATASET=example
VITE_API_VERSION=example
```

#### Run this app

```bash
pnpm run dev
```

Open <http://localhost:5173> in your browser to run it

#### Build

```bash
pnpm run build
```

### Tech Stack

React + Vite, Typescript, TailwindCSS, Sanity CMS, RTK Query

#### Folder Structure:

##### inside of /src

- <b>assets</b>: all icons is in here.
- <b>components</b>:
  -- <b>elements</b>: basic components
  -- <b>modules</b>: mid-level components
  -- <b>sections</b>: high-level page sections
  -- <b>lib</b>: application logic and utilities
  --- services: Contains api.ts for RTK Query configuration and API calls
  --- sanityClient.ts: Sanity CMS client setup
  --- store: Redux store setup
  -- <b>App.tsx</b>: Root application component
- <b>constant</b>: Contains typescript declaration files
- <b>index.ts</b>: Entry point for the React application
