import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Star } from "lucide-react";
import Container from "@/util/Container";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B2B] text-white py-5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <div className="flex items-center -mt-5 -ml-4">
              <Image
                src="/logo/logo.webp"
                alt="HighPaid Jobs Logo"
                height={200}
                width={400}
                priority
                className="h-[120px] w-[300px] md:h-[80px] md:w-[250px] object-contain"
              />
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  How it works
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Term and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <Star className="h-5 w-5 text-white" />
            </div>
            <p className="mb-3">highpaidjobs.us@gmail.com</p>
            <p className="mb-6">WhatsApp: +1 586-665-3331</p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>© 2025 All rights reserved by HighPaidJobs</p>
        </div>
      </Container>
    </footer>
  );
}
