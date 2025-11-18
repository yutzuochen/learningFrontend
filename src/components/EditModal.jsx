import React, { useState, useEffect } from 'react';

const EditModal = ({ isOpen, onClose, job, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    level: 'LEVEL III',
    years: 1,
    stats: {
      totalClients: 0,
      totalRevenue: 0,
      totalHours: 0
    },
    services: [{ name: '', price: 0 }],
    color: 'orange'
  });

  // Initialize form data when job changes
  useEffect(() => {
    if (job) {
      setFormData({
        ...job,
        services: job.services.length > 0 ? job.services : [{ name: '', price: 0 }]
      });
    } else {
      // Reset for new job
      setFormData({
        title: '',
        level: 'LEVEL III',
        years: 1,
        stats: {
          totalClients: 0,
          totalRevenue: 0,
          totalHours: 0
        },
        services: [{ name: '', price: 0 }],
        color: 'orange'
      });
    }
  }, [job]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'years' ? parseInt(value) || 0 : value
    }));
  };

  const handleStatsChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      stats: {
        ...prev.stats,
        [name]: parseInt(value) || 0
      }
    }));
  };

  const handleServiceChange = (index, field, value) => {
    const updatedServices = [...formData.services];
    updatedServices[index] = {
      ...updatedServices[index],
      [field]: field === 'price' ? parseInt(value) || 0 : value
    };
    setFormData(prev => ({
      ...prev,
      services: updatedServices
    }));
  };

  const addService = () => {
    setFormData(prev => ({
      ...prev,
      services: [...prev.services, { name: '', price: 0 }]
    }));
  };

  const removeService = (index) => {
    if (formData.services.length > 1) {
      setFormData(prev => ({
        ...prev,
        services: prev.services.filter((_, i) => i !== index)
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-800">
            {job ? '編輯職業' : '新增職業'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                職業名稱 *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="例如：美髮設計師"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                等級
              </label>
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="LEVEL I">LEVEL I</option>
                <option value="LEVEL II">LEVEL II</option>
                <option value="LEVEL III">LEVEL III</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                年資
              </label>
              <input
                type="number"
                name="years"
                value={formData.years}
                onChange={handleChange}
                min="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Statistics */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">統計資料</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  累積客量
                </label>
                <input
                  type="number"
                  name="totalClients"
                  value={formData.stats.totalClients}
                  onChange={handleStatsChange}
                  min="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  累積業績
                </label>
                <input
                  type="number"
                  name="totalRevenue"
                  value={formData.stats.totalRevenue}
                  onChange={handleStatsChange}
                  min="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  累積時數
                </label>
                <input
                  type="number"
                  name="totalHours"
                  value={formData.stats.totalHours}
                  onChange={handleStatsChange}
                  min="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-gray-800">服務項目</h3>
              <button
                type="button"
                onClick={addService}
                className="text-orange-500 hover:text-orange-600 text-sm font-medium flex items-center space-x-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>新增服務</span>
              </button>
            </div>

            <div className="space-y-3">
              {formData.services.map((service, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={service.name}
                      onChange={(e) => handleServiceChange(index, 'name', e.target.value)}
                      placeholder="服務名稱"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div className="w-32">
                    <input
                      type="number"
                      value={service.price}
                      onChange={(e) => handleServiceChange(index, 'price', e.target.value)}
                      placeholder="價格"
                      min="0"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  {formData.services.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeService(index)}
                      className="text-red-500 hover:text-red-600 p-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              取消
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
            >
              {job ? '更新' : '新增'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
