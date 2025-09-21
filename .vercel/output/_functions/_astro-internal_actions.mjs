import './chunks/_astro_actions_CH1ArTFd.mjs';
import { d as defineAction } from './chunks/server_D0pVuZzE.mjs';
import { o as objectType, s as stringType } from './chunks/astro/server_BWQvXihV.mjs';

const server = {
  subscribeToNewsletter: defineAction({
    input: objectType({
      email: stringType().email()
    }),
    handler: async (input) => {
      const { email } = input;
      return {
        email,
        success: true
      };
    }
  })
};

export { server };
