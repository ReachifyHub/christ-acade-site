
const ApplicationNotes = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-serif font-semibold text-school-primary mb-4">Important Notes:</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-600">
        <li>All fields marked with an asterisk (*) are required.</li>
        <li>For questions about the application process, please contact our Admissions Office at +234 810 247 3418.</li>
        <li>Parents must provide their ward's BECE results or mock results for JSS3 applicants.</li>
        <li>Primary 6 applicants should submit their most recent school report card.</li>
      </ul>
    </div>
  );
};

export default ApplicationNotes;
