import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { SelectValue } from "@radix-ui/react-select";

/* const handleSubmit = (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const number = e.target.number.value;
  const price = e.target.price.value;
  const data = {
    Type: "Fiverr",
    name: name,
    number: number,
    price: price,
  };
  if (name === "" || number === "" || price === "") {
    if (name === "") {
      return toast.warning("Please Enter Your Name", {
        description: `To Complete The  Order Please Enter Your Name`,
        duration: 5000,
      });
    } else if (number === "") {
      return toast.warning("Please Enter Your Number", {
        description: `To Complete The  Order Please Enter Your Number`,
        duration: 5000,
      });
    } else if (price === "") {
      return toast.warning("Please Enter The Amount", {
        description: `To Complete The  Order Please Enter Your Amount`,
        duration: 5000,
      });
    }
  }
  console.log(data);
  return toast.success("Congratulation", {
    description: `Your Order Place Successfully`,
    duration: 5000,
  });
}; */
const handleSubmit = () => {
  return toast.success("Congratulation", {
    description: `Your Order Place Successfully`,
    duration: 5000,
  });
};

const CardItem = () => {
  return (
    <div>
      <Card className="max-w-[400px]">
        <CardHeader>
          <CardTitle className="text-center mb-5">Fiver Review</CardTitle>
          <CardDescription className="text-center">
            Get Review on Fiverr From Top Level Buyer. We Give Review From US
            Authenticated Buyer
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter Your Name Here" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="number">Number</Label>
                <Input id="number" placeholder="Enter Your Number" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="price">Price</Label>
                <Input id="price" placeholder="Enter Amount" />
              </div>
            </div>
            <Button className="mt-8" type="submit">
              Place Order
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardItem;
