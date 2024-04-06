import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import React, { useState } from "react";
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
import { ReloadIcon } from "@radix-ui/react-icons";

const CardItem1 = () => {
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

  const [Loading, setLoading] = useState(false);

  function onSubmit(values: info, event: any) {
    setLoading(true);
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
          name: values.name,
          number: values.number.toString(),
          amount: values.price.toString(),
          taka: values.price.split(",")[1],
          dollar: values.price.split(",")[0],
          paymentSS: data.data.url,
          marketplace: "Fiver",
          date: new Date(new Date().getTime() + 21600000),
        };

        fetch(`${process.env.NEXT_PUBLIC_SERVER}/order`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            setLoading(false);
            if (data.error) {
              return toast.error(`Really Sorry ${values.name} Try again`, {
                description: `Fail to Place Your Order`,
                duration: 5000,
              });
            } else {
              setLoading(false);
              return toast.success(`Congratulation ${values.name}`, {
                description: `Your Order Place Successfully`,
                duration: 5000,
              });
            }
          });
      });
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
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
                        <SelectItem value="10,2400">10$= 2400 Tk</SelectItem>
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

              {Loading ? (
                <Button className="mt-8" disabled>
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button className="mt-8" type="submit">
                  Place Order
                </Button>
              )}
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CardItem1;
