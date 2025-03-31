
const ApplicationNotes = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-serif font-semibold text-school-primary mb-4">Important Notes:</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-600">
        <li>A non-refundable application fee of $100 will be due after submission of this form.</li>
        <li>You will need to submit the following documents separately:
          <ul className="list-circle pl-5 mt-2 space-y-1">
            <li>Birth certificate (copy)</li>
            <li>Academic records from the past 2-3 years</li>
            <li>Teacher recommendation forms</li>
            <li>Standardized test scores (if applicable)</li>
            <li>Immunization records</li>
          </ul>
        </li>
        <li>All fields marked with an asterisk (*) are required.</li>
        <li>For questions about the application process, please contact our Admissions Office at +234 810 247 3418.</li>
      </ul>
    </div>
  );
};

export default ApplicationNotes;
