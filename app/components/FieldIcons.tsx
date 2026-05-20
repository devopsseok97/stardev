export function FrontendIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="4" y1="36" x2="44" y2="36" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="24" y1="36" x2="24" y2="44" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="16" y1="44" x2="32" y2="44" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M16 22l-5 3 5 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M32 22l5 3-5 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="26" y1="19" x2="22" y2="31" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

export function BackendIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="36" height="10" rx="2" stroke="currentColor" strokeWidth="2.5"/>
      <rect x="6" y="19" width="36" height="10" rx="2" stroke="currentColor" strokeWidth="2.5"/>
      <rect x="6" y="32" width="36" height="10" rx="2" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="13" cy="11" r="2" fill="currentColor"/>
      <circle cx="13" cy="24" r="2" fill="currentColor"/>
      <circle cx="13" cy="37" r="2" fill="currentColor"/>
      <line x1="20" y1="11" x2="34" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="20" y1="24" x2="34" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="20" y1="37" x2="34" y2="37" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function AIMLIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="8" cy="14" r="3" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="40" cy="14" r="3" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="8" cy="34" r="3" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="40" cy="34" r="3" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="24" cy="6" r="3" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="24" cy="42" r="3" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="11" y1="15.5" x2="19.5" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="37" y1="15.5" x2="28.5" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="11" y1="32.5" x2="19.5" y2="27" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="37" y1="32.5" x2="28.5" y2="27" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="24" y1="9" x2="24" y2="19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="24" y1="29" x2="24" y2="39" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export function DataIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="8" y1="40" x2="8" y2="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="8" y1="40" x2="44" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <rect x="13" y="26" width="7" height="14" rx="1.5" stroke="currentColor" strokeWidth="2.2"/>
      <rect x="24" y="18" width="7" height="22" rx="1.5" stroke="currentColor" strokeWidth="2.2"/>
      <rect x="35" y="12" width="7" height="28" rx="1.5" stroke="currentColor" strokeWidth="2.2"/>
      <path d="M13 22 L24 16 L35 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 3"/>
    </svg>
  );
}

export function DevOpsIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 8 C16 8 10 14 10 22 C10 26 12 30 15 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M24 40 C32 40 38 34 38 26 C38 22 36 18 33 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M10 22 L15 32 L20 27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M38 26 L33 16 L28 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
  );
}

export function FullstackIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="24" cy="12" rx="14" ry="5" stroke="currentColor" strokeWidth="2.5"/>
      <ellipse cx="24" cy="24" rx="14" ry="5" stroke="currentColor" strokeWidth="2.5"/>
      <ellipse cx="24" cy="36" rx="14" ry="5" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="10" y1="12" x2="10" y2="36" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="38" y1="12" x2="38" y2="36" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
  );
}

export function GameIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 16 C9 16 6 20 6 26 C6 32 9 36 13 36 C15 36 16 35 17 33 L19 30 L29 30 L31 33 C32 35 33 36 35 36 C39 36 42 32 42 26 C42 20 39 16 34 16 L14 16 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <line x1="13" y1="23" x2="13" y2="27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="11" y1="25" x2="15" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="33" cy="23" r="1.8" fill="currentColor"/>
      <circle cx="36" cy="27" r="1.8" fill="currentColor"/>
    </svg>
  );
}
