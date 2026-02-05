import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiMap } from "../types/api";

interface ApiListProps {
  provider: string;
}

const ApiList: React.FC<ApiListProps> = ({ provider }) => {
  const [apis, setApis] = useState<ApiMap>({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.apis.guru/v2/${provider}.json`)
      .then(res => res.json())
      .then(data => setApis(data.apis));
  }, [provider]);

  return (
    <div className="mt-2 space-y-2">
      {Object.entries(apis).map(([apiName, apiData]) => (
        <div
          key={apiName}
          className="bg-white/10 rounded-md p-3 text-white"
        >
          <p className="font-medium text-sm">{apiName}</p>

          <p className="text-xs text-slate-200 mt-1">
            {apiData.info.description?.slice(0, 70) || "No description"}
          </p>

          <button
            onClick={() => navigate(`/api/${provider}/${apiName}`)}
            className="mt-2 text-xs bg-cyan-500 px-3 py-1 rounded hover:text-black"
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default ApiList;
