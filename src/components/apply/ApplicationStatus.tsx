
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock, XCircle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

interface ApplicationStatusProps {
  applications: any[];
  onNewApplication: () => void;
}

const ApplicationStatus = ({ applications, onNewApplication }: ApplicationStatusProps) => {
  if (applications.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">You haven't submitted any applications yet.</p>
        <Button className="mt-4" onClick={onNewApplication}>
          Apply Now
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-serif font-semibold text-school-primary mb-4">Your Applications</h3>
      
      {applications.map((app) => (
        <div key={app.id} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-lg font-medium">{app.studentName}</h4>
              <p className="text-sm text-gray-600">Grade: {app.gradeApplying}</p>
              <p className="text-sm text-gray-600">Submitted: {new Date(app.submittedAt).toLocaleDateString()}</p>
            </div>
            <div className="flex items-center">
              {app.status === "Pending" && (
                <div className="flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Pending</span>
                </div>
              )}
              {app.status === "Approved" && (
                <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-4 h-4 mr-1" />
                  <span>Approved</span>
                </div>
              )}
              {app.status === "Rejected" && (
                <div className="flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full">
                  <XCircle className="w-4 h-4 mr-1" />
                  <span>Rejected</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h5 className="font-medium mb-2">Application Details</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="font-medium">Email:</span> {app.email}</p>
                <p><span className="font-medium">Phone:</span> {app.formData.phone}</p>
              </div>
              <div>
                <p><span className="font-medium">Current School:</span> {app.formData.currentSchool}</p>
                <p><span className="font-medium">Current Grade:</span> {app.formData.currentGrade}</p>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end">
              <Button variant="outline" size="sm">View Full Application</Button>
            </div>
          </div>
        </div>
      ))}
      
      <div className="flex justify-center mt-8">
        <Button onClick={onNewApplication}>Submit New Application</Button>
      </div>
    </div>
  );
};

export default ApplicationStatus;
