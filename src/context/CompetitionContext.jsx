import React, { createContext, useContext, useState, useEffect } from 'react';

const CompetitionContext = createContext();

const LOCAL_STORAGE_KEY = 'tn_happy_kids_chaturthi_state';

const initialData = {
  childName: '',
  childDob: '',
  childAge: '',
  parentName: '',
  parentPhone: '',
  parentEmail: '',
  drawingImage: null, // base64 or file info
  drawingFileName: '',
  drawingFileSize: '',
  activityVideo: null, // base64 or object URL / file info
  videoFileName: '',
  videoFileSize: '',
  registrationCompleted: false,
  uploadCompleted: false,
  activityCompleted: false,
  adCompleted: false,
  rewardPoints: 0,
};

export const CompetitionProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        return { ...initialData, ...JSON.parse(saved) };
      }
    } catch (err) {
      console.error('Error loading localStorage state:', err);
    }
    return initialData;
  });

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    } catch (err) {
      console.error('Error saving state to localStorage:', err);
    }
  }, [data]);

  const updateRegistration = (regData) => {
    setData((prev) => ({
      ...prev,
      ...regData,
      registrationCompleted: true,
    }));
  };

  const updateUploads = (uploadData) => {
    setData((prev) => ({
      ...prev,
      ...uploadData,
      uploadCompleted: true,
    }));
  };

  const completeActivity = () => {
    setData((prev) => ({
      ...prev,
      activityCompleted: true,
    }));
  };

  const completeAd = () => {
    setData((prev) => ({
      ...prev,
      adCompleted: true,
    }));
  };

  const setRewardPoints = (points) => {
    setData((prev) => ({
      ...prev,
      rewardPoints: points,
    }));
  };

  const resetAll = () => {
    setData(initialData);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <CompetitionContext.Provider
      value={{
        data,
        updateRegistration,
        updateUploads,
        completeActivity,
        completeAd,
        setRewardPoints,
        resetAll,
      }}
    >
      {children}
    </CompetitionContext.Provider>
  );
};

export const useCompetition = () => {
  const context = useContext(CompetitionContext);
  if (!context) {
    throw new Error('useCompetition must be used within a CompetitionProvider');
  }
  return context;
};
