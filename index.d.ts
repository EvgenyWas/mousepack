import 'vue-router';

declare module '#app' {
  interface PageMeta {
    title: string;
    description: string;
    image?: string;
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    title: string;
    description: string;
    image?: string;
  }
}

export {};
