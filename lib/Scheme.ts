import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, { message: "Please Enter Your Name!" }).max(50),
  number: z.string().min(11, { message: "Please Enter Your Number!" }),
  price: z.string().min(2, { message: "Please Select Your Package!" }),
  image: z.string(),
});
