const JobListing = ({ job }) => {
  const { title, type, description, company } = job;
  
  return (
    <div className="job-preview">
      <h2>{title}</h2>
      <p>Type: {type}</p>
      <p>Description: {description}</p>
      <p>Company: {company.name} {company.contactEmail} {company.contactPhone}</p>
    </div>
  );
};

export default JobListing;
