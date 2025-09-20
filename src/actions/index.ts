import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  subscribeToNewsletter: defineAction({
    input: z.object({
      email: z.string().email()
    }),
    handler: async (input) => {
      const { email } = input

      return {
        email,
        success: true
      }
    }
  })
}