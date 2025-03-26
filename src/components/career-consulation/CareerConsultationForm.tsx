"use client";

import type React from "react";

import { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function CareerConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    dateTime: "",
    employed: "",
    jobSwitch: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="container mx-auto p-8  rounded-lg bg-black">
        <h1 className="text-2xl font-bold text-white md:text-3xl">
          Book a FREE Career Consultation
        </h1>
        <p className="mt-2 mb-6 text-gray-300">
          Please fill out the form below to schedule a 15-minute career auditing
          session
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                placeholder="Enter your name"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-white">
                Mobile <span className="text-red-500">*</span>
              </Label>
              <Input
                id="mobile"
                placeholder="Enter your mobile number"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                required
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dateTime" className="text-white">
              What is the best time for a 15-minute career auditing session?{" "}
              <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="dateTime"
                placeholder="Select date and time"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 pr-10"
                required
                value={formData.dateTime}
                onChange={(e) =>
                  setFormData({ ...formData, dateTime: e.target.value })
                }
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            <p className="text-sm text-gray-400">
              Select your preferred date and time for the meeting.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <Label className="text-white">
                Are you currently employed?{" "}
                <span className="text-red-500">*</span>
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
                  <Label htmlFor="employed-yes" className="text-white">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    id="employed-no"
                    value="no"
                    className="border-gray-600"
                  />
                  <Label htmlFor="employed-no" className="text-white">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <Label className="text-white">
                Are you looking for job switch?{" "}
                <span className="text-red-500">*</span>
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
                  <Label htmlFor="switch-yes" className="text-white">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    id="switch-no"
                    value="no"
                    className="border-gray-600"
                  />
                  <Label htmlFor="switch-no" className="text-white">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              className="px-8 py-2 bg-all-button hover:bg-all-button-hover text-all-button-text text-lg font-semibold cursor-pointer"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
