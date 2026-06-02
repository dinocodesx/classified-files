import React, { createContext, useContext, useState, useEffect } from "react";

const STORAGE_KEY = "arg_unlocked_keys";

interface ARGContextType {
  unlockedKeys: string[];
  unlock: (key: string) => boolean;
  isUnlocked: (key: string) => boolean;
  resetProgress: () => void;
}

const ARGContext = createContext<ARGContextType | undefined>(undefined);

export const ARGProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [unlockedKeys, setUnlockedKeys] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setUnlockedKeys(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse ARG state", e);
      }
    }
  }, []);

  const unlock = (key: string) => {
    const normalizedKey = key.trim().toLowerCase();
    if (!unlockedKeys.includes(normalizedKey)) {
      const newState = [...unlockedKeys, normalizedKey];
      setUnlockedKeys(newState);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
      return true;
    }
    return false;
  };

  const isUnlocked = (key: string) => {
    return unlockedKeys.includes(key.trim().toLowerCase());
  };

  const resetProgress = () => {
    if (window.confirm("Are you sure you want to reset all your progress and re-lock the archive?")) {
      setUnlockedKeys([]);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <ARGContext.Provider value={{ unlockedKeys, unlock, isUnlocked, resetProgress }}>
      {children}
    </ARGContext.Provider>
  );
};

export const useARGState = () => {
  const context = useContext(ARGContext);
  if (context === undefined) {
    throw new Error("useARGState must be used within an ARGProvider");
  }
  return context;
};
