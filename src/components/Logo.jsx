const Logo = ({ className = "w-32 h-32" }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Globe */}
      <circle 
        cx="100" 
        cy="100" 
        r="85" 
        stroke="#4A90B8" 
        strokeWidth="3" 
        fill="none"
      />
      
      {/* Lignes latitude */}
      <ellipse 
        cx="100" 
        cy="100" 
        rx="85" 
        ry="30" 
        stroke="#4A90B8" 
        strokeWidth="1.5" 
        fill="none"
        opacity="0.6"
      />
      <ellipse 
        cx="100" 
        cy="100" 
        rx="85" 
        ry="50" 
        stroke="#4A90B8" 
        strokeWidth="1.5" 
        fill="none"
        opacity="0.4"
      />
      
      {/* Lignes longitude */}
      <ellipse 
        cx="100" 
        cy="100" 
        rx="30" 
        ry="85" 
        stroke="#4A90B8" 
        strokeWidth="1.5" 
        fill="none"
        opacity="0.6"
      />
      <ellipse 
        cx="100" 
        cy="100" 
        rx="50" 
        ry="85" 
        stroke="#4A90B8" 
        strokeWidth="1.5" 
        fill="none"
        opacity="0.4"
      />
      
      {/* Ligne verticale centrale */}
      <line 
        x1="100" 
        y1="15" 
        x2="100" 
        y2="185" 
        stroke="#4A90B8" 
        strokeWidth="2" 
        opacity="0.5"
      />
      
      {/* Avion */}
      <g transform="translate(100, 60)">
        <path
          d="M 0,-8 L 20,0 L 0,3 L -20,0 Z"
          fill="#4A90B8"
        />
        <circle cx="0" cy="0" r="2" fill="#4A90B8"/>
      </g>
      
      {/* Nuages */}
      <g opacity="0.7">
        {/* Nuage gauche */}
        <ellipse cx="40" cy="70" rx="12" ry="8" fill="#B8D4E8"/>
        <ellipse cx="50" cy="68" rx="10" ry="7" fill="#B8D4E8"/>
        
        {/* Nuage droit */}
        <ellipse cx="150" cy="130" rx="14" ry="9" fill="#B8D4E8"/>
        <ellipse cx="162" cy="128" rx="11" ry="8" fill="#B8D4E8"/>
      </g>
      
      {/* Texte SKY NANNY */}
      <text 
        x="100" 
        y="110" 
        textAnchor="middle" 
        fill="#4A90B8" 
        fontSize="24" 
        fontWeight="bold" 
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        SKY
      </text>
      <text 
        x="100" 
        y="135" 
        textAnchor="middle" 
        fill="#4A90B8" 
        fontSize="24" 
        fontWeight="bold" 
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        NANNY
      </text>
    </svg>
  );
};

export default Logo;