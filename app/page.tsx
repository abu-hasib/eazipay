import Image from "next/image";
import logo from "@/public/logo.png";
import appstore from "@/public/appstore.png";
import play from "@/public/play.png";
import dashboard from "@/public/dashboard.png";
import ellipse from "@/public/ellipse.png";
import Button from "@/components/button";
import LocalFont from "next/font/local";
import { cn } from "@/lib/utils";

const fontHeading = LocalFont({
  src: "../assets/fonts/MADEMellowPERSONALUSE-Regular.otf",
  variable: "--font-heading",
});

export default function Home() {
  return (
    <main className="">
      <header className="container mx-auto">
        <nav>
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-8">
              <div className="brand">
                <Image src={logo} width={100} height={100} alt="logo" />
              </div>
              <ul className="flex items-center gap-8 h-10 text-dark">
                <li className="text-san">Individual</li>
                <li>Business</li>
                <li>Pricing</li>
                <li>Set your Payroll</li>
              </ul>
            </div>
            <div className="flex gap-4">
              <Button className="text-primary rounded-[24px] border border-primary">
                Login
              </Button>
              <Button className="bg-primary text-white rounded-[24px]">
                Register
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* hero */}
      <section className="flex py-[72px] items-center gap-20 container mx-auto">
        <div className="w-full md:w-[40%] space-y-5">
          <h1
            className={cn(
              "max-w-[552px] text-[64px] leading-[72px] font-bold text-dark-heading",
              fontHeading.className
            )}
          >
            Run your <span className="text-primary">payroll</span>{" "}
            <span className="text-[#B4A572]">easily</span> in{" "}
            <span className="text-[#EA4E4B]">seconds</span>
          </h1>
          <p className="text-dark text-xl max-w-[480px]">
            We’ve built an all-inclusive simple solution for individual and
            businesses to manage staff, pay salaries, bills, and relevant taxes
            all at once.
          </p>
          <Button className="bg-primary rounded-[32px] text-white py-[16px] px-[32px]">
            Start Using Free, Forever
          </Button>
          <div className="mt-8">
            <p>Download the Eazipay App</p>
            <div className="flex justify-start">
              <div className="h-[100px] object-cover">
                <Image
                  src={appstore}
                  alt="appstore"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="w-[100px] object-cover">
                <Image src={play} width={0} height={0} alt="appstore" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex justify-end items-center w-[60%] bg-[url('/ellipse.png')] h-full hidden">
          <div className="w-[80%] h-[310px]">
            <Image
              src={dashboard}
              alt="dashboard"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </section>
      <section className="py-[80px] bg-[url('/vector11.png')]">
        <div className="space-y-8 px-10">
          <div className="text-center">
            <h2
              className={cn(
                "text-[64px] leading-[64px] font-bold text-primary",
                fontHeading.className
              )}
            >
              For Individuals and Businesses
            </h2>
            <p className="text-xl">
              Join 200+ businesses using Eazipays easy solution.
            </p>
          </div>
          <div className="flex">
            <div className="shadow-lg bg-primary text-white p-[64px] space-y-4 rounded-[16px] w-[552px]">
              <h3 className="text-3xl">Tamper-proof Payroll for LIfe</h3>
              <div className="space-y-3">
                <p>Your staff payroll history is kept in one place forever.</p>
                <p>No more excel sheet or manual records.</p>
                <p>Download your payroll history anytime you need it.</p>
              </div>
            </div>
            <div className="shadow-lg bg-primary text-white p-[64px] space-y-4 rounded-[16px] w-[552px] ">
              <h3 className="text-3xl">Tamper-proof Payroll for LIfe</h3>
              <div className="space-y-3">
                <p>Your staff payroll history is kept in one place forever.</p>
                <p>No more excel sheet or manual records.</p>
                <p>Download your payroll history anytime you need it.</p>
              </div>
            </div>
            <div className="shadow-lg bg-primary text-white p-[64px] space-y-4 rounded-[16px] w-[552px]">
              <h3 className="text-3xl">Tamper-proof Payroll for LIfe</h3>
              <div className="space-y-3">
                <p>Your staff payroll history is kept in one place forever.</p>
                <p>No more excel sheet or manual records.</p>
                <p>Download your payroll history anytime you need it.</p>
              </div>
            </div>
          </div>
          <p className="text-center ms-auto me-auto max-w-[621px]">
            We are happy to answer your queries. Please, reach us at {""}
            <span className="text-[#EA4E4B]">hello@myeazipay.com</span>and
            expect our response shortly after.
          </p>
        </div>
      </section>
      <section className="py-[80px]">
        <div className="text-center">
          <h4
            className={cn(
              "ms-auto me-auto text-[56px] leading-[64px] text-primary",
              fontHeading.className
            )}
          >
            How Eazipay works
          </h4>
          <p className="text-dark text-[28px] leading-[36px]">
            Get started in 3 simple steps.
          </p>
        </div>
        <div className="max-w-[984px]">
         <div></div>
        </div>
      </section>
    </main>
  );
}
