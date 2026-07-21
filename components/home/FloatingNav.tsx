"use client";

import { NavItem } from "@/data/home";
import { useState } from "react";
import { Menu, X, User, Code, Folder, Briefcase, Award, Mail } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  skills: <Code size={18} />,
  projects: <Folder size={18} />,
  experience: <Briefcase size={18} />,
  certificates: <Award size={18} />,
};

type FloatingNavProps = {
  items: NavItem[];
  show: boolean;
};

export function FloatingNav({ items, show }: FloatingNavProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNavigate = (id: string) => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div
        className={`fixed left-1/2 top-6 z-50 -translate-x-1/2 transition-all duration-500 ease-out hidden md:block ${
          show
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-[#0c0f16]/85 px-3 py-1.5 text-sm shadow-2xl shadow-black/40 backdrop-blur-lg">
          {items.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full px-3 py-1 text-[13px] font-medium text-zinc-200 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
              style={{
                animation: show ? `fadeInUp 0.5s ease-out ${index * 50}ms both` : "none",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation - Icon Dropdown */}
      <div
        className={`fixed right-6 top-6 z-50 transition-all duration-500 ease-out md:hidden ${
          show
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#0c0f16]/85 text-zinc-200 transition hover:bg-white/10 hover:text-white shadow-2xl shadow-black/40 backdrop-blur-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
          aria-label="Toggle navigation"
        >
          {isDropdownOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute top-12 right-0 rounded-lg border border-white/10 bg-[#0c0f16]/95 shadow-2xl shadow-black/40 backdrop-blur-lg p-2 min-w-max">
            {items.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavigate(item.id)}
                className="flex items-center gap-3 px-4 py-2.5 text-[13px] font-medium text-zinc-200 transition hover:bg-white/10 hover:text-white rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
                style={{
                  animation: isDropdownOpen ? `fadeInUp 0.3s ease-out ${index * 30}ms both` : "none",
                }}
              >
                <span className="w-5 h-5">{iconMap[item.id]}</span>
              </a>
            ))}
          </div>
        )}
        </div>
      </div>
    </>
  );
}
