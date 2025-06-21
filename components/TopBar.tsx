'use client';

import { useEffect, useState, useRef } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTrialStatus } from '@/hooks/useTrialStatus';
import { BuyMeCoffee } from './BuyMeCoffee';
import Image from 'next/image';
// import { supabase } from '@/utils/supabase';

// TopBar component handles user profile display and navigation
export default function TopBar() {
  const { user, signOut } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isInTrial } = useTrialStatus();

  // State for tracking logout process
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Handle click outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle user logout with error handling and loading state
  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await signOut();
      setIsDropdownOpen(false);
      setIsLoggingOut(false);
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Failed to sign out. Please try again.');
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="w-full bg-[#1a1a1a]/90 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo - Left Side */}
        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <Image 
            src="/n9n.png" 
            alt="N9N Logo" 
            width={32} 
            height={32}
            className="rounded-lg"
          />
          <span className="text-xl font-bold text-white">N9N</span>
        </Link>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {!user ? (
            <>
              <BuyMeCoffee />
              <Link
                href="/login"
                className="px-6 py-2 bg-[#5b64a2] hover:bg-[#4a5491] text-white rounded-lg font-medium transition-all duration-300 shadow-lg"
              >
                Sign in
              </Link>
            </>
          ) : (
            <>
              {/* Dashboard/Trial Button */}
              {pathname !== '/dashboard' && (
                <button
                  onClick={() => router.push('/dashboard')}
                  className="hidden sm:block px-4 py-2 bg-[#5b64a2] hover:bg-[#4a5491] text-white rounded-lg font-medium transition-all duration-300"
                >
                  {isInTrial ? "Dashboard" : "Dashboard"}
                </button>
              )}

              <BuyMeCoffee />
              
              {/* User Profile Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 bg-[#5b64a2]/20 border border-[#5b64a2]/30 rounded-full flex items-center justify-center text-[#5b64a2] font-semibold">
                    {user.email?.[0].toUpperCase()}
                  </div>
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#1f1f1f] rounded-lg shadow-xl py-2 z-50 border border-gray-800">
                    <div className="px-4 py-2 border-b border-gray-800">
                      <p className="text-sm text-gray-400 truncate">{user.email}</p>
                    </div>
                    
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Profile & Settings
                    </Link>
                    
                    <button
                      onClick={handleLogout}
                      disabled={isLoggingOut}
                      className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-800 transition-colors disabled:opacity-50"
                    >
                      {isLoggingOut ? 'Signing Out...' : 'Sign Out'}
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 