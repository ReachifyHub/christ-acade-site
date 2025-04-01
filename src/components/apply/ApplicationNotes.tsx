
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const ApplicationNotes = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-serif text-school-primary">Application Notes</CardTitle>
        <CardDescription>Important information about the application process</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-lg font-medium mb-2">Application Process</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Complete and submit the online application form</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Attend an interview and entrance examination</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Receive admission decision within 5-7 working days</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Complete enrollment by paying the acceptance fee (₦25,000) if admitted</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Required Documents</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Birth certificate or age declaration</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Recent passport photographs (4 copies)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Most recent academic report card</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Transfer certificate (for transferring students)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Immunization records</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Tuition and Fees (2025-2026)</h3>
          <p className="mb-2">Annual tuition fees vary by grade level:</p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Primary School: ₦150,000 - ₦200,000</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Junior Secondary School: ₦200,000 - ₦250,000</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Senior Secondary School: ₦250,000 - ₦300,000</span>
            </li>
          </ul>
          <p className="mt-2 text-sm text-gray-500">
            Additional fees may apply for books, uniforms, transportation, and extracurricular activities.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Need Help?</h3>
          <p>
            If you have any questions about the application process, please contact our admissions office at{" "}
            <a href="tel:+2348102473418" className="text-school-primary hover:underline">
              +234 810 247 3418
            </a>{" "}
            or{" "}
            <a href="mailto:christacadegroupofschool@gmail.com" className="text-school-primary hover:underline">
              christacadegroupofschool@gmail.com
            </a>
            .
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicationNotes;
