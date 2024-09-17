import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full  flex flex-row items-center justify-center border-t border-gray-200 p-10 text-center">
      <p className="text-slate-600 text-center">
        Built by{" "}
        <a
          href={process.env.NEXT_PUBLIC_AKSHIT_WEBSITE}
          className="font-medium underline underline-offset-4 text-slate-800"
          target="_blank"
        >
          akshit
        </a>
        . The source code is available on{" "}
        <a
          href={process.env.NEXT_PUBLIC_PROJECT_GITHUB}
          className="font-medium underline underline-offset-4 text-slate-800"
          target="_blank"
        >
          github
          <ExternalLink className="inline-block ml-1 h-3 w-3" />
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;
