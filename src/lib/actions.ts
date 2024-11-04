
import { z } from "zod";

const FormSchema = z.object({
  id: z.number(),
  email: z.string().min(1, { message: "Email is required." }),
  isSubscribed: z.boolean(),
});

const CreateSubscriber = FormSchema.omit({ id: true, isSubscribed: true });

type State = {
  errors?: {
    email?: string[];
  };
  message?: string | null;
};
