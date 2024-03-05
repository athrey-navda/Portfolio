'use client';

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {resolvedTheme === 'dark' ? (
        <SunIcon width={30} height={30} onClick={() => setTheme('light')} />
      ) : (
        <MoonIcon width={30} height={30} className="text-sky-400" onClick={() => setTheme('dark')} />
      )}
    </div>
  );
}
