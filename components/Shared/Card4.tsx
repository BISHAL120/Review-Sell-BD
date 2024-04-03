import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import React from "react";
import { formSchema } from "@/lib/Scheme";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { toast } from "sonner";

const CardItem4 = () => {
  type info = z.infer<typeof formSchema>;
  const form = useForm<info>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      number: "",
      price: "",
      image: "",
    },
  });

  function onSubmit(values: info, event: any) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    const form = new FormData(event.target);
    const name = form.get("name");
    const image = form.get("image");

    const data = new FormData();
    if (name !== null && image !== null) {
      data.append("image", image);
      data.append("name", name);
    }

    fetch(
      `https://api.imgbb.com/1/upload?key=2ed27a2abddeff9f1028ada20fc8097d`,
      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const userData = {
          ...values,
          marketPlace: "Fiver",
          image: data.data.url,
        };

        console.log(userData);
        return toast.success(`Congratulation ${values.name}`, {
          description: `Your Order Place Successfully`,
          duration: 5000,
        });
      });
  }

  return (
    <div>
      <Card className="max-w-[400px]">
        <CardHeader>
          <CardTitle className="text-center mb-5">Fiverr Review</CardTitle>
          <CardDescription className="text-center">
            Get Review on Fiverr. We Give Review From US Authenticated Buyer
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number</FormLabel>
                    <FormControl>
                      <Input placeholder="WhatsApp Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select The Amount" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="5,1400">5$= 1400 Tk</SelectItem>
                        <SelectItem className="text-center" value="10,2400">
                          <span>10$</span>= <span>2400 Tk</span>
                        </SelectItem>
                        <SelectItem value="15,3150">15$= 3150 Tk</SelectItem>
                        <SelectItem value="20,4250">20$= 4250 Tk</SelectItem>
                        <SelectItem value="25,3900">25$= 4900 Tk</SelectItem>
                        <SelectItem value="30,5150">30$= 5150 Tk</SelectItem>
                        <SelectItem value="40,7450">40$= 7450 Tk</SelectItem>
                        <SelectItem value="50,9950">50$= 9950 Tk</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ScreenShort</FormLabel>
                    <FormControl>
                      <Input type="file" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="mt-8" type="submit">
                Place Order
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardItem4;
