import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ApiDetails } from "../types/api";

const ApiService = () => {
  const { provider, apiName } = useParams<{
    provider: string;
    apiName: string;
  }>();

  const [details, setDetails] = useState<ApiDetails | null>(null);

  useEffect(() => {
    if (!provider || !apiName) return;

    fetch(`https://api.apis.guru/v2/${provider}.json`)
      .then(res => res.json())
      .then(data => setDetails(data.apis[apiName]));
  }, [provider, apiName]);

  if (!details) {
    return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-cyan-600 text-white px-12 py-16">

      <div className="flex items-center justify-center gap-6 mb-12">
        {details.info["x-logo"]?.url && (
          <img
            src={details.info["x-logo"].url}
            className="w-20 h-20 bg-white p-2 rounded"
          />
        )}
        <h1 className="text-3xl font-semibold">
          {details.info.title}
        </h1>
      </div>

      <div className="max-w-3xl space-y-10">
        <section>
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-slate-200">{details.info.description}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Swagger</h2>
          <a
            href={details.swaggerUrl}
            target="_blank"
            className="text-cyan-400 break-all"
          >
            {details.swaggerUrl}
          </a>
        </section>
      </div>
    </div>
  );
};

export default ApiService;
