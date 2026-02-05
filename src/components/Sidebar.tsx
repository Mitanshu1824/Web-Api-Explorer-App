import { useState } from "react";
import ApiList from "./ApiList";

interface SidebarProps {
  providers: string[];
  close: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ providers, close }) => {
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [openProvider, setOpenProvider] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 bg-black/40 z-50">
      <div className="absolute right-0 top-0 h-full w-96 bg-cyan-700 p-4 overflow-y-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">
            {selectedProvider || "Select Provider"}
          </h2>
          <button onClick={close} className="text-white text-xl hover:text-red-700 hover:text-2xl">✕</button>
        </div>

        {/* Providers */}
        {providers.map(provider => (
          <div key={provider} className="border-b border-white/20 pb-2">

            <button
              onClick={() => {
                setSelectedProvider(provider);
                setOpenProvider(
                  openProvider === provider ? null : provider
                );
              }}
              className="w-full flex justify-between items-center text-white py-2"
            >
              <span>{provider}</span>
              <span>{openProvider === provider ? "▲" : "▼"}</span>
            </button>

            {openProvider === provider && (
              <ApiList provider={provider} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
