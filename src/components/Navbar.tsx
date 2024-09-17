"use client";
import { navItems } from "@/constants";
import Logo from "./Logo";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { CheckCircle, Loader } from "lucide-react";
import { toast } from "sonner";
import UserButton from "./UserButton";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState<string>("/");
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setActiveNavItem(pathname);
  }, [pathname]);

  const onLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setLoading(false);

      toast("User Successfully Logged In", {
        className: "bg-[#0f2b0f] text-[#76ff7a] border border-black py-2",
        icon: <CheckCircle size={20} color="#76ff7a" />,
      });
    }, 2000);
  };

  const onLogout = () => {
    setLoading(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setLoading(false);

      toast("User Successfully Logged Out", {
        className: "bg-[#0f2b0f] text-[#76ff7a] border border-black py-2",
        icon: <CheckCircle size={20} color="#76ff7a" />,
      });
    }, 2000);
  };

  const handleScroll = useCallback(() => {
    const scrollThreshold = 20;
    const currentScrollY = window.scrollY;

    setIsSticky(currentScrollY > scrollThreshold);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={`flex flex-row justify-between items-center w-[80%]  px-4 py-2 transition-all duration-200 ease-in ${
        isSticky
          ? "shadow-sm drop-shadow-sm blur-0 shadow-gray-50 sticky top-4 w-[92%] lg:w-[80%] border border-slate-300 py-2 md:py-[12px]  px-6 rounded-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 z-50"
          : ""
      }`}
    >
      <MobileNavbar />
      <div className="hidden md:flex flex-row items-center justify-center gap-10 ">
        <Logo />
        <div className="flex flex-row gap-2 items-center justify-center">
          {navItems.map((item) => (
            <Link href={item.href} key={item.name}>
              <Button
                variant="link"
                className={`hover:no-underline ${
                  activeNavItem === item.href
                    ? "text-slate-900"
                    : "text-slate-500"
                } hover:text-slate-800`}
              >
                <h1 className="text-[16px] font-[400]">{item.name}</h1>
              </Button>
            </Link>
          ))}
        </div>
      </div>
      <div>
        {isLogin ? (
          loading ? (
            <Loader className="h-5 w-5 animate-spin text-slate-700" />
          ) : (
            <UserButton onLogout={onLogout} />
          )
        ) : (
          <div>
            <Button
              className="text-slate-700"
              variant={isSticky ? "link" : "outline"}
              onClick={onLogin}
            >
              {loading ? (
                <Loader className="h-5 w-5 animate-spin" />
              ) : (
                <h1 className="">Login</h1>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
