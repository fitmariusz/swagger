declare module 'swagger-ui-express' {
   import { RequestHandler } from 'express';

  export const serve: RequestHandler;

  interface SwaggerUiOptions {
    explorer?: boolean;
    customCss?: string;
    customJs?: string;
    customfavIcon?: string;
    swaggerOptions?: any;
    swaggerUrl?: string;
  }

  export function setup(
    swaggerDoc: object,
    options?: SwaggerUiOptions,
    swaggerOptions?: object,
    customCss?: string,
    customfavIcon?: string,
    swaggerUrl?: string
  ): RequestHandler;
}
