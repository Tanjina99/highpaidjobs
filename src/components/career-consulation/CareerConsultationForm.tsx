"use client";

import React from "react";
import { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import Container from "@/util/Container";

export default function CareerConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    dateTime: null as Date | null,
    employed: "",
    jobSwitch: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="py-10 bg-background">
      <Container>
        <div
          id="contactForm"
          className=" p-8 rounded-lg bg-[#FFFFFF] dark:bg-[#303030]"
        >
          <h1 className="tracking-tight text-base md:text-lg lg:text-2xl text-black font-bold">
            Book a FREE Career Consultation
          </h1>
          <p className="mt-2 mb-6 text-p-text">
            Please fill out the form below to schedule a 15-minute career
            auditing session
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-black">
                  Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  className="rounded-md border border-input bg-transparent text-base shadow-sm placeholder:text-gray-400"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile" className="text-black">
                  Mobile <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="mobile"
                  placeholder="Enter your mobile number"
                  className="rounded-md border border-input bg-transparent text-base shadow-sm placeholder:text-gray-400"
                  required
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-black">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="rounded-md border border-input bg-transparent text-base shadow-sm placeholder:text-gray-400"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateTime" className="text-black">
                What is the best time for a 15-minute career auditing session?{" "}
                <span className="text-destructive">*</span>
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-between text-left font-normal",
                      !formData.dateTime && "text-muted-foreground"
                    )}
                  >
                    {formData.dateTime ? (
                      format(formData.dateTime, "PPP")
                    ) : (
                      <span>Select date and time</span>
                    )}
                    <CalendarIcon className="h-4 w-4 ml-auto" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto p-0"
                  align="start"
                  side="bottom"
                >
                  <Calendar
                    mode="single"
                    selected={formData.dateTime || undefined}
                    onSelect={(selectedDate) =>
                      setFormData({
                        ...formData,
                        dateTime: selectedDate || null,
                      })
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <p className="text-sm text-gray-400">
                Select your preferred date and time for the meeting.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <Label className="text-black">
                  Are you currently employed?{" "}
                  <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  value={formData.employed}
                  onValueChange={(value) =>
                    setFormData({ ...formData, employed: value })
                  }
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      id="employed-yes"
                      value="yes"
                      className="border-gray-600"
                    />
                    <Label htmlFor="employed-yes" className="text-black">
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      id="employed-no"
                      value="no"
                      className="border-gray-600"
                    />
                    <Label htmlFor="employed-no" className="text-black">
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label className="text-black">
                  Are you looking for job switch?{" "}
                  <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  value={formData.jobSwitch}
                  onValueChange={(value) =>
                    setFormData({ ...formData, jobSwitch: value })
                  }
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      id="switch-yes"
                      value="yes"
                      className="border-gray-600"
                    />
                    <Label htmlFor="switch-yes" className="text-black">
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      id="switch-no"
                      value="no"
                      className="border-gray-600"
                    />
                    <Label htmlFor="switch-no" className="text-black">
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                className="px-6 py-2 bg-all-button hover:bg-all-button-hover text-all-button-text text-sm font-semibold cursor-pointer"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
