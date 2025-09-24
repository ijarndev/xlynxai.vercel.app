import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend'

const resend = new Resend('re_MfmsaiYu_JR5i87RjPhnEJnzeTqXunFyY'); // TODO: renew API key and move to env

export const server = {
  subscribeToNewsletter: defineAction({
    input: z.object({
      email: z.string().email()
    }),
    handler: async (input) => {
      const { email } = input

      try {
        resend.contacts.create({
          email,
          unsubscribed: false,
          audienceId: '53064908-ec13-47ee-b942-8d98d3dc7483',
        });

        return { email }
      } catch (e) {
        return { error: 'Failed to subscribe, please try again later.' }
        console.log(e)
      }
    }
  })
}