import React, { useState, useEffect } from 'react';
import ProfileHeader from './components/ProfileHeader';
import JobList from './components/JobList';
import EditModal from './components/EditModal';
import { mockApi } from './api/mockApi';

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  // Fetch jobs on mount
  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    setLoading(true);
    try {
      const response = await mockApi.fetchJobs();
      if (response.success) {
        setJobs(response.data);
      }
    } catch (error) {
      console.error('Error loading jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle edit job
  const handleEdit = (job) => {
    setEditingJob(job);
    setIsModalOpen(true);
  };

  // Handle add new job
  const handleAddNew = () => {
    setEditingJob(null);
    setIsModalOpen(true);
  };

  // Handle save job (create or update)
  const handleSave = async (jobData) => {
    try {
      if (editingJob) {
        // Update existing job
        const response = await mockApi.updateJob(editingJob.id, jobData);
        if (response.success) {
          setJobs(jobs.map(job =>
            job.id === editingJob.id ? response.data : job
          ));
        }
      } else {
        // Create new job
        const response = await mockApi.addJob(jobData);
        if (response.success) {
          setJobs([...jobs, response.data]);
        }
      }
      setIsModalOpen(false);
      setEditingJob(null);
    } catch (error) {
      console.error('Error saving job:', error);
    }
  };

  // Handle delete job
  const handleDelete = async (jobId) => {
    if (window.confirm('確定要刪除這個職業嗎？')) {
      try {
        const response = await mockApi.deleteJob(jobId);
        if (response.success) {
          setJobs(jobs.filter(job => job.id !== jobId));
        }
      } catch (error) {
        console.error('Error deleting job:', error);
      }
    }
  };

  // Handle close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingJob(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">載入中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ProfileHeader
        name="陳昱佐"
        email="XXXOOOO@gmail.com"
      />

      <JobList
        jobs={jobs}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAddNew={handleAddNew}
      />

      <EditModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        job={editingJob}
        onSave={handleSave}
      />
    </div>
  );
}

export default App;
