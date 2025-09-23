import { useRef, useState } from "react";
import { actions } from "astro:actions";
import { Toaster } from "./ui/sonner";
import { toast } from "sonner";


export function NewsletterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSubscribe(event: React.FormEvent) {
    event.preventDefault();
    const email = (event.target as any).email.value;

    setIsLoading(true);

    try {
      const { data, error } = await actions.subscribeToNewsletter({ email });

      if (error) return toast("Something went wrong, try again later.", { position: 'bottom-left' })
      
      console.log(data);

      if (inputRef.current) inputRef.current.value = "";
      setIsLoading(false);
      toast("We've saved your email to keep you updated!", { position: 'bottom-left' })
    } catch (e) {
      setIsLoading(false);
      if (inputRef.current) inputRef.current.value = "";
      toast("Something went wrong, try again later.", { position: 'bottom-left' })
      return console.log("Error: " + e);
    }
  }

  return (
    <>
      <form className="mt-4" onSubmit={handleSubscribe} method="POST">
        <input
          ref={inputRef}
          className="px-4 py-3 text-zinc-300 w-full rounded-lg bg-zinc-800"
          placeholder="johndoe@gmail.com"
          name="email"
          type="email"
        />

        <div className="*:w-full mt-4">
          <button className="background-theme text-lg w-full py-2 rounded-lg hover:opacity-90 transition cursor-pointer flex items-center justify-center">
            {isLoading ? (
              <div className="size-7 border-transparent !border-t-zinc-800 !border-r-zinc-800 border-3 rounded-full grid place-content-center animate-spin"></div>
            ) : (
              "Subscribe"
            )}
          </button>
        </div>
      </form>

      <Toaster />
    </>
  );
}
