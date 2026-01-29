import { useState, useEffect } from "react";
import { getApi } from "../../utils/network";

const CareersList = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await getApi("careers");
        setCareers(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCareers();
  }, []); // Empty dependency array = run once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Available Careers</h2>
      <div className="grid gap-4">
        {/* {careers.map((career) => (
          <div key={career._id} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{career.title}</h3>
            <p className="text-gray-600">{career.category}</p>
            <p className="mt-2">{career.description}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default CareersList;
