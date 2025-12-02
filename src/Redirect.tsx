import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectHome: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/ca/en/personal-banking", { replace: true });
  }, [navigate]);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
};

export default RedirectHome;
