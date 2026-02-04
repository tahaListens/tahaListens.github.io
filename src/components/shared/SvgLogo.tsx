

export const SvgLogo = () => {
    return(
        <svg 
  viewBox="0 0 100 100" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
  className="w-10 h-10 stroke-current text-heading-1" /* Adjust stroke and color here */
>
  {/* The Planet Body */}
  <circle cx="50" cy="50" r="20" strokeWidth="2" />
  
  {/* The Ring (Back part) */}
  <path 
    d="M20 50C20 42 33.4315 38 50 38C66.5685 38 80 42 80 50" 
    strokeWidth="2" 
    strokeLinecap="round" 
  />
  
  {/* The Ring (Front part) */}
  <path 
    d="M80 50C80 58 66.5685 62 50 62C33.4315 62 20 58 20 50" 
    strokeWidth="2" 
    strokeLinecap="round" 
  />
  
  {/* Optional: Planet Surface Detail (Stripe) */}
</svg>
    )
}