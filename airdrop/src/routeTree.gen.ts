/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const AirdropIndexLazyImport = createFileRoute('/airdrop/')()
const AirdropFaucetLazyImport = createFileRoute('/airdrop/faucet')()
const AirdropDeploySrc20LazyImport = createFileRoute('/airdrop/deploy-src20')()
const AirdropCreateLazyImport = createFileRoute('/airdrop/create')()
const AirdropClaimSlugLazyImport = createFileRoute('/airdrop/claim/$slug')()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const AirdropIndexLazyRoute = AirdropIndexLazyImport.update({
  path: '/airdrop/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/airdrop/index.lazy').then((d) => d.Route))

const AirdropFaucetLazyRoute = AirdropFaucetLazyImport.update({
  path: '/airdrop/faucet',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/airdrop/faucet.lazy').then((d) => d.Route),
)

const AirdropDeploySrc20LazyRoute = AirdropDeploySrc20LazyImport.update({
  path: '/airdrop/deploy-src20',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/airdrop/deploy-src20.lazy').then((d) => d.Route),
)

const AirdropCreateLazyRoute = AirdropCreateLazyImport.update({
  path: '/airdrop/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/airdrop/create.lazy').then((d) => d.Route),
)

const AirdropClaimSlugLazyRoute = AirdropClaimSlugLazyImport.update({
  path: '/airdrop/claim/$slug',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/airdrop/claim/$slug.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/airdrop/create': {
      id: '/airdrop/create'
      path: '/airdrop/create'
      fullPath: '/airdrop/create'
      preLoaderRoute: typeof AirdropCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/airdrop/deploy-src20': {
      id: '/airdrop/deploy-src20'
      path: '/airdrop/deploy-src20'
      fullPath: '/airdrop/deploy-src20'
      preLoaderRoute: typeof AirdropDeploySrc20LazyImport
      parentRoute: typeof rootRoute
    }
    '/airdrop/faucet': {
      id: '/airdrop/faucet'
      path: '/airdrop/faucet'
      fullPath: '/airdrop/faucet'
      preLoaderRoute: typeof AirdropFaucetLazyImport
      parentRoute: typeof rootRoute
    }
    '/airdrop/': {
      id: '/airdrop/'
      path: '/airdrop'
      fullPath: '/airdrop'
      preLoaderRoute: typeof AirdropIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/airdrop/claim/$slug': {
      id: '/airdrop/claim/$slug'
      path: '/airdrop/claim/$slug'
      fullPath: '/airdrop/claim/$slug'
      preLoaderRoute: typeof AirdropClaimSlugLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/airdrop/create': typeof AirdropCreateLazyRoute
  '/airdrop/deploy-src20': typeof AirdropDeploySrc20LazyRoute
  '/airdrop/faucet': typeof AirdropFaucetLazyRoute
  '/airdrop': typeof AirdropIndexLazyRoute
  '/airdrop/claim/$slug': typeof AirdropClaimSlugLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/airdrop/create': typeof AirdropCreateLazyRoute
  '/airdrop/deploy-src20': typeof AirdropDeploySrc20LazyRoute
  '/airdrop/faucet': typeof AirdropFaucetLazyRoute
  '/airdrop': typeof AirdropIndexLazyRoute
  '/airdrop/claim/$slug': typeof AirdropClaimSlugLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/airdrop/create': typeof AirdropCreateLazyRoute
  '/airdrop/deploy-src20': typeof AirdropDeploySrc20LazyRoute
  '/airdrop/faucet': typeof AirdropFaucetLazyRoute
  '/airdrop/': typeof AirdropIndexLazyRoute
  '/airdrop/claim/$slug': typeof AirdropClaimSlugLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/airdrop/create'
    | '/airdrop/deploy-src20'
    | '/airdrop/faucet'
    | '/airdrop'
    | '/airdrop/claim/$slug'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/airdrop/create'
    | '/airdrop/deploy-src20'
    | '/airdrop/faucet'
    | '/airdrop'
    | '/airdrop/claim/$slug'
  id:
    | '__root__'
    | '/'
    | '/airdrop/create'
    | '/airdrop/deploy-src20'
    | '/airdrop/faucet'
    | '/airdrop/'
    | '/airdrop/claim/$slug'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AirdropCreateLazyRoute: typeof AirdropCreateLazyRoute
  AirdropDeploySrc20LazyRoute: typeof AirdropDeploySrc20LazyRoute
  AirdropFaucetLazyRoute: typeof AirdropFaucetLazyRoute
  AirdropIndexLazyRoute: typeof AirdropIndexLazyRoute
  AirdropClaimSlugLazyRoute: typeof AirdropClaimSlugLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AirdropCreateLazyRoute: AirdropCreateLazyRoute,
  AirdropDeploySrc20LazyRoute: AirdropDeploySrc20LazyRoute,
  AirdropFaucetLazyRoute: AirdropFaucetLazyRoute,
  AirdropIndexLazyRoute: AirdropIndexLazyRoute,
  AirdropClaimSlugLazyRoute: AirdropClaimSlugLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/airdrop/create",
        "/airdrop/deploy-src20",
        "/airdrop/faucet",
        "/airdrop/",
        "/airdrop/claim/$slug"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/airdrop/create": {
      "filePath": "airdrop/create.lazy.tsx"
    },
    "/airdrop/deploy-src20": {
      "filePath": "airdrop/deploy-src20.lazy.tsx"
    },
    "/airdrop/faucet": {
      "filePath": "airdrop/faucet.lazy.tsx"
    },
    "/airdrop/": {
      "filePath": "airdrop/index.lazy.tsx"
    },
    "/airdrop/claim/$slug": {
      "filePath": "airdrop/claim/$slug.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
