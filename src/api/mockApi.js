import { initialJobs } from '../data/jobsData';

// Simulate async API calls with delays
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// In-memory data store
let jobsStore = [...initialJobs];

export const mockApi = {
  // Fetch all jobs
  async fetchJobs() {
    await delay(500); // Simulate network delay
    return {
      success: true,
      data: [...jobsStore]
    };
  },

  // Add a new job
  async addJob(jobData) {
    await delay(300);
    const newJob = {
      id: Date.now(), // Simple ID generation
      ...jobData,
      stats: jobData.stats || {
        totalClients: 0,
        totalRevenue: 0,
        totalHours: 0
      }
    };
    jobsStore.push(newJob);
    return {
      success: true,
      data: newJob
    };
  },

  // Update existing job
  async updateJob(id, updates) {
    await delay(300);
    const index = jobsStore.findIndex(job => job.id === id);
    if (index === -1) {
      return {
        success: false,
        error: 'Job not found'
      };
    }
    jobsStore[index] = {
      ...jobsStore[index],
      ...updates
    };
    return {
      success: true,
      data: jobsStore[index]
    };
  },

  // Delete a job
  async deleteJob(id) {
    await delay(300);
    const index = jobsStore.findIndex(job => job.id === id);
    if (index === -1) {
      return {
        success: false,
        error: 'Job not found'
      };
    }
    const deletedJob = jobsStore.splice(index, 1)[0];
    return {
      success: true,
      data: deletedJob
    };
  },

  // Reset to initial state
  async resetJobs() {
    await delay(200);
    jobsStore = [...initialJobs];
    return {
      success: true,
      data: jobsStore
    };
  }
};
