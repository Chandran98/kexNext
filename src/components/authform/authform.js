/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const authform = ({
  onSubmit,
  formFieldData,
  formSchema,
  defaultValues,
  classBame,
  loading
}) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });



  return (
    <Form className="" {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit())}
        className="space-y-8 items-center justify-center"
      >
        {formFieldData.map((e) => {
          return (
            <div key={e.id} className=" ">
              <FormField
                control={form.control}
                name={e.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{e.title}</FormLabel>
                    <FormControl>
                      <Input placeholder={e.placeholder} {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          );
        })}

        <Button className={`${classBame}`} type="submit">
       {loading? "loading"  :"Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default authform;
