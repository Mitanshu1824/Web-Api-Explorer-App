import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [providers, setProviders] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://api.apis.guru/v2/providers.json")
      .then((res) => res.json())
      .then((data) => setProviders(data.data));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyan-700">
      <button
        onClick={() => setOpen(true)}
        className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300"
      >
        Explore Web APIs
      </button>

      {open && <Sidebar providers={providers} close={() => setOpen(false)} />}
    </div>
  );
};

export default Home;
