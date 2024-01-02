"use client";
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';

type BusinessApplicationAttribute = {
    Name: string;
    Description: string;
    createdAt: string;
    updatedAt: string;
    ArchitectureType: string | null;
    InstallType: string | null;
    InstallStatus: string;
    UserBase: string | null;
    Platform: string | null;
    BusinessCriticality: string | null;
    DataClassification: string | null;
    ActiveUserCount: number | null;
    ApplicationURL: string | null;
    ApplicationCategoryAPM: string | null;
    ApplicationScoringProfileAPM: string | null;
    ApprovalGroup: string | null;
    Created: string | null;
    CreatedBy: string | null;
    Number: string;
    OperationalStatus: string | null;
    Updated: string | null;
    Updates: string | null;
    Vendor: string | null;
    WorkNotes: string | null;
};



type BusinessApplication = {
  id: number;
  attributes: BusinessApplicationAttribute;
};

const BusinessApplications: NextPage = () => {
  const [businessApplications, setBusinessApplications] = useState<BusinessApplication[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:1337/api/business-applications');
      const data = await response.json();
      setBusinessApplications(data.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <header>
        {/* Your Header Content */}
      </header>
      <main>
        <h1>Business Applications</h1>
        <ul>
          {businessApplications.map((app) => (
            <li key={app.id}>
              <h2>{app.attributes.Name}</h2>
              <p>{app.attributes.Description}</p>
              {/* Render other details as needed */}
            </li>
          ))}
        </ul>
      </main>
      <footer>
        {/* Your Footer Content */}
      </footer>
    </div>
  );
};

export default BusinessApplications;
