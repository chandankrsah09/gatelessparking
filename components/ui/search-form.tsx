"use client";

import React from "react";
import { Label } from "./label";
import { Input } from "./input";
import z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./button";

// Define the schema
const FormSchema = z.object({
  arrivingon: z.string().nonempty("Date is required"),
  arrivingat: z.string().nonempty("Time is required"),
  leavingtime: z.string().nonempty("Leaving time is required"),
  address: z.string().nonempty("Address is required"),
});

function SearchForm() {
  // Set up the form
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      arrivingon: "",
      arrivingat: "",
      leavingtime: "",
      address: "",
    },
  });

  // Handle form submission
  function onSubmit(formData: z.infer<typeof FormSchema>) {
    console.log(formData);
  }

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Address Input */}
      <div className="grid gap-y-1.5 lg:w-1/2">
        <Label htmlFor="parking">Address</Label>
        <Input
          id="parking"
          placeholder="Address"
          {...form.register("address")}
        />
        {/* Error message for address */}
        <p className="text-red-500">{form.formState.errors.address?.message}</p>
      </div>

      {/* Form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="gap-y-2 grid grid-cols-1 lg:grid-cols-4 gap-x-32 items-end"
        >
          {/* Arriving On */}
          <FormField
            control={form.control}
            name="arrivingon"
            render={({ field }) => (
              <FormItem className="lg:w-[250px] grid">
                <FormLabel>Arriving on</FormLabel>
                <FormControl>
                  <Input {...field} type="date" placeholder="Date" />
                </FormControl>
                {/* Error message for arrivingon */}
                <p className="text-red-500">
                  {form.formState.errors.arrivingon?.message}
                </p>
              </FormItem>
            )}
          />

          {/* Arriving At */}
          <FormField
            control={form.control}
            name="arrivingat"
            render={({ field }) => (
              <FormItem className="lg:w-[250px] grid">
                <FormLabel>Arriving at</FormLabel>
                <FormControl>
                  <Input {...field} type="time" placeholder="Time" />
                </FormControl>
                {/* Error message for arrivingat */}
                <p className="text-red-500">
                  {form.formState.errors.arrivingat?.message}
                </p>
              </FormItem>
            )}
          />

          {/* Leaving Time */}
          <FormField
            control={form.control}
            name="leavingtime"
            render={({ field }) => (
              <FormItem className="lg:w-[250px] grid">
                <FormLabel>Leaving time</FormLabel>
                <FormControl>
                  <Input {...field} type="time" placeholder="Time" />
                </FormControl>
                {/* Error message for leavingtime */}
                <p className="text-red-500">
                  {form.formState.errors.leavingtime?.message}
                </p>
              </FormItem>
            )}
          />
          {/* Submit Button */}
          <Button type="submit" className="btn btn-primary">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default SearchForm;
