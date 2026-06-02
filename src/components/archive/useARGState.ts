import { useState, useEffect } from "react";

const STORAGE_KEY = "arg_unlocked_keys";

export const useARGState = () => {
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
    setUnlockedKeys([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return { unlockedKeys, unlock, isUnlocked, resetProgress };
};
